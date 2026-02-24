import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Rss, ChevronLeft, ChevronRight, ArrowRight, Clock, Loader2 } from 'lucide-react';
import { useBlogStore } from '../store/blogStore';

const POSTS_PER_PAGE = 6;

const categoryColorMap: Record<string, string> = {
    teal: 'bg-teal-100 text-teal-700',
    blue: 'bg-blue-100 text-blue-700',
    violet: 'bg-violet-100 text-violet-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    orange: 'bg-orange-100 text-orange-700',
};

const BlogIndexPage = () => {
    const { posts: blogPosts, categories, loading } = useBlogStore();
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const publishedPosts = useMemo(
        () => blogPosts.filter((p) => p.status === 'published'),
        [blogPosts]
    );

    const filtered = useMemo(() => {
        return publishedPosts.filter((post) => {
            const matchesSearch =
                !search ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(search.toLowerCase());
            const matchesCat = !activeCategory || post.categoryId === activeCategory;
            return matchesSearch && matchesCat;
        });
    }, [publishedPosts, search, activeCategory]);

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
    const featuredPost = page === 1 && !search && !activeCategory ? publishedPosts[0] : null;

    const handleFilter = (catId: string | null) => {
        setActiveCategory(catId);
        setPage(1);
    };

    return (
        <>
            {/* Meta */}
            <title>Blog | Tips Skripsi & Panduan Akademik — Dosbing.ai</title>

            <div className="min-h-screen bg-white">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 pt-28 pb-14 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
                    <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold mb-6">
                            <Rss size={14} /> Blog Dosbing.ai
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Tips & Panduan{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
                                Skripsi
                            </span>
                        </h1>
                        <p className="text-white/50 text-base max-w-xl mx-auto mb-8">
                            Artikel berkualitas tentang riset akademik, tips skripsi, dan kehidupan mahasiswa akhir.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                placeholder="Cari artikel..."
                                className="w-full pl-10 pr-10 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 backdrop-blur-sm focus:outline-none focus:border-teal-400/40 focus:bg-white/15 transition"
                            />
                            {search && (
                                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition">
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <button
                            onClick={() => handleFilter(null)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!activeCategory
                                ? 'bg-slate-900 text-white shadow-md'
                                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            Semua
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleFilter(cat.id === activeCategory ? null : cat.id)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === cat.id
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'bg-slate-50 text-slate-500 hover:bg-teal-50 hover:text-teal-600'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Featured Post */}
                    {featuredPost && (() => {
                        const cat = categories.find((c) => c.id === featuredPost.categoryId);
                        const clr = categoryColorMap[cat?.color ?? 'blue'];
                        return (
                            <div className="mb-12">
                                <Link to={`/blog/${featuredPost.slug}`} className="group block">
                                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-72 md:h-96">
                                        <img
                                            src={featuredPost.coverImage}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                            <div className="flex items-center gap-3 mb-3">
                                                {cat && (
                                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${clr}`}>
                                                        {cat.name}
                                                    </span>
                                                )}
                                                <span className="text-white/40 text-xs flex items-center gap-1">
                                                    <Clock size={10} /> {featuredPost.readingTime} menit baca
                                                </span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-snug max-w-2xl group-hover:text-teal-300 transition-colors">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-white/50 text-sm max-w-xl line-clamp-2 mb-4 hidden md:block">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-[9px] font-black">
                                                    {featuredPost.author.avatar}
                                                </div>
                                                <span className="text-white/60 text-xs font-medium">{featuredPost.author.name}</span>
                                                <span className="text-white/20 text-xs">·</span>
                                                <span className="text-white/40 text-xs">{new Date(featuredPost.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })()}

                    {/* Search Results info */}
                    {(search || activeCategory) && (
                        <p className="text-slate-400 text-sm mb-6 font-medium">
                            Menampilkan <strong className="text-slate-600">{filtered.length}</strong> artikel
                            {search && <> untuk "<strong className="text-slate-600">{search}</strong>"</>}
                            {activeCategory && <> dalam <strong className="text-slate-600">{categories.find(c => c.id === activeCategory)?.name}</strong></>}
                        </p>
                    )}

                    {/* Posts Grid */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <Loader2 size={40} className="text-teal-600 animate-spin" />
                            <p className="text-slate-500 font-medium">Memuat artikel...</p>
                        </div>
                    ) : paginated.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-5xl mb-4">📝</p>
                            <p className="text-slate-500 font-medium text-lg mb-2">Tidak ada artikel ditemukan.</p>
                            <button onClick={() => { setSearch(''); setActiveCategory(null); setPage(1); }} className="text-teal-600 font-bold text-sm hover:underline">
                                Reset pencarian
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                            {paginated.map((post) => {
                                const cat = categories.find((c) => c.id === post.categoryId);
                                const clr = categoryColorMap[cat?.color ?? 'blue'];
                                return (
                                    <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                                        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                            {/* Image */}
                                            <div className="relative h-44 overflow-hidden">
                                                <img
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                {cat && (
                                                    <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${clr}`}>
                                                        {cat.name}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex flex-col flex-grow">
                                                <h3 className="font-black text-base text-slate-900 mb-2 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-3 border-t border-slate-50">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-[8px] font-black">
                                                            {post.author.avatar}
                                                        </div>
                                                        <span>{post.author.name}</span>
                                                    </div>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={10} /> {post.readingTime} mnt
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mb-12">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setPage(n)}
                                    className={`w-9 h-9 rounded-lg font-bold text-xs transition ${n === page
                                        ? 'bg-teal-600 text-white shadow-md'
                                        : 'border border-slate-200 text-slate-500 hover:bg-slate-50'
                                        }`}
                                >
                                    {n}
                                </button>
                            ))}
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    )}

                    {/* CTA Banner */}
                    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-white mb-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-black mb-2">Mulai Skripsimu Hari Ini 🚀</h2>
                            <p className="text-white/70 text-sm max-w-lg">
                                Jangan biarkan ide judul terus terpendam. Coba Generator Judul Dosbing.ai — mulai dari Rp 20.000.
                            </p>
                        </div>
                        <Link
                            to="/#pricing"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-black text-sm rounded-xl hover:bg-teal-50 transition shadow-xl"
                        >
                            Lihat Produk <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogIndexPage;
