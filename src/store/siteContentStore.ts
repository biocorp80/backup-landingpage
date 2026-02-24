import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SiteContent {
    // Announcement / Running Text
    announcement: {
        enabled: boolean;
        items: { text: string; emoji: string; color: 'teal' | 'blue' | 'violet' | 'orange' }[];
    };

    // Hero Section
    hero: {
        headline: string;
        subheadline: string;
        ctaText: string;
        ctaLink: string;
        typingWords: string[];
        images: { src: string; alt: string }[];
    };

    // Header / Navbar
    header: {
        logoText: string;
        logoAccent: string;
        navLinks: { label: string; to: string; isScrollLink: boolean }[];
        ctaText: string;
        ctaLink: string;
    };

    // Features
    features: { title: string; description: string; emoji: string }[];

    // Contact
    contact: {
        whatsappNumber: string;
        email: string;
        address: string;
    };

    // SEO Global
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
        headline: 'Bimbingan Skripsi Berbasis AI',
        subheadline: 'Dosbing.ai adalah asisten riset AI yang membantu mahasiswa Indonesia menyelesaikan skripsi dengan percaya diri — dari judul hingga kerangka.',
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
        ctaLink: 'https://wa.me/6282118709218',
    },
    features: [
        { title: 'Generator Judul', description: '3 opsi judul skripsi tervalidasi akademik dalam 15 menit', emoji: '🎯' },
        { title: 'Kerangka Skripsi', description: 'Bab 1-5 lengkap dengan sub-bab yang relevan', emoji: '📋' },
        { title: 'Validasi 4 Pilar', description: 'Analisis Necessity, Novelty, Relevance, Feasibility', emoji: '✅' },
        { title: 'Database PDDikti', description: 'Terintegrasi dengan data kampus seluruh Indonesia', emoji: '🏫' },
    ],
    contact: {
        whatsappNumber: '6282118709218',
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
    updateContent: (partial: Partial<SiteContent>) => void;
    resetContent: () => void;
}

export const useSiteContentStore = create<SiteContentStore>()(
    persist(
        (set) => ({
            content: DEFAULT_CONTENT,
            updateContent: (partial) =>
                set((state) => ({
                    content: { ...state.content, ...partial },
                })),
            resetContent: () => set({ content: DEFAULT_CONTENT }),
        }),
        { name: 'dosbing-site-content' }
    )
);

export { DEFAULT_CONTENT };
