import { FileText, Layout, ListChecks, BookMarked, PenTool, AlignLeft, Info } from 'lucide-react';

const SkripsiTemplateFeaturesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-teal-600 font-black tracking-widest uppercase text-xs mb-2 block">📄 PRODUK UNGGULAN</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Template Kerangka <span className="text-teal-600">Skripsi.</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                        Kerangka skripsi lengkap dalam format Microsoft Word (.docx) — tinggal isi, sesuaikan, dan langsung bisa dikonsultasikan ke dosen pembimbing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Feature 1 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="0">
                        <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Layout size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Format Siap Pakai</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Template sudah mengikuti format standar skripsi universitas — margin, font, spasi, dan halaman judul sudah diatur dengan benar.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <ListChecks size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Struktur BAB Lengkap</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Mencakup BAB I hingga BAB V dengan sub-bab yang jelas — mulai dari Pendahuluan, Tinjauan Pustaka, Metodologi, Hasil & Pembahasan, hingga Kesimpulan.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <PenTool size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Panduan Pengisian</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Setiap bagian dilengkapi petunjuk dan contoh apa yang harus ditulis, sehingga kamu tidak bingung harus mulai dari mana.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <BookMarked size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Daftar Pustaka & Referensi</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Sudah termasuk format penulisan daftar pustaka sesuai standar APA/IEEE yang tinggal kamu sesuaikan.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="400">
                        <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileText size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Format .docx (Word)</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            File dikirim dalam format Microsoft Word (.docx) yang mudah diedit — kompatibel dengan MS Word, Google Docs, dan WPS Office.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="500">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <AlignLeft size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Sesuai Pedoman Akademik</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Disusun berdasarkan standar umum pedoman penulisan skripsi di universitas Indonesia — tinggal sesuaikan dengan kampus masing-masing.
                        </p>
                    </div>
                </div>

                {/* What You Get Section */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden" data-aos="fade-up">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 opacity-50"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Yang Kamu Dapatkan</h3>
                            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                                Satu file Word lengkap yang sudah mencakup seluruh kebutuhan penulisan skripsimu:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <Layout size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Halaman Judul</h4>
                                <p className="text-sm text-slate-500">Cover skripsi dengan format standar.</p>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <ListChecks size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Kerangka BAB I – V</h4>
                                <p className="text-sm text-slate-500">Struktur lengkap dari pendahuluan hingga penutup.</p>
                            </div>
                            {/* Item 3 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-purple-100 group-hover:text-purple-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <PenTool size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Panduan di Tiap Bagian</h4>
                                <p className="text-sm text-slate-500">Instruksi apa yang harus ditulis di setiap sub-bab.</p>
                            </div>
                            {/* Item 4 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <BookMarked size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Format Daftar Pustaka</h4>
                                <p className="text-sm text-slate-500">Template referensi APA/IEEE siap isi.</p>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-xl">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Info className="text-teal-500" size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Tips Penggunaan</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Gunakan template ini sebagai panduan kerangka awal. Sesuaikan isi dan format sesuai pedoman penulisan dari kampus atau program studi masing-masing. Konsultasikan kerangka ini ke dosen pembimbingmu sebelum mulai menulis penuh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkripsiTemplateFeaturesSection;
