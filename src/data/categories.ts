export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    color: string;
}

export const categories: Category[] = [
    {
        id: 'cat-1',
        name: 'Tips Skripsi',
        slug: 'tips-skripsi',
        description: 'Panduan dan tips praktis mengerjakan skripsi',
        color: 'teal',
    },
    {
        id: 'cat-2',
        name: 'Metode Penelitian',
        slug: 'metode-penelitian',
        description: 'Pembahasan mendalam tentang metodologi riset',
        color: 'blue',
    },
    {
        id: 'cat-3',
        name: 'Kehidupan Mahasiswa',
        slug: 'kehidupan-mahasiswa',
        description: 'Cerita, motivasi, dan insight dunia kampus',
        color: 'violet',
    },
    {
        id: 'cat-4',
        name: 'AI & Teknologi',
        slug: 'ai-teknologi',
        description: 'Pemanfaatan AI dan teknologi dalam pendidikan',
        color: 'cyan',
    },
    {
        id: 'cat-5',
        name: 'Karir & Akademik',
        slug: 'karir-akademik',
        description: 'Persiapan karir pasca kampus dan jalur akademik',
        color: 'orange',
    },
];
