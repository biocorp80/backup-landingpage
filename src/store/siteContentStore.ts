import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabaseClient';

export interface SiteContent {
    announcement: {
        enabled: boolean;
        items: { text: string; emoji: string; color: 'teal' | 'blue' | 'violet' | 'orange' }[];
    };
    hero: {
        headline: string;
        subheadline: string;
        ctaText: string;
        ctaLink: string;
        typingWords: string[];
        images: { src: string; alt: string }[];
    };
    header: {
        logoText: string;
        logoAccent: string;
        navLinks: { label: string; to: string; isScrollLink: boolean }[];
        ctaText: string;
        ctaLink: string;
    };
    features: { title: string; description: string; emoji: string }[];
    contact: {
        whatsappNumber: string;
        email: string;
        address: string;
    };
    seo: {
        siteTitle: string;
        siteDescription: string;
        ogImage: string;
        keywords: string;
        googleAnalyticsId: string;
        robots: string;
    };
}

const DEFAULT_CONTENT: SiteContent = {
    announcement: {
        enabled: true,
        items: [
            { text: 'PROMO SPESIAL: DISKON HINGGA 70% — SKRIPSIMU BERES DALAM HITUNGAN MENIT! ✨', emoji: '🔥', color: 'teal' },
            { text: 'TIPS SKRIPSI: MANFAATKAN WAKTU LUANGMU UNTUK GARAP SKRIPSI — DIJAMIN PRODUKTIF! 💪', emoji: '🎯', color: 'blue' },
        ],
    },
    hero: {
        headline: 'Buntu Ide Judul?\nSelesai dalam 15 Menit.',
        subheadline: 'Dosbing.ai hadir menyelamatkanmu dari writer\'s block. Dapatkan ide judul yang {typing} dan susun kerangka Bab 1-5 dalam hitungan menit. Mulai dari Rp 10rb aja! 🚀',
        ctaText: 'Mulai Sekarang',
        ctaLink: 'https://lynk.id/dosbing.ai',
        typingWords: ['Mahasiswa Akhir', 'Pejuang Skripsi', 'Calon Sarjana', 'Siswa Ambis'],
        images: [
            { src: '/hero-1.png', alt: 'Mahasiswi berhijab sedang belajar' },
            { src: '/hero-2.png', alt: 'Mahasiswa Indonesia di kampus' },
            { src: '/hero-3.png', alt: 'Mahasiswi mengerjakan skripsi' },
        ],
    },
    header: {
        logoText: 'Dosbing',
        logoAccent: '.ai',
        navLinks: [
            { label: 'Produk', to: '#pricing', isScrollLink: true },
            { label: 'Cara Kerja', to: '#how-it-works', isScrollLink: true },
            { label: 'FAQ', to: '#faq', isScrollLink: true },
            { label: 'Blog', to: '/blog', isScrollLink: false },
            { label: 'Tentang Kami', to: '/about', isScrollLink: false },
        ],
        ctaText: '🚀 Mulai Sekarang',
        ctaLink: 'https://wa.me/628567890596',
    },
    features: [
        { title: 'Generator Judul', description: '3 opsi judul skripsi tervalidasi akademik dalam 15 menit', emoji: '🎯' },
        { title: 'Kerangka Skripsi', description: 'Bab 1-5 lengkap dengan sub-bab yang relevan', emoji: '📋' },
        { title: 'Validasi 4 Pilar', description: 'Analisis Necessity, Novelty, Relevance, Feasibility', emoji: '✅' },
        { title: 'Database PDDikti', description: 'Terintegrasi dengan data kampus seluruh Indonesia', emoji: '🏫' },
    ],
    contact: {
        whatsappNumber: '628567890596',
        email: 'dosbingai@gmail.com',
        address: 'Cipinang, Cimaung, Kab. Bandung, Jawa Barat',
    },
    seo: {
        siteTitle: 'Dosbing.ai — Bimbingan Skripsi AI untuk Mahasiswa Indonesia',
        siteDescription: 'Dosbing.ai membantu mahasiswa Indonesia menyelesaikan skripsi dengan AI. Generator judul, kerangka Bab 1-5, dan validasi akademik dalam hitungan menit.',
        ogImage: '/og-image.png',
        keywords: 'dosbing, skripsi, AI, bimbingan skripsi, judul skripsi, kerangka skripsi, mahasiswa Indonesia',
        googleAnalyticsId: '',
        robots: 'index, follow',
    },
};

interface SiteContentStore {
    content: SiteContent;
    syncing: boolean;
    updateContent: (partial: Partial<SiteContent>) => void;
    resetContent: () => void;
    loadFromSupabase: () => Promise<void>;
    saveToSupabase: () => Promise<void>;
}

export const useSiteContentStore = create<SiteContentStore>()(
    persist(
        (set, get) => ({
            content: DEFAULT_CONTENT,
            syncing: false,

            updateContent: (partial) => {
                set((state) => ({
                    content: { ...state.content, ...partial },
                }));
                // Debounced save to Supabase
                get().saveToSupabase();
            },

            resetContent: () => {
                set({ content: DEFAULT_CONTENT });
                get().saveToSupabase();
            },

            loadFromSupabase: async () => {
                try {
                    const { data, error } = await supabase
                        .from('site_content')
                        .select('content')
                        .eq('id', 'main')
                        .single();

                    if (!error && data?.content) {
                        set({ content: { ...DEFAULT_CONTENT, ...(data.content as Partial<SiteContent>) } });
                    }
                } catch {
                    // Fallback to localStorage (handled by persist middleware)
                }
            },

            saveToSupabase: async () => {
                const state = get();
                if (state.syncing) return;
                set({ syncing: true });

                try {
                    await supabase
                        .from('site_content')
                        .upsert({
                            id: 'main',
                            content: state.content,
                            updated_at: new Date().toISOString(),
                        });
                } catch {
                    // Silent fail — localStorage cache is the fallback
                } finally {
                    set({ syncing: false });
                }
            },
        }),
        { name: 'dosbing-site-content' }
    )
);

export { DEFAULT_CONTENT };
