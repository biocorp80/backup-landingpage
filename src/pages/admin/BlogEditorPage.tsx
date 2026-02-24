import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Eye, ImageIcon, Loader2 } from 'lucide-react';
import { useBlogStore } from '../../store/blogStore';

const BlogEditorPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { posts, categories, tags, addPost, updatePost } = useBlogStore();
    const isEdit = !!id;
    const existing = useMemo(() => posts.find((p) => p.id === id), [id, posts]);

    const [form, setForm] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        coverImage: '',
        categoryId: '',
        tagIds: [] as string[],
        status: 'draft' as 'draft' | 'published',
        metaTitle: '',
        metaDescription: '',
    });
    const [saving, setSaving] = useState(false);
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        if (categories.length > 0 && !form.categoryId && !existing) {
            setForm(prev => ({ ...prev, categoryId: categories[0].id }));
        }
    }, [categories, form.categoryId, existing]);

    useEffect(() => {
        if (existing) {
            setForm({
                title: existing.title,
                slug: existing.slug,
                excerpt: existing.excerpt,
                content: existing.content,
                coverImage: existing.coverImage,
                categoryId: existing.categoryId,
                tagIds: existing.tagIds,
                status: existing.status,
                metaTitle: existing.metaTitle ?? '',
                metaDescription: existing.metaDescription ?? '',
            });
        }
    }, [existing]);

    const generateSlug = (title: string) =>
        title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const handleChange = (field: string, value: string | string[]) => {
        setForm((prev) => {
            const next = { ...prev, [field]: value };
            if (field === 'title' && !isEdit) next.slug = generateSlug(value as string);
            return next;
        });
    };

    const toggleTag = (tagId: string) => {
        setForm((prev) => ({
            ...prev,
            tagIds: prev.tagIds.includes(tagId)
                ? prev.tagIds.filter((t) => t !== tagId)
                : [...prev.tagIds, tagId],
        }));
    };

    const handleSave = async () => {
        if (!form.title || !form.slug) return;
        setSaving(true);
        try {
            const postData = {
                title: form.title,
                slug: form.slug,
                excerpt: form.excerpt,
                content: form.content,
                coverImage: form.coverImage,
                categoryId: form.categoryId,
                tagIds: form.tagIds,
                author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
                status: form.status,
                publishedAt: new Date().toISOString(),
                metaTitle: form.metaTitle,
                metaDescription: form.metaDescription,
                readingTime: Math.max(1, Math.ceil(form.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200)),
            };

            if (isEdit && id) {
                await updatePost(id, postData);
            } else {
                await addPost(postData);
            }
            navigate('/admin/blog');
        } catch (err) {
            console.error('Save failed:', err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link to="/admin/blog" className="text-slate-400 hover:text-slate-900 transition">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-black text-slate-900">
                        {isEdit ? 'Edit Artikel' : 'Tulis Artikel Baru'}
                    </h2>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setPreview(!preview)}
                        className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition"
                    >
                        <Eye size={15} /> {preview ? 'Editor' : 'Preview'}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving || !form.title}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition disabled:opacity-50"
                    >
                        {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                        {saving ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </div>
            </div>

            {preview ? (
                /* Preview Mode */
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                    {form.coverImage && (
                        <img src={form.coverImage} alt="" className="w-full h-64 object-cover rounded-xl mb-6" />
                    )}
                    <h1 className="text-3xl font-black text-slate-900 mb-3">{form.title || 'Judul Artikel'}</h1>
                    <p className="text-slate-500 italic mb-6 border-l-4 border-teal-500 pl-4">{form.excerpt}</p>
                    <div
                        className="prose prose-slate max-w-none prose-headings:font-black prose-p:text-slate-600"
                        dangerouslySetInnerHTML={{ __html: form.content }}
                    />
                </div>
            ) : (
                /* Editor Mode */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Judul Artikel</label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    placeholder="Masukkan judul artikel yang menarik..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Slug URL</label>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <span className="flex-shrink-0">/blog/</span>
                                    <input
                                        type="text"
                                        value={form.slug}
                                        onChange={(e) => handleChange('slug', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition text-slate-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Excerpt / Ringkasan</label>
                                <textarea
                                    value={form.excerpt}
                                    onChange={(e) => handleChange('excerpt', e.target.value)}
                                    rows={3}
                                    placeholder="Ringkasan singkat untuk preview di blog index..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Konten Artikel (HTML)</label>
                                <textarea
                                    value={form.content}
                                    onChange={(e) => handleChange('content', e.target.value)}
                                    rows={16}
                                    placeholder="<h2>Sub Judul</h2><p>Paragraf pertama...</p>"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono focus:outline-none focus:border-teal-400 transition resize-y"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">Gunakan tag HTML: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;</p>
                            </div>
                        </div>

                        {/* SEO Section */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">🔍 SEO Settings</p>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Meta Title</label>
                                <input
                                    type="text"
                                    value={form.metaTitle}
                                    onChange={(e) => handleChange('metaTitle', e.target.value)}
                                    placeholder="Judul untuk Google (60 karakter)"
                                    maxLength={70}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">{form.metaTitle.length}/70 karakter</p>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Meta Description</label>
                                <textarea
                                    value={form.metaDescription}
                                    onChange={(e) => handleChange('metaDescription', e.target.value)}
                                    placeholder="Deskripsi untuk Google (160 karakter)"
                                    maxLength={170}
                                    rows={2}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition resize-none"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">{form.metaDescription.length}/170 karakter</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        {/* Status */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Status</p>
                            <div className="flex gap-2">
                                {(['draft', 'published'] as const).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleChange('status', s)}
                                        className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${form.status === s
                                            ? s === 'published'
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-amber-500 text-white'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                            }`}
                                    >
                                        {s === 'published' ? 'Published' : 'Draft'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cover Image */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Gambar Sampul</p>
                            {form.coverImage ? (
                                <div className="relative mb-3">
                                    <img src={form.coverImage} alt="" className="w-full h-32 object-cover rounded-xl" />
                                    <button
                                        onClick={() => handleChange('coverImage', '')}
                                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                                    >
                                        ×
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full h-32 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 mb-3">
                                    <ImageIcon size={32} />
                                </div>
                            )}
                            <input
                                type="url"
                                value={form.coverImage}
                                onChange={(e) => handleChange('coverImage', e.target.value)}
                                placeholder="URL gambar (https://...)"
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-teal-400 transition"
                            />
                        </div>

                        {/* Category */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Kategori</p>
                            <select
                                value={form.categoryId}
                                onChange={(e) => handleChange('categoryId', e.target.value)}
                                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition bg-white"
                            >
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tags */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Tags</p>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <button
                                        key={tag.id}
                                        onClick={() => toggleTag(tag.id)}
                                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition ${form.tagIds.includes(tag.id)
                                            ? 'bg-teal-500 text-white'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                            }`}
                                    >
                                        #{tag.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogEditorPage;
