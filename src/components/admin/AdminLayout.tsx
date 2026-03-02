import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, FileText, Tag, FolderOpen, Layout, User,
    LogOut, Menu, X, Wand2, ChevronRight, BarChart3, Image, ExternalLink
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const navItems = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/blog', label: 'Manajemen Blog', icon: FileText },
    { to: '/admin/categories', label: 'Kategori', icon: FolderOpen },
    { to: '/admin/tags', label: 'Tags', icon: Tag },
    { to: '/admin/landing-editor', label: 'Landing Page Editor', icon: Layout },
    { to: '/admin/media', label: 'Media Manager', icon: Image },
    { to: '/admin/analytics', label: 'Visitor Analytics', icon: BarChart3 },
    { to: '/admin/profile', label: 'Profil Admin', icon: User },
];

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const Sidebar = () => (
        <aside className="flex flex-col h-full bg-slate-900 text-white w-64 flex-shrink-0">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Wand2 size={16} className="text-white" />
                </div>
                <div>
                    <p className="font-black text-sm leading-none">Dosbing.ai</p>
                    <p className="text-white/40 text-[10px] font-medium">Admin Panel</p>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-grow p-4 space-y-1">
                {navItems.map(({ to, label, icon: Icon }) => {
                    const isActive = location.pathname === to || location.pathname.startsWith(to + '/');
                    return (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive
                                ? 'bg-teal-500/15 text-white shadow-sm'
                                : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                                }`}
                        >
                            <Icon size={17} className={isActive ? 'text-teal-400' : ''} />
                            <span>{label}</span>
                            {isActive && <ChevronRight size={14} className="ml-auto text-teal-400" />}
                        </Link>
                    );
                })}
            </nav>

            {/* User & Logout */}
            <div className="p-4 border-t border-white/10">
                <Link to="/admin/profile" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-xs font-black">
                        {user?.avatar ?? 'A'}
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-bold text-white truncate">{user?.name ?? 'Admin'}</p>
                        <p className="text-[10px] text-white/40 truncate">{user?.email}</p>
                    </div>
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-400 hover:bg-red-500/10 text-sm font-bold transition"
                >
                    <LogOut size={15} /> Keluar
                </button>
            </div>
        </aside>
    );

    return (
        <div className="flex h-screen bg-slate-100 overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div className="flex">
                        <Sidebar />
                    </div>
                    <div className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} />
                </div>
            )}

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden text-slate-500 hover:text-slate-900 transition"
                        >
                            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                        <h1 className="text-lg font-black text-slate-900">
                            {navItems.find((n) => location.pathname.startsWith(n.to))?.label ?? 'Dashboard'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all"
                        >
                            <ExternalLink size={13} /> Lihat Live Site
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
