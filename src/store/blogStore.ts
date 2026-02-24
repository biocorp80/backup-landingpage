import { create } from 'zustand';
import { supabase } from '../lib/supabaseClient';
import { BlogPost } from '../data/blog-posts';
import { Category } from '../data/categories';
import { Tag } from '../data/tags';

interface BlogState {
    posts: BlogPost[];
    categories: Category[];
    tags: Tag[];
    loading: boolean;

    // Actions
    loadFromSupabase: () => Promise<void>;
    addPost: (post: Omit<BlogPost, 'id'>) => Promise<BlogPost | null>;
    updatePost: (id: string, updates: Partial<BlogPost>) => Promise<boolean>;
    deletePost: (id: string) => Promise<boolean>;
}

export const useBlogStore = create<BlogState>()((set, get) => ({
    posts: [],
    categories: [],
    tags: [],
    loading: false,

    loadFromSupabase: async () => {
        set({ loading: true });
        try {
            // Fetch all in parallel
            const [postsRes, catsRes, tagsRes] = await Promise.all([
                supabase.from('blog_posts').select('*').order('published_at', { ascending: false }),
                supabase.from('categories').select('*').order('name'),
                supabase.from('tags').select('*').order('name')
            ]);

            if (postsRes.data) {
                // Map snake_case from DB to camelCase for the app
                const mappedPosts: BlogPost[] = postsRes.data.map(p => ({
                    id: p.id,
                    title: p.title,
                    slug: p.slug,
                    excerpt: p.excerpt,
                    content: p.content,
                    coverImage: p.cover_image,
                    categoryId: p.category_id,
                    tagIds: p.tag_ids || [],
                    author: p.author,
                    status: p.status,
                    publishedAt: p.published_at,
                    metaTitle: p.meta_title,
                    metaDescription: p.meta_description,
                    readingTime: p.reading_time
                }));
                set({ posts: mappedPosts });
            }

            if (catsRes.data) set({ categories: catsRes.data });
            if (tagsRes.data) set({ tags: tagsRes.data });

        } catch (err) {
            console.error('Failed to load blog data:', err);
        } finally {
            set({ loading: false });
        }
    },

    addPost: async (post) => {
        try {
            const { data, error } = await supabase.from('blog_posts').insert({
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: post.content,
                cover_image: post.coverImage,
                category_id: post.categoryId,
                tag_ids: post.tagIds,
                author: post.author,
                status: post.status,
                published_at: post.publishedAt,
                meta_title: post.metaTitle,
                meta_description: post.metaDescription,
                reading_time: post.readingTime
            }).select().single();

            if (error) throw error;

            const newPost: BlogPost = {
                ...post,
                id: data.id
            };

            set(state => ({ posts: [newPost, ...state.posts] }));
            return newPost;
        } catch (err) {
            console.error('Error adding post:', err);
            return null;
        }
    },

    updatePost: async (id, updates) => {
        try {
            const dbUpdates: any = {};
            if (updates.title) dbUpdates.title = updates.title;
            if (updates.slug) dbUpdates.slug = updates.slug;
            if (updates.excerpt) dbUpdates.excerpt = updates.excerpt;
            if (updates.content) dbUpdates.content = updates.content;
            if (updates.coverImage) dbUpdates.cover_image = updates.coverImage;
            if (updates.categoryId) dbUpdates.category_id = updates.categoryId;
            if (updates.tagIds) dbUpdates.tag_ids = updates.tagIds;
            if (updates.author) dbUpdates.author = updates.author;
            if (updates.status) dbUpdates.status = updates.status;
            if (updates.publishedAt) dbUpdates.published_at = updates.publishedAt;
            if (updates.metaTitle) dbUpdates.meta_title = updates.metaTitle;
            if (updates.metaDescription) dbUpdates.meta_description = updates.metaDescription;
            if (updates.readingTime) dbUpdates.reading_time = updates.readingTime;

            const { error } = await supabase
                .from('blog_posts')
                .update(dbUpdates)
                .eq('id', id);

            if (error) throw error;

            set(state => ({
                posts: state.posts.map(p => p.id === id ? { ...p, ...updates } : p)
            }));
            return true;
        } catch (err) {
            console.error('Error updating post:', err);
            return false;
        }
    },

    deletePost: async (id) => {
        try {
            const { error } = await supabase.from('blog_posts').delete().eq('id', id);
            if (error) throw error;
            set(state => ({ posts: state.posts.filter(p => p.id !== id) }));
            return true;
        } catch (err) {
            console.error('Error deleting post:', err);
            return false;
        }
    }
}));
