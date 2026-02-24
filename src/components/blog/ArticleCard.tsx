import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { BlogPost } from '../../data/blog-posts';
import { categories } from '../../data/categories';

interface ArticleCardProps {
    post: BlogPost;
    featured?: boolean;
}

const categoryColorMap: Record<string, string> = {
    teal: 'bg-teal-100 text-teal-700',
    blue: 'bg-blue-100 text-blue-700',
    violet: 'bg-violet-100 text-violet-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    orange: 'bg-orange-100 text-orange-700',
};

const ArticleCard = ({ post, featured = false }: ArticleCardProps) => {
    const category = categories.find((c) => c.id === post.categoryId);
    const colorClass = categoryColorMap[category?.color ?? 'blue'];

    if (featured) {
        return (
            <Link to={`/blog/${post.slug}`} className="group block">
                <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        {category && (
                            <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${colorClass}`}>
                                {category.name}
                            </span>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-black text-xl text-slate-900 mb-3 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-[9px] font-black">
                                    {post.author.avatar}
                                </div>
                                <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={11} />
                                <span>{post.readingTime} menit baca</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link to={`/blog/${post.slug}`} className="group block">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 p-4 h-full">
                <div className="sm:w-32 sm:h-24 w-full h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow min-w-0">
                    {category && (
                        <span className={`self-start text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full mb-1 ${colorClass}`}>
                            {category.name}
                        </span>
                    )}
                    <h3 className="font-black text-sm text-slate-900 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium mt-1">
                        <Clock size={10} />
                        <span>{post.readingTime} menit</span>
                        <Tag size={10} />
                        <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
