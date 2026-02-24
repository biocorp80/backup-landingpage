import { create } from 'zustand';
import { supabase } from '../lib/supabaseClient';

interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'editor';
    avatar: string;
}

interface AuthState {
    user: AdminUser | null;
    isLoggedIn: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
    updateProfile: (data: Partial<AdminUser>) => void;
    initAuth: () => Promise<void>;
}

function mapUser(supaUser: { id: string; email?: string }): AdminUser {
    const email = supaUser.email ?? '';
    const name = email.split('@')[0] ?? 'Admin';
    return {
        id: supaUser.id,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email,
        role: 'admin',
        avatar: name.slice(0, 2).toUpperCase(),
    };
}

export const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    isLoggedIn: false,
    loading: true,

    initAuth: async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                set({ user: mapUser(session.user), isLoggedIn: true, loading: false });
            } else {
                set({ user: null, isLoggedIn: false, loading: false });
            }

            // Listen for auth changes
            supabase.auth.onAuthStateChange((_event, session) => {
                if (session?.user) {
                    set({ user: mapUser(session.user), isLoggedIn: true, loading: false });
                } else {
                    set({ user: null, isLoggedIn: false, loading: false });
                }
            });
        } catch {
            set({ loading: false });
        }
    },

    login: async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return {
                    success: false, error: error.message === 'Invalid login credentials'
                        ? 'Email atau password salah.'
                        : error.message
                };
            }

            if (data.user) {
                set({ user: mapUser(data.user), isLoggedIn: true });
                return { success: true };
            }

            return { success: false, error: 'Login gagal.' };
        } catch (err) {
            return { success: false, error: err instanceof Error ? err.message : 'Terjadi kesalahan.' };
        }
    },

    logout: async () => {
        await supabase.auth.signOut();
        set({ user: null, isLoggedIn: false });
    },

    updateProfile: (data) =>
        set((state) => ({
            user: state.user ? { ...state.user, ...data } : null,
        })),
}));
