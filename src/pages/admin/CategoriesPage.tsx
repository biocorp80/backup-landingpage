import { useState } from 'react';
import { Plus, PenLine, Trash2, X } from 'lucide-react';
import { categories as initialCategories, Category } from '../../data/categories';

const CategoriesPage = () => {
    const [items, setItems] = useState<Category[]>(initialCategories);
    const [modal, setModal] = useState<{ open: boolean; edit?: Category }>({ open: false });
    const [form, setForm] = useState({ name: '', slug: '', description: '', color: 'teal' });

    const colors = ['teal', 'blue', 'violet', 'cyan', 'orange'];

    const openNew = () => {
        setForm({ name: '', slug: '', description: '', color: 'teal' });
        setModal({ open: true });
    };

    const openEdit = (cat: Category) => {
        setForm({ name: cat.name, slug: cat.slug, description: cat.description, color: cat.color });
        setModal({ open: true, edit: cat });
    };

    const save = () => {
        if (!form.name) return;
        if (modal.edit) {
            setItems((prev) => prev.map((c) => c.id === modal.edit!.id ? { ...c, ...form } : c));
        } else {
            const newCat: Category = { id: `cat-${Date.now()}`, ...form };
            setItems((prev) => [...prev, newCat]);
        }
        setModal({ open: false });
    };

    const remove = (id: string) => {
        if (confirm('Hapus kategori ini?')) setItems((prev) => prev.filter((c) => c.id !== id));
    };

    const colorMap: Record<string, string> = {
        teal: 'bg-teal-500', blue: 'bg-blue-500', violet: 'bg-violet-500', cyan: 'bg-cyan-500', orange: 'bg-orange-500',
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black text-slate-900">Manajemen Kategori</h2>
                    <p className="text-sm text-slate-400">{items.length} kategori</p>
                </div>
                <button onClick={openNew} className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition">
                    <Plus size={16} /> Tambah Kategori
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((cat) => (
                    <div key={cat.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${colorMap[cat.color]}`} />
                                <h3 className="font-black text-slate-900">{cat.name}</h3>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => openEdit(cat)} className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition">
                                    <PenLine size={13} />
                                </button>
                                <button onClick={() => remove(cat.id)} className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition">
                                    <Trash2 size={13} />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 mb-2">/{cat.slug}</p>
                        <p className="text-sm text-slate-500">{cat.description}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modal.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="font-black text-slate-900">{modal.edit ? 'Edit Kategori' : 'Tambah Kategori'}</h3>
                            <button onClick={() => setModal({ open: false })} className="text-slate-400 hover:text-slate-900"><X size={18} /></button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Nama</label>
                                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-') })} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-400" placeholder="Nama kategori" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Slug</label>
                                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-400" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Deskripsi</label>
                                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-400 resize-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Warna</label>
                                <div className="flex gap-2">
                                    {colors.map((c) => (
                                        <button key={c} onClick={() => setForm({ ...form, color: c })} className={`w-8 h-8 rounded-full ${colorMap[c]} ${form.color === c ? 'ring-2 ring-offset-2 ring-slate-400' : ''} transition`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setModal({ open: false })} className="flex-1 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition">Batal</button>
                            <button onClick={save} className="flex-1 py-2.5 bg-teal-500 text-white rounded-xl text-sm font-bold hover:bg-teal-600 transition">Simpan</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoriesPage;
