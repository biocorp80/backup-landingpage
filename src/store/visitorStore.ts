import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface VisitorEntry {
    id: string;
    timestamp: string;
    page: string;
    referrer: string;
    device: string;
    browser: string;
    os: string;
    screenSize: string;
    country: string;
    sessionDuration: number; // seconds
}

interface VisitorStore {
    visitors: VisitorEntry[];
    trackVisit: (page: string) => void;
    clearVisitors: () => void;
}

function detectBrowser(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
    return 'Unknown';
}

function detectOS(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac OS')) return 'macOS';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
    if (ua.includes('Linux')) return 'Linux';
    return 'Unknown';
}

function detectDevice(): string {
    const ua = navigator.userAgent;
    if (/Mobi|Android|iPhone|iPad/i.test(ua)) return 'Mobile';
    if (/Tablet|iPad/i.test(ua)) return 'Tablet';
    return 'Desktop';
}

// Generate realistic mock visitor data for demo
function generateMockVisitors(): VisitorEntry[] {
    const pages = ['/', '/blog', '/blog/5-kesalahan-fatal-memilih-judul-skripsi', '/blog/panduan-lengkap-menulis-bab-1-skripsi', '/blog/ai-mengubah-cara-mahasiswa-mengerjakan-skripsi-2026', '/#pricing', '/#how-it-works', '/about'];
    const browsers = ['Chrome', 'Safari', 'Firefox', 'Edge'];
    const oses = ['Windows', 'macOS', 'Android', 'iOS', 'Linux'];
    const devices = ['Desktop', 'Mobile', 'Tablet'];
    const cities = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Semarang', 'Malang', 'Makassar', 'Medan', 'Depok', 'Tangerang'];
    const screens = ['1920x1080', '1366x768', '414x896', '390x844', '1440x900', '375x812', '360x800', '1536x864'];

    const now = Date.now();
    const entries: VisitorEntry[] = [];

    for (let i = 0; i < 85; i++) {
        const hoursAgo = Math.random() * 72; // last 3 days
        const deviceType = devices[Math.floor(Math.random() * devices.length)];
        entries.push({
            id: `v-${Date.now()}-${i}`,
            timestamp: new Date(now - hoursAgo * 3600 * 1000).toISOString(),
            page: pages[Math.floor(Math.random() * pages.length)],
            referrer: Math.random() > 0.5 ? 'Google Search' : Math.random() > 0.5 ? 'Instagram' : 'Direct',
            device: deviceType,
            browser: browsers[Math.floor(Math.random() * browsers.length)],
            os: deviceType === 'Mobile' ? (Math.random() > 0.4 ? 'Android' : 'iOS') : oses[Math.floor(Math.random() * 3)],
            screenSize: deviceType === 'Desktop' ? screens[Math.floor(Math.random() * 4)] : screens[4 + Math.floor(Math.random() * 4)],
            country: cities[Math.floor(Math.random() * cities.length)],
            sessionDuration: Math.floor(Math.random() * 600) + 10,
        });
    }

    return entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export const useVisitorStore = create<VisitorStore>()(
    persist(
        (set, get) => ({
            visitors: get()?.visitors?.length ? get().visitors : generateMockVisitors(),

            trackVisit: (page: string) => {
                const entry: VisitorEntry = {
                    id: `v-${Date.now()}`,
                    timestamp: new Date().toISOString(),
                    page,
                    referrer: document.referrer || 'Direct',
                    device: detectDevice(),
                    browser: detectBrowser(),
                    os: detectOS(),
                    screenSize: `${window.screen.width}x${window.screen.height}`,
                    country: 'Unknown',
                    sessionDuration: 0,
                };
                set((state) => ({ visitors: [entry, ...state.visitors].slice(0, 500) }));
            },

            clearVisitors: () => set({ visitors: [] }),
        }),
        { name: 'dosbing-visitor-analytics' }
    )
);
