import { useState, useRef } from 'react';
import { Upload, Trash2, Music, Image as ImageIcon, Play, Pause, Check, AlertCircle, FileAudio, FileImage, X } from 'lucide-react';
import { useMediaStore, MediaItem } from '../../store/mediaStore';

const MediaManagerPage = () => {
    const { items, activeMusic, addItem, removeItem, setActiveMusic } = useMediaStore();
    const [tab, setTab] = useState<'images' | 'audio'>('images');
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState('');
    const [previewAudio, setPreviewAudio] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const audioPreviewRef = useRef<HTMLAudioElement | null>(null);

    const images = items.filter((i) => i.type === 'image');
    const audios = items.filter((i) => i.type === 'audio');

    const handleUpload = async (files: FileList | null) => {
        if (!files) return;
        setError('');
        setUploading(true);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const isImage = file.type.startsWith('image/');
            const isAudio = file.type.startsWith('audio/');

            if (!isImage && !isAudio) {
                setError(`"${file.name}" — format tidak didukung. Gunakan JPG/PNG/WebP untuk foto atau MP3/WAV untuk musik.`);
                continue;
            }

            const maxSize = isAudio ? 8 * 1024 * 1024 : 5 * 1024 * 1024;
            if (file.size > maxSize) {
                setError(`"${file.name}" — file terlalu besar. Maks ${isAudio ? '8' : '5'}MB.`);
                continue;
            }

            const result = await addItem(file);
            if (!result) {
                setError(`Gagal upload "${file.name}".`);
            }
        }

        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        handleUpload(e.dataTransfer.files);
    };

    const handleDelete = (item: MediaItem) => {
        if (confirm(`Hapus "${item.name}"?`)) {
            removeItem(item.id);
            if (previewAudio === item.id) {
                audioPreviewRef.current?.pause();
                setPreviewAudio(null);
            }
        }
    };

    const toggleAudioPreview = (item: MediaItem) => {
        if (previewAudio === item.id) {
            audioPreviewRef.current?.pause();
            setPreviewAudio(null);
        } else {
            if (audioPreviewRef.current) audioPreviewRef.current.pause();
            audioPreviewRef.current = new Audio(item.dataUrl);
            audioPreviewRef.current.volume = 0.5;
            audioPreviewRef.current.play().catch(console.error);
            audioPreviewRef.current.onended = () => setPreviewAudio(null);
            setPreviewAudio(item.id);
        }
    };

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes}B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
    };

    const accept = tab === 'images' ? 'image/jpeg,image/png,image/webp,image/gif' : 'audio/mpeg,audio/wav,audio/ogg,audio/mp4';

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-black text-slate-900">Media Manager</h2>
                <p className="text-sm text-slate-400">Upload dan kelola foto & musik untuk website</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
                <button onClick={() => setTab('images')} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${tab === 'images' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                    <ImageIcon size={14} /> Foto ({images.length})
                </button>
                <button onClick={() => setTab('audio')} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${tab === 'audio' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                    <Music size={14} /> Musik ({audios.length})
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium">
                    <AlertCircle size={16} />
                    <span className="flex-grow">{error}</span>
                    <button onClick={() => setError('')} className="text-red-400 hover:text-red-600"><X size={14} /></button>
                </div>
            )}

            {/* Upload Zone */}
            <div
                className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${dragOver ? 'border-teal-400 bg-teal-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input ref={fileInputRef} type="file" accept={accept} multiple className="hidden" onChange={(e) => handleUpload(e.target.files)} />

                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${tab === 'images' ? 'bg-gradient-to-br from-blue-500 to-teal-500' : 'bg-gradient-to-br from-violet-500 to-purple-500'
                    } text-white`}>
                    {uploading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <Upload size={22} />
                    )}
                </div>

                <p className="text-sm font-bold text-slate-700 mb-1">
                    {uploading ? 'Uploading...' : dragOver ? 'Drop file di sini!' : `Klik atau drag & drop ${tab === 'images' ? 'foto' : 'file musik'}`}
                </p>
                <p className="text-xs text-slate-400">
                    {tab === 'images' ? 'JPG, PNG, WebP, GIF — maks 5MB per file' : 'MP3, WAV, OGG — maks 8MB per file'}
                </p>
            </div>

            {/* ========== IMAGES GRID ========== */}
            {tab === 'images' && (
                <div>
                    {images.length === 0 ? (
                        <div className="text-center py-16 text-slate-300">
                            <FileImage size={48} className="mx-auto mb-3" />
                            <p className="text-sm font-bold">Belum ada foto</p>
                            <p className="text-xs text-slate-400 mt-1">Upload foto untuk hero, blog cover, dll</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {images.map((img) => (
                                <div key={img.id} className="group relative bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition">
                                    <img src={img.dataUrl} alt={img.name} className="w-full h-36 object-cover" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigator.clipboard.writeText(img.dataUrl).then(() => alert('URL gambar disalin!'));
                                                }}
                                                className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white transition"
                                                title="Copy URL"
                                            >
                                                📋
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDelete(img); }}
                                                className="w-9 h-9 rounded-lg bg-red-500/90 flex items-center justify-center text-white hover:bg-red-600 transition"
                                                title="Hapus"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-3">
                                        <p className="text-xs font-bold text-slate-700 truncate">{img.name}</p>
                                        <p className="text-[10px] text-slate-400">{formatSize(img.size)} • {new Date(img.uploadedAt).toLocaleDateString('id-ID')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* ========== AUDIO LIST ========== */}
            {tab === 'audio' && (
                <div>
                    {/* Active Music Info */}
                    <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-200 p-5 mb-5">
                        <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-1">🎵 Musik Aktif</p>
                        <p className="text-sm font-bold text-slate-700">
                            {activeMusic ? audios.find((a) => a.id === activeMusic)?.name || 'Custom music' : 'Default — theme-song.mp3'}
                        </p>
                        {activeMusic && (
                            <button onClick={() => setActiveMusic('')} className="text-xs text-violet-500 font-bold hover:underline mt-2">
                                ↩ Kembalikan ke default
                            </button>
                        )}
                    </div>

                    {audios.length === 0 ? (
                        <div className="text-center py-16 text-slate-300">
                            <FileAudio size={48} className="mx-auto mb-3" />
                            <p className="text-sm font-bold">Belum ada musik</p>
                            <p className="text-xs text-slate-400 mt-1">Upload file musik untuk diputar di website</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {audios.map((audio) => (
                                <div key={audio.id} className={`flex items-center gap-4 bg-white rounded-xl border p-4 transition ${activeMusic === audio.id ? 'border-violet-300 bg-violet-50/30' : 'border-slate-100 hover:border-slate-200'
                                    }`}>
                                    {/* Play/Pause */}
                                    <button onClick={() => toggleAudioPreview(audio)} className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition ${previewAudio === audio.id ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                        }`}>
                                        {previewAudio === audio.id ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                                    </button>

                                    {/* Info */}
                                    <div className="flex-grow min-w-0">
                                        <p className="text-sm font-bold text-slate-700 truncate">{audio.name}</p>
                                        <p className="text-[10px] text-slate-400">{formatSize(audio.size)} • {audio.mimeType} • {new Date(audio.uploadedAt).toLocaleDateString('id-ID')}</p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {activeMusic === audio.id ? (
                                            <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-violet-600 bg-violet-100 px-3 py-1.5 rounded-lg">
                                                <Check size={12} /> Aktif
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => setActiveMusic(audio.id)}
                                                className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition"
                                            >
                                                Set Aktif
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(audio)}
                                            className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition"
                                        >
                                            <Trash2 size={13} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MediaManagerPage;
