import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MediaItem {
    id: string;
    name: string;
    type: 'image' | 'audio';
    mimeType: string;
    size: number;  // bytes
    dataUrl: string; // base64 data URL
    uploadedAt: string;
}

interface MediaStore {
    items: MediaItem[];
    activeMusic: string; // id of current music, empty = default /theme-song.mp3
    addItem: (file: File) => Promise<MediaItem | null>;
    removeItem: (id: string) => void;
    setActiveMusic: (id: string) => void;
    getImageUrl: (id: string) => string | undefined;
    getMusicUrl: () => string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;  // 5MB max for localStorage friendliness
const MAX_AUDIO_SIZE = 8 * 1024 * 1024; // 8MB for audio

function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });
}

export const useMediaStore = create<MediaStore>()(
    persist(
        (set, get) => ({
            items: [],
            activeMusic: '',

            addItem: async (file: File) => {
                const isImage = file.type.startsWith('image/');
                const isAudio = file.type.startsWith('audio/');
                if (!isImage && !isAudio) return null;

                const maxSize = isAudio ? MAX_AUDIO_SIZE : MAX_FILE_SIZE;
                if (file.size > maxSize) return null;

                try {
                    const dataUrl = await fileToDataUrl(file);
                    const item: MediaItem = {
                        id: `media-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                        name: file.name,
                        type: isImage ? 'image' : 'audio',
                        mimeType: file.type,
                        size: file.size,
                        dataUrl,
                        uploadedAt: new Date().toISOString(),
                    };
                    set((state) => ({ items: [...state.items, item] }));
                    return item;
                } catch {
                    return null;
                }
            },

            removeItem: (id: string) => {
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                    activeMusic: state.activeMusic === id ? '' : state.activeMusic,
                }));
            },

            setActiveMusic: (id: string) => set({ activeMusic: id }),

            getImageUrl: (id: string) => {
                return get().items.find((i) => i.id === id)?.dataUrl;
            },

            getMusicUrl: () => {
                const state = get();
                if (state.activeMusic) {
                    const item = state.items.find((i) => i.id === state.activeMusic);
                    if (item) return item.dataUrl;
                }
                return '/theme-song.mp3';
            },
        }),
        { name: 'dosbing-media-store' }
    )
);
