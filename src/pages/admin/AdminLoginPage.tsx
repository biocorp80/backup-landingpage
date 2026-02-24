import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Wand2, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login, isLoggedIn } = useAuthStore();
    const navigate = useNavigate();

    if (isLoggedIn) return <Navigate to="/admin/dashboard" replace />;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);
        if (result.success) {
            navigate('/admin/dashboard');
        } else {
            setError(result.error ?? 'Login gagal');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 px-4">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-2xl mb-4">
                        <Wand2 className="text-white" size={28} />
                    </div>
                    <h1 className="text-2xl font-black text-white">Admin Panel</h1>
                    <p className="text-white/40 text-sm font-medium mt-1">Masuk ke dashboard Dosbing.ai</p>
                </div>

                {/* Form Card */}
                <div className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-white/50 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@dosbing.ai"
                                required
                                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-teal-400/60 focus:bg-white/15 transition text-sm font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-white/50 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-teal-400/60 focus:bg-white/15 transition text-sm font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition"
                                >
                                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-400 text-sm font-bold bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-black rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                            {loading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}
                        </button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                        <p className="text-white/30 text-xs font-medium">
                            Demo: <span className="text-teal-400">admin@dosbing.ai</span> / <span className="text-teal-400">admin123</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
