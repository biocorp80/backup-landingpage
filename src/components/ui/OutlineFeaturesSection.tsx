import { ListChecks, BookOpen, Layers, Lightbulb, Sparkles, FileText, Target, Info, Play, CreditCard } from 'lucide-react';

const OutlineFeaturesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-orange-600 font-black tracking-widest uppercase text-xs mb-2 block">📋 PRODUK BARU</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Outline <span className="text-orange-600">Skripsi Otomatis.</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                        Breakdown struktur Bab 1 hingga Bab 3 secara otomatis — tinggal input judul, outline skripsi langsung jadi dan siap dikonsultasikan ke dosen pembimbing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Feature 1 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="0">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Sparkles size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Input Judul, Langsung Jadi</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Cukup masukkan judul skripsimu, sistem akan menghasilkan outline lengkap Bab 1 – Bab 3 secara otomatis dalam hitungan menit.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <ListChecks size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Struktur Bab 1 – Bab 3</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Mencakup Pendahuluan (Latar Belakang, Rumusan Masalah, Tujuan), Tinjauan Pustaka, hingga Metodologi Penelitian — lengkap dan terstruktur.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Lightbulb size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Panduan Isi Sub-bab</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Setiap sub-bab dilengkapi panduan dan arahan tentang apa yang harus ditulis, sehingga kamu tidak bingung harus mengisi apa.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Target size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Relevan dengan Topik</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Outline yang dihasilkan relevan dengan judul dan bidang penelitianmu — bukan template generik, tapi disesuaikan secara cerdas.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="400">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileText size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Output Word (.docx)</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Hasil outline dikirim dalam format Microsoft Word (.docx) yang mudah diedit — kompatibel dengan MS Word, Google Docs, dan WPS Office.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="500">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Hemat Waktu Riset</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Tidak perlu berjam-jam menyusun kerangka manual. Outline otomatis membantu kamu fokus langsung ke penulisan isi skripsi.
                        </p>
                    </div>
                </div>

                {/* Video Section */}
                <div className="mb-16" data-aos="fade-up">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Lihat Langsung <span className="text-orange-600">Cara Kerjanya</span></h3>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                            Tonton video berikut untuk memahami produk dan tata cara pemesanan.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Video 1: Tentang Produk */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-5 shadow-lg border border-orange-100/50 hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/hVVTbWDrGN0"
                                        title="Tentang Produk Outline Skripsi"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Play size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Tentang Produk</h4>
                                        <p className="text-xs text-slate-500">Penjelasan lengkap tentang Outline Skripsi Otomatis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video 2: Tata Cara Pembayaran */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-5 shadow-lg border border-teal-100/50 hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/Wu01TGkb8Yc"
                                        title="Tata Cara Pembayaran"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CreditCard size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Tata Cara Pembayaran</h4>
                                        <p className="text-xs text-slate-500">Panduan langkah demi langkah proses pembayaran</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What You Get Section */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden" data-aos="fade-up">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full -ml-32 -mb-32 opacity-50"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Yang Kamu Dapatkan</h3>
                            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                                Satu dokumen outline lengkap yang mencakup seluruh struktur awal skripsimu:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <Layers size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Outline Bab 1</h4>
                                <p className="text-sm text-slate-500">Latar Belakang, Rumusan Masalah, Tujuan & Manfaat.</p>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <BookOpen size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Outline Bab 2</h4>
                                <p className="text-sm text-slate-500">Tinjauan Pustaka, Landasan Teori & Kerangka Pemikiran.</p>
                            </div>
                            {/* Item 3 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <Target size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Outline Bab 3</h4>
                                <p className="text-sm text-slate-500">Metodologi Penelitian, Teknik Pengumpulan & Analisis Data.</p>
                            </div>
                            {/* Item 4 */}
                            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                                <div className="w-16 h-16 bg-white text-slate-700 group-hover:bg-purple-100 group-hover:text-purple-600 rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm border border-slate-200">
                                    <Lightbulb size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Panduan Penulisan</h4>
                                <p className="text-sm text-slate-500">Arahan isi di tiap sub-bab agar penulisan terarah.</p>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Info className="text-orange-500" size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Tips Penggunaan</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Gunakan outline ini sebagai peta jalan penulisan skripsimu. Sesuaikan isi dan struktur dengan pedoman kampus masing-masing, lalu konsultasikan ke dosen pembimbing sebelum mulai menulis isi lengkap.
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

export default OutlineFeaturesSection;
