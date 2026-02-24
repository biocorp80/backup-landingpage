import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, Wand2, ArrowRight, BookOpen, Loader2 } from 'lucide-react';
import { useBlogStore } from '../store/blogStore';
import ShareButtons from '../components/blog/ShareButtons';
import ArticleCard from '../components/blog/ArticleCard';

const categoryColorMap: Record<string, string> = {
    teal: 'bg-teal-100 text-teal-700',
    blue: 'bg-blue-100 text-blue-700',
    violet: 'bg-violet-100 text-violet-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    orange: 'bg-orange-100 text-orange-700',
};

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { posts: blogPosts, categories, tags, loading } = useBlogStore();

    const post = blogPosts.find((p) => p.slug === slug && p.status === 'published');

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
                <Loader2 size={48} className="text-teal-600 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Memuat Artikel...</p>
            </div>
        );
    }

    if (!post) return <Navigate to="/blog" replace />;

    const category = categories.find((c) => c.id === post.categoryId);
    const postTags = tags.filter((t) => post.tagIds.includes(t.id));
    const colorClass = categoryColorMap[category?.color ?? 'blue'];

    const relatedPosts = blogPosts
        .filter((p) => p.id !== post.id && p.status === 'published' && p.categoryId === post.categoryId)
        .slice(0, 3);

    return (
        <>
            <title>{post.metaTitle ?? post.title}</title>
            <meta name="description" content={post.metaDescription ?? post.excerpt} />

            <div className="min-h-screen bg-white">
                {/* Hero Header */}
                <div className="relative bg-slate-900 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={post.coverImage} alt="" className="w-full h-full object-cover opacity-15 scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900" />
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 pt-28 pb-14">
                        {/* Back + Category */}
                        <div className="flex items-center gap-3 mb-8">
                            <Link to="/blog" className="inline-flex items-center gap-1.5 text-white/50 text-xs font-bold hover:text-white transition">
                                <ArrowLeft size={14} /> Blog
                            </Link>
                            {category && (
                                <>
                                    <span className="text-white/20">/</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${colorClass}`}>
                                        {category.name}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-white leading-[1.15] mb-6 tracking-tight">
                            {post.title}
                        </h1>

                        {/* Meta Row */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-xs font-black ring-2 ring-white/10">
                                    {post.author.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-none">{post.author.name}</p>
                                    <p className="text-white/40 text-[11px]">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/40 text-xs font-medium ml-auto">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={12} />
                                    <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} />
                                    <span>{post.readingTime} menit baca</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    {/* Excerpt */}
                    <div className="py-10 border-b border-slate-100">
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Article Body */}
                    <article className="py-10">
                        <div
                            className="prose prose-lg prose-slate max-w-none
                                prose-headings:font-black prose-headings:text-slate-900
                                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-5
                                prose-ul:space-y-2 prose-li:text-slate-600
                                prose-strong:text-slate-800 prose-strong:font-bold
                                prose-em:text-teal-700 prose-em:font-medium prose-em:not-italic
                                prose-a:text-teal-600 prose-a:font-bold hover:prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50/50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl
                                prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Tags */}
                    {postTags.length > 0 && (
                        <div className="pb-8 border-b border-slate-100">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-300 mr-1">Tags</span>
                                {postTags.map((tag) => (
                                    <Link
                                        key={tag.id}
                                        to={`/blog?tag=${tag.slug}`}
                                        className="px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 text-xs font-bold hover:bg-teal-50 hover:text-teal-600 transition border border-slate-100"
                                    >
                                        {tag.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Share + Author */}
                    <div className="py-8 space-y-8">
                        <ShareButtons title={post.title} />

                        {/* Author Card */}
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-lg font-black flex-shrink-0 shadow-lg shadow-blue-500/20">
                                {post.author.avatar}
                            </div>
                            <div>
                                <p className="font-black text-slate-900 text-base">{post.author.name}</p>
                                <p className="text-[11px] text-teal-600 font-bold mb-2">{post.author.role}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">Tim Dosbing.ai berkomitmen menghadirkan konten akademik berkualitas untuk membantu mahasiswa Indonesia menyelesaikan skripsi dengan lebih mudah dan percaya diri.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Banner */}
                    <div className="my-6 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-white">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Wand2 size={18} />
                                <span className="text-xs font-black uppercase tracking-widest text-white/60">Generator Judul</span>
                            </div>
                            <h3 className="font-black text-xl mb-1">Buntu Ide Judul Skripsi?</h3>
                            <p className="text-white/70 text-sm">Dapatkan 3 opsi judul yang sudah tervalidasi akademik — dalam 15 menit.</p>
                        </div>
                        <a
                            href="https://lynk.id/dosbing.ai/nvynv9jqqjmj"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-shrink-0 px-6 py-3.5 bg-white text-teal-600 font-black text-sm rounded-xl hover:bg-teal-50 transition shadow-lg whitespace-nowrap"
                        >
                            Coba Sekarang 🚀
                        </a>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="bg-slate-50 mt-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-1">
                                        <BookOpen size={12} className="inline mr-1" />
                                        Baca Selanjutnya
                                    </p>
                                    <h2 className="text-2xl font-black text-slate-900">Artikel Terkait</h2>
                                </div>
                                <Link to="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-teal-600 text-sm font-bold hover:underline">
                                    Lihat Semua <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((p) => (
                                    <ArticleCard key={p.id} post={p} featured />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogPostPage;
