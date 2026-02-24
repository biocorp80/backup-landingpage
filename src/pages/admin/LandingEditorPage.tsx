import { useState, useRef } from 'react';
import { Save, Loader2, RotateCcw, ExternalLink, Plus, Trash2, GripVertical, Upload } from 'lucide-react';
import { useSiteContentStore } from '../../store/siteContentStore';
import { useMediaStore } from '../../store/mediaStore';

type Tab = 'announcement' | 'hero' | 'header' | 'features' | 'contact' | 'seo';

const LandingEditorPage = () => {
    const { content, updateContent, resetContent } = useSiteContentStore();
    const { addItem } = useMediaStore();
    const [tab, setTab] = useState<Tab>('announcement');
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const heroFileRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleSave = async () => {
        setSaving(true);
        await new Promise((r) => setTimeout(r, 600));
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const tabs: { key: Tab; label: string; icon: string }[] = [
        { key: 'announcement', label: 'Running Text', icon: '📢' },
        { key: 'hero', label: 'Hero Section', icon: '🚀' },
        { key: 'header', label: 'Header / Nav', icon: '🧭' },
        { key: 'features', label: 'Fitur', icon: '✨' },
        { key: 'contact', label: 'Kontak', icon: '📞' },
        { key: 'seo', label: 'SEO', icon: '🔍' },
    ];

    const colorOptions: ('teal' | 'blue' | 'violet' | 'orange')[] = ['teal', 'blue', 'violet', 'orange'];
    const colorName: Record<string, string> = { teal: 'Teal', blue: 'Blue', violet: 'Violet', orange: 'Orange' };
    const colorBg: Record<string, string> = { teal: 'bg-teal-500', blue: 'bg-blue-500', violet: 'bg-violet-500', orange: 'bg-orange-500' };

    // Helper: input class
    const inputCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition';
    const labelCls = 'block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5';

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-black text-slate-900">Landing Page Editor</h2>
                    <p className="text-sm text-slate-400">Kustomisasi seluruh konten halaman utama</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-slate-500 font-bold hover:text-teal-600 transition">
                        <ExternalLink size={13} /> Preview
                    </a>
                    <button onClick={() => { if (confirm('Reset semua ke default?')) resetContent(); }} className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition">
                        <RotateCcw size={14} /> Reset
                    </button>
                    <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition disabled:opacity-50">
                        {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                        {saving ? 'Saving...' : saved ? '✓ Tersimpan' : 'Simpan'}
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        onClick={() => setTab(t.key)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition ${tab === t.key ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                            }`}
                    >
                        {t.icon} {t.label}
                    </button>
                ))}
            </div>

            {/* ========== RUNNING TEXT ========== */}
            {tab === 'announcement' && (
                <div className="space-y-5">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">📢 Announcement Bar / Running Text</p>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <span className="text-xs font-bold text-slate-500">{content.announcement.enabled ? 'Aktif' : 'Nonaktif'}</span>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={content.announcement.enabled}
                                        onChange={(e) => updateContent({ announcement: { ...content.announcement, enabled: e.target.checked } })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-10 h-5 bg-slate-200 peer-checked:bg-teal-500 rounded-full transition" />
                                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition" />
                                </div>
                            </label>
                        </div>

                        <div className="space-y-4">
                            {content.announcement.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <GripVertical size={16} className="text-slate-300 mt-3 flex-shrink-0" />
                                    <div className="flex-grow space-y-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                value={item.emoji}
                                                onChange={(e) => {
                                                    const items = [...content.announcement.items];
                                                    items[i] = { ...items[i], emoji: e.target.value };
                                                    updateContent({ announcement: { ...content.announcement, items } });
                                                }}
                                                className="w-12 px-2 py-2 rounded-lg border border-slate-200 text-center text-lg focus:outline-none focus:border-teal-400"
                                                placeholder="🔥"
                                            />
                                            <input
                                                value={item.text}
                                                onChange={(e) => {
                                                    const items = [...content.announcement.items];
                                                    items[i] = { ...items[i], text: e.target.value };
                                                    updateContent({ announcement: { ...content.announcement, items } });
                                                }}
                                                className={`${inputCls} flex-grow`}
                                                placeholder="Teks running text..."
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-slate-400">Warna:</span>
                                            {colorOptions.map((c) => (
                                                <button
                                                    key={c}
                                                    onClick={() => {
                                                        const items = [...content.announcement.items];
                                                        items[i] = { ...items[i], color: c };
                                                        updateContent({ announcement: { ...content.announcement, items } });
                                                    }}
                                                    className={`w-6 h-6 rounded-full ${colorBg[c]} ${item.color === c ? 'ring-2 ring-offset-1 ring-slate-400' : ''} transition`}
                                                    title={colorName[c]}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const items = content.announcement.items.filter((_, idx) => idx !== i);
                                            updateContent({ announcement: { ...content.announcement, items } });
                                        }}
                                        className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition flex-shrink-0 mt-2"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={() => {
                                    updateContent({
                                        announcement: {
                                            ...content.announcement,
                                            items: [...content.announcement.items, { text: '', emoji: '✨', color: 'teal' }],
                                        },
                                    });
                                }}
                                className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-400 hover:border-teal-400 hover:text-teal-600 transition w-full justify-center"
                            >
                                <Plus size={14} /> Tambah Running Text
                            </button>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">👁️ Preview</p>
                        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 rounded-xl p-3 overflow-hidden">
                            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
                                {content.announcement.items.map((item, i) => (
                                    <span key={i} className="text-[11px] font-bold uppercase tracking-widest text-white">
                                        <span className={`text-${item.color}-400`}>{item.emoji} </span>
                                        {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== HERO SECTION ========== */}
            {tab === 'hero' && (
                <div className="space-y-5">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🚀 Hero Content</p>
                        <div>
                            <label className={labelCls}>Headline Utama</label>
                            <input value={content.hero.headline} onChange={(e) => updateContent({ hero: { ...content.hero, headline: e.target.value } })} className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Subheadline</label>
                            <textarea value={content.hero.subheadline} onChange={(e) => updateContent({ hero: { ...content.hero, subheadline: e.target.value } })} rows={3} className={`${inputCls} resize-none`} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>CTA Text</label>
                                <input value={content.hero.ctaText} onChange={(e) => updateContent({ hero: { ...content.hero, ctaText: e.target.value } })} className={inputCls} />
                            </div>
                            <div>
                                <label className={labelCls}>CTA Link</label>
                                <input value={content.hero.ctaLink} onChange={(e) => updateContent({ hero: { ...content.hero, ctaLink: e.target.value } })} className={inputCls} />
                            </div>
                        </div>
                    </div>

                    {/* Typing Words */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-3">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">⌨️ Typing Animation Words</p>
                        <p className="text-xs text-slate-400">Kata-kata yang bergantian muncul di hero section</p>
                        <div className="flex flex-wrap gap-2">
                            {content.hero.typingWords.map((word, i) => (
                                <div key={i} className="flex items-center gap-1 bg-slate-50 rounded-lg border border-slate-200 px-3 py-2">
                                    <input
                                        value={word}
                                        onChange={(e) => {
                                            const words = [...content.hero.typingWords];
                                            words[i] = e.target.value;
                                            updateContent({ hero: { ...content.hero, typingWords: words } });
                                        }}
                                        className="bg-transparent text-sm font-medium focus:outline-none w-32"
                                    />
                                    <button
                                        onClick={() => {
                                            const words = content.hero.typingWords.filter((_, idx) => idx !== i);
                                            updateContent({ hero: { ...content.hero, typingWords: words } });
                                        }}
                                        className="text-slate-300 hover:text-red-500 transition"
                                    >
                                        <Trash2 size={12} />
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={() => updateContent({ hero: { ...content.hero, typingWords: [...content.hero.typingWords, 'Kata Baru'] } })}
                                className="px-3 py-2 border-2 border-dashed border-slate-200 rounded-lg text-xs font-bold text-slate-400 hover:border-teal-400 transition"
                            >
                                + Tambah
                            </button>
                        </div>
                    </div>

                    {/* Hero Images */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🖼️ Hero Images (Carousel)</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {content.hero.images.map((img, i) => (
                                <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                                    {img.src ? (
                                        <img src={img.src} alt={img.alt} className="w-full h-32 object-cover" />
                                    ) : (
                                        <div className="w-full h-32 bg-slate-50 flex items-center justify-center text-slate-300 text-3xl">🖼️</div>
                                    )}
                                    <div className="p-3 space-y-2">
                                        <input
                                            value={img.src}
                                            onChange={(e) => {
                                                const images = [...content.hero.images];
                                                images[i] = { ...images[i], src: e.target.value };
                                                updateContent({ hero: { ...content.hero, images } });
                                            }}
                                            placeholder="URL gambar..."
                                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-teal-400"
                                        />
                                        <div className="flex gap-2">
                                            <input
                                                ref={(el) => { heroFileRefs.current[i] = el; }}
                                                type="file"
                                                accept="image/jpeg,image/png,image/webp,image/gif"
                                                className="hidden"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (!file) return;
                                                    const item = await addItem(file);
                                                    if (item) {
                                                        const images = [...content.hero.images];
                                                        images[i] = { ...images[i], src: item.dataUrl };
                                                        updateContent({ hero: { ...content.hero, images } });
                                                    }
                                                }}
                                            />
                                            <button
                                                onClick={() => heroFileRefs.current[i]?.click()}
                                                className="flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-lg text-[10px] font-bold hover:bg-teal-100 transition flex-grow justify-center"
                                            >
                                                <Upload size={11} /> Upload Foto
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const images = content.hero.images.filter((_, idx) => idx !== i);
                                                    updateContent({ hero: { ...content.hero, images } });
                                                }}
                                                className="px-3 py-1.5 bg-red-50 text-red-500 rounded-lg text-[10px] font-bold hover:bg-red-100 transition"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                        <input
                                            value={img.alt}
                                            onChange={(e) => {
                                                const images = [...content.hero.images];
                                                images[i] = { ...images[i], alt: e.target.value };
                                                updateContent({ hero: { ...content.hero, images } });
                                            }}
                                            placeholder="Alt text..."
                                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-teal-400"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => updateContent({ hero: { ...content.hero, images: [...content.hero.images, { src: '', alt: '' }] } })}
                            className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-400 hover:border-teal-400 hover:text-teal-600 transition w-full justify-center"
                        >
                            <Plus size={14} /> Tambah Gambar
                        </button>
                    </div>
                </div>
            )}

            {/* ========== HEADER / NAV ========== */}
            {tab === 'header' && (
                <div className="space-y-5">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🧭 Logo & Branding</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Logo Text</label>
                                <input value={content.header.logoText} onChange={(e) => updateContent({ header: { ...content.header, logoText: e.target.value } })} className={inputCls} />
                            </div>
                            <div>
                                <label className={labelCls}>Accent Text</label>
                                <input value={content.header.logoAccent} onChange={(e) => updateContent({ header: { ...content.header, logoAccent: e.target.value } })} className={inputCls} />
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-[10px] text-slate-400 mb-1">Preview:</p>
                            <p className="font-black text-2xl">
                                <span className="text-blue-600">{content.header.logoText}</span>
                                <span className="text-teal-600">{content.header.logoAccent}</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🔗 Navigation Links</p>
                        {content.header.navLinks.map((link, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                <input value={link.label} onChange={(e) => {
                                    const navLinks = [...content.header.navLinks];
                                    navLinks[i] = { ...navLinks[i], label: e.target.value };
                                    updateContent({ header: { ...content.header, navLinks } });
                                }} placeholder="Label" className="w-28 px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold focus:outline-none focus:border-teal-400" />
                                <input value={link.to} onChange={(e) => {
                                    const navLinks = [...content.header.navLinks];
                                    navLinks[i] = { ...navLinks[i], to: e.target.value };
                                    updateContent({ header: { ...content.header, navLinks } });
                                }} placeholder="/path atau #anchor" className="flex-grow px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-teal-400" />
                                <label className="flex items-center gap-1 text-[10px] font-bold text-slate-400 whitespace-nowrap cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={link.isScrollLink}
                                        onChange={(e) => {
                                            const navLinks = [...content.header.navLinks];
                                            navLinks[i] = { ...navLinks[i], isScrollLink: e.target.checked };
                                            updateContent({ header: { ...content.header, navLinks } });
                                        }}
                                        className="w-3.5 h-3.5 rounded accent-teal-500"
                                    />
                                    Scroll
                                </label>
                                <button onClick={() => {
                                    const navLinks = content.header.navLinks.filter((_, idx) => idx !== i);
                                    updateContent({ header: { ...content.header, navLinks } });
                                }} className="text-slate-300 hover:text-red-500 transition">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => updateContent({ header: { ...content.header, navLinks: [...content.header.navLinks, { label: 'New', to: '/', isScrollLink: false }] } })}
                            className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-400 hover:border-teal-400 transition w-full justify-center"
                        >
                            <Plus size={14} /> Tambah Link
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🎯 CTA Button</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Button Text</label>
                                <input value={content.header.ctaText} onChange={(e) => updateContent({ header: { ...content.header, ctaText: e.target.value } })} className={inputCls} />
                            </div>
                            <div>
                                <label className={labelCls}>Button Link</label>
                                <input value={content.header.ctaLink} onChange={(e) => updateContent({ header: { ...content.header, ctaLink: e.target.value } })} className={inputCls} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== FEATURES ========== */}
            {tab === 'features' && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">✨ Fitur & Keunggulan</p>
                    {content.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                            <input
                                value={feat.emoji}
                                onChange={(e) => {
                                    const features = [...content.features];
                                    features[i] = { ...features[i], emoji: e.target.value };
                                    updateContent({ features });
                                }}
                                className="w-12 px-2 py-2 rounded-lg border border-slate-200 text-center text-lg focus:outline-none focus:border-teal-400"
                            />
                            <div className="flex-grow space-y-2">
                                <input value={feat.title} onChange={(e) => {
                                    const features = [...content.features];
                                    features[i] = { ...features[i], title: e.target.value };
                                    updateContent({ features });
                                }} placeholder="Judul fitur" className={`${inputCls} !text-sm !font-bold`} />
                                <input value={feat.description} onChange={(e) => {
                                    const features = [...content.features];
                                    features[i] = { ...features[i], description: e.target.value };
                                    updateContent({ features });
                                }} placeholder="Deskripsi singkat" className={inputCls} />
                            </div>
                            <button onClick={() => {
                                const features = content.features.filter((_, idx) => idx !== i);
                                updateContent({ features });
                            }} className="text-slate-300 hover:text-red-500 transition mt-3">
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => updateContent({ features: [...content.features, { title: '', description: '', emoji: '✨' }] })}
                        className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-400 hover:border-teal-400 transition w-full justify-center"
                    >
                        <Plus size={14} /> Tambah Fitur
                    </button>
                </div>
            )}

            {/* ========== CONTACT ========== */}
            {tab === 'contact' && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">📞 Informasi Kontak</p>
                    <div>
                        <label className={labelCls}>Nomor WhatsApp</label>
                        <input value={content.contact.whatsappNumber} onChange={(e) => updateContent({ contact: { ...content.contact, whatsappNumber: e.target.value } })} className={inputCls} placeholder="6281234567890" />
                    </div>
                    <div>
                        <label className={labelCls}>Email</label>
                        <input value={content.contact.email} onChange={(e) => updateContent({ contact: { ...content.contact, email: e.target.value } })} className={inputCls} placeholder="info@dosbing.ai" />
                    </div>
                    <div>
                        <label className={labelCls}>Alamat</label>
                        <textarea value={content.contact.address} onChange={(e) => updateContent({ contact: { ...content.contact, address: e.target.value } })} rows={2} className={`${inputCls} resize-none`} />
                    </div>
                </div>
            )}

            {/* ========== SEO ========== */}
            {tab === 'seo' && (
                <div className="space-y-5">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">🔍 SEO Global Settings</p>
                        <div>
                            <label className={labelCls}>Site Title (60-70 karakter)</label>
                            <input value={content.seo.siteTitle} maxLength={70} onChange={(e) => updateContent({ seo: { ...content.seo, siteTitle: e.target.value } })} className={inputCls} />
                            <p className="text-[10px] text-slate-400 mt-1">{content.seo.siteTitle.length}/70 karakter</p>
                        </div>
                        <div>
                            <label className={labelCls}>Meta Description (150-160 karakter)</label>
                            <textarea value={content.seo.siteDescription} maxLength={170} onChange={(e) => updateContent({ seo: { ...content.seo, siteDescription: e.target.value } })} rows={3} className={`${inputCls} resize-none`} />
                            <p className="text-[10px] text-slate-400 mt-1">{content.seo.siteDescription.length}/170 karakter</p>
                        </div>
                        <div>
                            <label className={labelCls}>Keywords (pisahkan dengan koma)</label>
                            <input value={content.seo.keywords} onChange={(e) => updateContent({ seo: { ...content.seo, keywords: e.target.value } })} className={inputCls} placeholder="skripsi, AI, mahasiswa..." />
                        </div>
                        <div>
                            <label className={labelCls}>OG Image URL</label>
                            <input value={content.seo.ogImage} onChange={(e) => updateContent({ seo: { ...content.seo, ogImage: e.target.value } })} className={inputCls} placeholder="https://dosbing.ai/og-image.png" />
                            {content.seo.ogImage && (
                                <img src={content.seo.ogImage} alt="OG Preview" className="mt-2 w-full max-w-sm h-32 object-cover rounded-lg border border-slate-100" />
                            )}
                        </div>
                        <div>
                            <label className={labelCls}>Robots Directive</label>
                            <select value={content.seo.robots} onChange={(e) => updateContent({ seo: { ...content.seo, robots: e.target.value } })} className={`${inputCls} bg-white`}>
                                <option value="index, follow">index, follow (Diindeks penuh)</option>
                                <option value="noindex, follow">noindex, follow (Tidak diindeks)</option>
                                <option value="index, nofollow">index, nofollow (Diindeks tapi link tidak diikuti)</option>
                                <option value="noindex, nofollow">noindex, nofollow (Tidak diindeks sama sekali)</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">📊 Analytics & Tracking</p>
                        <div>
                            <label className={labelCls}>Google Analytics ID</label>
                            <input value={content.seo.googleAnalyticsId} onChange={(e) => updateContent({ seo: { ...content.seo, googleAnalyticsId: e.target.value } })} className={inputCls} placeholder="G-XXXXXXXXXX" />
                        </div>
                    </div>

                    {/* Google Search Preview */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">👁️ Google Search Preview</p>
                        <div className="p-4 bg-white rounded-xl border border-slate-200 max-w-lg">
                            <p className="text-xs text-green-700 font-medium mb-1">dosbing.ai</p>
                            <p className="text-lg text-blue-700 font-medium mb-1 leading-tight hover:underline cursor-pointer">{content.seo.siteTitle || 'Site Title'}</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{content.seo.siteDescription || 'Meta description...'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingEditorPage;
