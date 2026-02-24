import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Eye, PenLine, Trash2, Filter } from 'lucide-react';
import { blogPosts, BlogPost } from '../../data/blog-posts';
import { categories } from '../../data/categories';

const BlogManagePage = () => {
    const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const filtered = posts.filter((post) => {
        const matchSearch = !search || post.title.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === 'all' || post.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const toggleStatus = (id: string) => {
        setPosts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p
            )
        );
    };

    const deletePost = (id: string) => {
        if (confirm('Yakin ingin menghapus artikel ini?')) {
            setPosts((prev) => prev.filter((p) => p.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-black text-slate-900">Manajemen Artikel</h2>
                    <p className="text-sm text-slate-400">{posts.length} artikel total</p>
                </div>
                <Link
                    to="/admin/blog/new"
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition"
                >
                    <Plus size={16} /> Tulis Artikel Baru
                </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari judul artikel..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Filter size={14} className="text-slate-400" />
                    {['all', 'published', 'draft'].map((s) => (
                        <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={`px-3 py-2 rounded-lg text-xs font-bold transition ${statusFilter === s
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                        >
                            {s === 'all' ? 'Semua' : s === 'published' ? 'Published' : 'Draft'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                <th className="text-left px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-400">Artikel</th>
                                <th className="text-left px-4 py-4 text-xs font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Kategori</th>
                                <th className="text-left px-4 py-4 text-xs font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="text-left px-4 py-4 text-xs font-black uppercase tracking-widest text-slate-400 hidden lg:table-cell">Tanggal</th>
                                <th className="text-right px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-400">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((post) => {
                                const cat = categories.find((c) => c.id === post.categoryId);
                                return (
                                    <tr key={post.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={post.coverImage} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <p className="font-bold text-slate-900 truncate max-w-xs">{post.title}</p>
                                                    <p className="text-[10px] text-slate-400 mt-0.5">{post.readingTime} menit baca</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 hidden md:table-cell">
                                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                                                {cat?.name ?? '-'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={() => toggleStatus(post.id)}
                                                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition cursor-pointer ${post.status === 'published'
                                                        ? 'bg-teal-50 text-teal-600 hover:bg-teal-100'
                                                        : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                                                    }`}
                                            >
                                                {post.status}
                                            </button>
                                        </td>
                                        <td className="px-4 py-4 hidden lg:table-cell text-xs text-slate-400 font-medium">
                                            {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/blog/${post.slug}`}
                                                    target="_blank"
                                                    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition"
                                                    title="Preview"
                                                >
                                                    <Eye size={14} />
                                                </Link>
                                                <Link
                                                    to={`/admin/blog/edit/${post.id}`}
                                                    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
                                                    title="Edit"
                                                >
                                                    <PenLine size={14} />
                                                </Link>
                                                <button
                                                    onClick={() => deletePost(post.id)}
                                                    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
                                                    title="Hapus"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-16 text-center text-slate-400 font-medium">
                                        Tidak ada artikel ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogManagePage;
