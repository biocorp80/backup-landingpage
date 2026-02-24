import { Link } from 'react-router-dom';
import { FileText, FolderOpen, Tag, Eye, PenLine, TrendingUp, Users, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';
import { categories } from '../../data/categories';
import { tags } from '../../data/tags';

const DashboardPage = () => {
    const published = blogPosts.filter((p) => p.status === 'published').length;
    const drafts = blogPosts.filter((p) => p.status === 'draft').length;

    const stats = [
        { label: 'Total Artikel', value: blogPosts.length, icon: FileText, color: 'bg-blue-500', link: '/admin/blog' },
        { label: 'Published', value: published, icon: Eye, color: 'bg-teal-500', link: '/admin/blog' },
        { label: 'Draft', value: drafts, icon: PenLine, color: 'bg-amber-500', link: '/admin/blog' },
        { label: 'Kategori', value: categories.length, icon: FolderOpen, color: 'bg-violet-500', link: '/admin/categories' },
        { label: 'Tags', value: tags.length, icon: Tag, color: 'bg-cyan-500', link: '/admin/tags' },
    ];

    const recentPosts = blogPosts.slice(0, 5);

    return (
        <div className="space-y-8">
            {/* Welcome */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl font-black mb-1">Selamat Datang, Admin! 👋</h2>
                <p className="text-white/70 text-sm">Kelola konten Dosbing.ai dari dashboard ini.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {stats.map((s) => (
                    <Link
                        key={s.label}
                        to={s.link}
                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                            <s.icon size={18} />
                        </div>
                        <p className="text-2xl font-black text-slate-900">{s.value}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{s.label}</p>
                    </Link>
                ))}
            </div>

            {/* Quick Actions + Recent Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Aksi Cepat</p>
                    <div className="space-y-3">
                        <Link
                            to="/admin/blog/new"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-50 text-teal-700 font-bold text-sm hover:bg-teal-100 transition"
                        >
                            <PenLine size={16} /> Tulis Artikel Baru
                        </Link>
                        <Link
                            to="/admin/categories"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm hover:bg-blue-100 transition"
                        >
                            <FolderOpen size={16} /> Kelola Kategori
                        </Link>
                        <Link
                            to="/admin/landing-editor"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-50 text-violet-700 font-bold text-sm hover:bg-violet-100 transition"
                        >
                            <TrendingUp size={16} /> Edit Landing Page
                        </Link>
                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-100 transition"
                        >
                            <Eye size={16} /> Lihat Live Site
                        </a>
                    </div>
                </div>

                {/* Recent Posts */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Artikel Terbaru</p>
                        <Link to="/admin/blog" className="text-teal-600 text-xs font-bold hover:underline">Lihat Semua</Link>
                    </div>
                    <div className="space-y-3">
                        {recentPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/admin/blog/edit/${post.id}`}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition group"
                            >
                                <img
                                    src={post.coverImage}
                                    alt=""
                                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                                />
                                <div className="flex-grow min-w-0">
                                    <p className="text-sm font-bold text-slate-900 truncate group-hover:text-teal-600 transition">
                                        {post.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium mt-0.5">
                                        <Clock size={10} />
                                        <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        <span className={`px-2 py-0.5 rounded-full font-bold ${post.status === 'published' ? 'bg-teal-50 text-teal-600' : 'bg-amber-50 text-amber-600'}`}>
                                            {post.status === 'published' ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Site Metrics Mock */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Ringkasan Metrik</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Pengunjung Hari Ini', value: '1,247', icon: Users, color: 'text-blue-500' },
                        { label: 'Total Views Bulan Ini', value: '32,891', icon: Eye, color: 'text-teal-500' },
                        { label: 'Rata-rata Waktu Baca', value: '4.2 mnt', icon: Clock, color: 'text-violet-500' },
                        { label: 'Konversi CTA', value: '12.4%', icon: TrendingUp, color: 'text-orange-500' },
                    ].map((m) => (
                        <div key={m.label} className="text-center p-4 rounded-xl bg-slate-50">
                            <m.icon className={`mx-auto mb-2 ${m.color}`} size={20} />
                            <p className="text-xl font-black text-slate-900">{m.value}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{m.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
