import { useState } from 'react';
import { Plus, X, Trash2 } from 'lucide-react';
import { tags as initialTags, Tag } from '../../data/tags';

const TagsPage = () => {
    const [items, setItems] = useState<Tag[]>(initialTags);
    const [newTag, setNewTag] = useState('');

    const addTag = () => {
        if (!newTag.trim()) return;
        const slug = newTag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (items.some((t) => t.slug === slug)) return;
        setItems((prev) => [...prev, { id: `tag-${Date.now()}`, name: newTag.trim(), slug }]);
        setNewTag('');
    };

    const removeTag = (id: string) => {
        setItems((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-black text-slate-900">Manajemen Tags</h2>
                <p className="text-sm text-slate-400">{items.length} tags</p>
            </div>

            {/* Add Tag */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Tambah Tag Baru</p>
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTag()}
                        placeholder="Nama tag baru..."
                        className="flex-grow px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition"
                    />
                    <button
                        onClick={addTag}
                        disabled={!newTag.trim()}
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition disabled:opacity-50"
                    >
                        <Plus size={16} /> Tambah
                    </button>
                </div>
            </div>

            {/* Tags Grid */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Semua Tags</p>
                <div className="flex flex-wrap gap-3">
                    {items.map((tag) => (
                        <div
                            key={tag.id}
                            className="group flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition"
                        >
                            <span className="text-sm font-bold text-slate-700">#{tag.name}</span>
                            <span className="text-[10px] text-slate-400 font-medium">/{tag.slug}</span>
                            <button
                                onClick={() => removeTag(tag.id)}
                                className="ml-1 w-5 h-5 rounded-full bg-transparent group-hover:bg-red-100 flex items-center justify-center text-transparent group-hover:text-red-500 transition"
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <p className="text-slate-400 text-sm w-full text-center py-8">Belum ada tags. Tambahkan tag pertama di atas.</p>
                    )}
                </div>
            </div>

            {/* Bulk Actions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Aksi Massal</p>
                <button
                    onClick={() => { if (confirm('Hapus semua tags?')) setItems([]); }}
                    className="flex items-center gap-2 px-4 py-2.5 border border-red-200 rounded-xl text-red-500 text-sm font-bold hover:bg-red-50 transition"
                >
                    <Trash2 size={14} /> Hapus Semua Tags
                </button>
            </div>
        </div>
    );
};

export default TagsPage;
