import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Rss } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';
import { categories } from '../../data/categories';

const categoryColorMap: Record<string, string> = {
    teal: 'bg-teal-100 text-teal-700',
    blue: 'bg-blue-100 text-blue-700',
    violet: 'bg-violet-100 text-violet-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    orange: 'bg-orange-100 text-orange-700',
};

const LatestBlogSection = () => {
    const latestPosts = blogPosts
        .filter((p) => p.status === 'published')
        .slice(0, 3);

    return (
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-bold mb-4">
                        <Rss size={14} /> Blog Dosbing.ai
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Artikel <span className="text-teal-600">Terbaru</span> Kami
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Tips, panduan, dan insight tentang riset akademik — ditulis untuk membantumu menyelesaikan skripsi dengan lebih percaya diri.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {latestPosts.map((post) => {
                        const category = categories.find((c) => c.id === post.categoryId);
                        const colorClass = categoryColorMap[category?.color ?? 'blue'];
                        return (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    {category && (
                                        <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${colorClass}`}>
                                            {category.name}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-black text-lg text-slate-900 mb-2 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-[8px] font-black">
                                                {post.author.avatar}
                                            </div>
                                            <span>{post.author.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={10} />
                                            <span>{post.readingTime} mnt</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-teal-500 text-teal-600 font-black rounded-2xl hover:bg-teal-500 hover:text-white transition-all shadow-sm hover:shadow-lg"
                    >
                        Lihat Semua Artikel <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogSection;
