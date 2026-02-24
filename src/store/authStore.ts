import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    updateProfile: (data: Partial<AdminUser>) => void;
}

// Mock admin credentials — replace with real API call in production
const MOCK_ADMINS: (AdminUser & { password: string })[] = [
    {
        id: 'user-1',
        name: 'Super Admin',
        email: 'admin@dosbing.ai',
        password: 'admin123',
        role: 'admin',
        avatar: 'SA',
    },
];

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoggedIn: false,

            login: async (email: string, password: string) => {
                // Simulate API delay
                await new Promise((res) => setTimeout(res, 800));

                const found = MOCK_ADMINS.find(
                    (a) => a.email === email && a.password === password
                );

                if (found) {
                    const { password: _pw, ...userData } = found;
                    void _pw; // intentionally unused — password not stored in state
                    set({ user: userData, isLoggedIn: true });
                    return { success: true };
                }
                return { success: false, error: 'Email atau password salah.' };
            },

            logout: () => set({ user: null, isLoggedIn: false }),

            updateProfile: (data) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...data } : null,
                })),
        }),
        {
            name: 'dosbing-admin-auth',
        }
    )
);
