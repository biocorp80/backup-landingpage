import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabaseClient';

export interface MediaItem {
    id: string;
    name: string;
    type: 'image' | 'audio';
    mimeType: string;
    size: number;
    url: string;
    storagePath: string;
    uploadedAt: string;
}

interface MediaStore {
    items: MediaItem[];
    activeMusic: string;
    loading: boolean;
    addItem: (file: File) => Promise<MediaItem | null>;
    removeItem: (id: string) => Promise<void>;
    setActiveMusic: (id: string) => void;
    getImageUrl: (id: string) => string | undefined;
    getMusicUrl: () => string;
    loadFromSupabase: () => Promise<void>;
}

const BUCKET_NAME = 'media';

export const useMediaStore = create<MediaStore>()(
    persist(
        (set, get) => ({
            items: [],
            activeMusic: '',
            loading: false,

            addItem: async (file: File) => {
                const isImage = file.type.startsWith('image/');
                const isAudio = file.type.startsWith('audio/');
                if (!isImage && !isAudio) return null;

                const fileType = isImage ? 'image' : 'audio';
                const fileId = `${fileType}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
                const ext = file.name.split('.').pop() ?? 'bin';
                const storagePath = `${fileType}s/${fileId}.${ext}`;

                try {
                    // Upload to Supabase Storage
                    const { error: uploadError } = await supabase.storage
                        .from(BUCKET_NAME)
                        .upload(storagePath, file, {
                            cacheControl: '3600',
                            upsert: false,
                        });

                    if (uploadError) {
                        console.error('Upload error:', uploadError);
                        return null;
                    }

                    // Get public URL
                    const { data: urlData } = supabase.storage
                        .from(BUCKET_NAME)
                        .getPublicUrl(storagePath);

                    const url = urlData.publicUrl;

                    const item: MediaItem = {
                        id: fileId,
                        name: file.name,
                        type: fileType,
                        mimeType: file.type,
                        size: file.size,
                        url,
                        storagePath,
                        uploadedAt: new Date().toISOString(),
                    };

                    // Save metadata to DB
                    await supabase.from('media').insert({
                        id: fileId,
                        name: file.name,
                        type: fileType,
                        mime_type: file.type,
                        size: file.size,
                        storage_path: storagePath,
                        url,
                    });

                    set((state) => ({ items: [...state.items, item] }));
                    return item;
                } catch (err) {
                    console.error('Media upload failed:', err);
                    return null;
                }
            },

            removeItem: async (id: string) => {
                const item = get().items.find((i) => i.id === id);
                if (item) {
                    // Delete from storage
                    await supabase.storage.from(BUCKET_NAME).remove([item.storagePath]);
                    // Delete from DB
                    await supabase.from('media').delete().eq('id', id);
                }

                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                    activeMusic: state.activeMusic === id ? '' : state.activeMusic,
                }));
            },

            setActiveMusic: (id: string) => {
                set({ activeMusic: id });
                // Save setting to Supabase
                supabase.from('settings').upsert({ key: 'active_music', value: id }).then();
            },

            getImageUrl: (id: string) => {
                return get().items.find((i) => i.id === id)?.url;
            },

            getMusicUrl: () => {
                const state = get();
                if (state.activeMusic) {
                    const item = state.items.find((i) => i.id === state.activeMusic);
                    if (item) return item.url;
                }
                return '/theme-song.mp3';
            },

            loadFromSupabase: async () => {
                set({ loading: true });
                try {
                    // Load media items
                    const { data: mediaData } = await supabase
                        .from('media')
                        .select('*')
                        .order('uploaded_at', { ascending: false });

                    if (mediaData) {
                        const items: MediaItem[] = mediaData.map((row) => ({
                            id: row.id,
                            name: row.name,
                            type: row.type,
                            mimeType: row.mime_type,
                            size: row.size,
                            url: row.url,
                            storagePath: row.storage_path,
                            uploadedAt: row.uploaded_at,
                        }));
                        set({ items });
                    }

                    // Load active music setting
                    const { data: settingData } = await supabase
                        .from('settings')
                        .select('value')
                        .eq('key', 'active_music')
                        .single();

                    if (settingData?.value) {
                        set({ activeMusic: settingData.value });
                    }
                } catch {
                    // Fallback to localStorage cache
                } finally {
                    set({ loading: false });
                }
            },
        }),
        { name: 'dosbing-media-store' }
    )
);
