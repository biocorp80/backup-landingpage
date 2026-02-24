import { FileText, Wand2, ListChecks, MonitorPlay, Smartphone, Check, Star, Search, Network, MessageSquare, FileType } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight" data-aos="fade-up">
          Investasi Untuk <span className="text-secondary">Masa Depanmu.</span>
        </h2>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto mb-20 text-lg" data-aos="fade-up" data-aos-delay="100">
          Pilih paket bantuan yang paling sesuai dengan kebutuhan bimbinganmu saat ini.
        </p>

        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {/* Plan 1 */}
          <div className="relative w-full md:w-[45%] lg:w-[30%] group flex" data-aos="fade-up" data-aos-delay="0">
            <div className="absolute -top-4 left-6 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg z-20">Hemat 70%</div>
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col border border-slate-100 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl w-full h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText size={28} />
              </div>
              <h4 className="font-heading text-xl font-black text-slate-900 mb-2">Kerangka Skripsi</h4>
              <p className="text-slate-500 text-sm mb-8 font-medium italic">Template Word (.docx) Profesional</p>
              <ul className="space-y-4 mb-10 flex-grow text-sm font-bold text-slate-700 text-left">
                <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} /></span> <span className="leading-tight">Sesuai Pedoman Kampus (Database PDDikti)</span></li>
                <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} /></span> <span className="leading-tight">Format Rapi (Margin, Font, Spasi)</span></li>
                <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} /></span> <span className="leading-tight">Daftar Isi & Tabel Otomatis</span></li>
                <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} /></span> <span className="leading-tight">Lengkap dengan Logo Kampus</span></li>
                <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} /></span> <span className="leading-tight">Praktis, Tinggal Isi Konten</span></li>
              </ul>
              <div className="mb-8 text-left mt-auto">
                <span className="text-slate-300 line-through text-xs font-black">Rp 35.000</span>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-1">Rp 10.000</p>
              </div>
              <a href="https://lynk.id/dosbing.ai/6v9p194qxev9" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-center shadow-[0_10px_20px_rgba(2,6,23,0.35)] hover:bg-slate-800 transition">
                Ambil Template
              </a>
            </div>
          </div>

          {/* Plan 2 (Featured) */}
          <div className="relative w-full md:w-[45%] lg:w-[30%] group z-10 flex order-first lg:order-none" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white font-black text-[10px] uppercase tracking-[0.2em] px-6 sm:px-8 py-2.5 rounded-full shadow-2xl z-30 whitespace-nowrap">Best Seller</div>
            <div className="rounded-[2.7rem] p-[2px] bg-gradient-to-br from-secondary via-primary to-accent shadow-2xl w-full flex flex-col">
              <div className="bg-white rounded-[2.6rem] p-5 sm:p-8 flex flex-col border border-slate-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_rgba(26,74,182,0.25)] w-full h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Wand2 size={32} />
                </div>
                <h4 className="font-heading text-xl font-black text-primary mb-2">Generator Judul</h4>
                <p className="text-slate-500 text-sm mb-8 font-medium italic">Solusi Buntu Ide (15 Menit Jadi)</p>
                <ul className="space-y-5 mb-10 flex-grow text-sm font-bold text-slate-800 text-left">
                  <li className="flex items-start gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"><Star className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} fill="currentColor" /> <span className="leading-tight">3 Opsi Judul Unik & Masuk Akal</span></li>
                  <li className="flex items-start gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"><Search className="text-primary flex-shrink-0 mt-0.5" size={16} /> <span className="leading-tight">Analisis 4 Pilar (Urgency, Novelty, dll)</span></li>
                  <li className="flex items-start gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"><Network className="text-primary flex-shrink-0 mt-0.5" size={16} /> <span className="leading-tight">Matriks Penelitian (Var, Hipotesis)</span></li>
                  <li className="flex items-start gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"><MessageSquare className="text-primary flex-shrink-0 mt-0.5" size={16} /> <span className="leading-tight">Draft Kuesioner & Pertanyaan Dosen</span></li>
                  <li className="flex items-start gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"><FileType className="text-red-500 flex-shrink-0 mt-0.5" size={16} /> <span className="leading-tight">Output PDF Lengkap & Rapi</span></li>
                </ul>
                <div className="mb-8 text-left mt-auto">
                  <span className="text-slate-300 line-through text-xs font-black">Rp 50.000</span>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mt-1">Rp 20.000</p>
                </div>
                <a href="https://lynk.id/dosbing.ai/nvynv9jqqjmj" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-center shadow-2xl hover:bg-blue-800 transition transform hover:-translate-y-1">
                  Beli Kode Akses
                </a>
              </div>
            </div>
          </div>

          {/* Plan 3 (Outline - Coming Soon) */}
          <div className="relative w-full md:w-[45%] lg:w-[30%] group flex" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-slate-800 rounded-[2.5rem] p-6 sm:p-8 flex flex-col relative overflow-hidden border border-slate-700/60 shadow-inner w-full h-full">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white text-slate-900 font-black px-6 py-2 rounded-xl text-xs uppercase tracking-widest -rotate-12 border-2 border-primary shadow-2xl animate-pulse">Coming Soon</div>
              </div>
              <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-500 mb-6 border border-slate-600">
                <ListChecks size={28} />
              </div>
              <h4 className="font-heading text-xl font-black text-slate-300 mb-2">Outline Skripsi</h4>
              <p className="text-slate-400 text-sm mb-6">Breakdown Bab 1-3 Otomatis</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-8">Buat struktur skripsi dari Latar Belakang hingga Metodologi hanya dengan input judul.</p>
              <div className="flex-grow"></div>
              <button disabled className="w-full bg-slate-700 text-slate-500 py-5 rounded-2xl font-black cursor-not-allowed mt-auto opacity-50">Nantikan Segera</button>
            </div>
          </div>

          {/* Plan 4 (PPTX - Coming Soon) */}
          <div className="relative w-full md:w-[45%] lg:w-[30%] group flex" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-slate-800 rounded-[2.5rem] p-6 sm:p-8 flex flex-col relative overflow-hidden border border-slate-700/60 shadow-inner w-full h-full">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white text-slate-900 font-black px-6 py-2 rounded-xl text-xs uppercase tracking-widest -rotate-12 border-2 border-primary shadow-2xl animate-pulse">Coming Soon</div>
              </div>
              <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-500 mb-6 border border-slate-600">
                <MonitorPlay size={28} />
              </div>
              <h4 className="font-heading text-xl font-black text-slate-300 mb-2">Generator PPTX</h4>
              <p className="text-slate-400 text-sm mb-6">Persiapan Sempro & Sidang</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-8">Ubah naskah skripsi jadi slide presentasi estetik dengan poin-poin kunci otomatis.</p>
              <div className="flex-grow"></div>
              <button disabled className="w-full bg-slate-700 text-slate-500 py-5 rounded-2xl font-black cursor-not-allowed mt-auto opacity-50">Nantikan Segera</button>
            </div>
          </div>

          {/* Plan 5 (App - Coming Soon) */}
          <div className="relative w-full md:w-[45%] lg:w-[30%] group flex" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-slate-800 rounded-[2.5rem] p-6 sm:p-8 flex flex-col relative overflow-hidden border border-slate-700/60 shadow-inner w-full h-full">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white text-slate-900 font-black px-6 py-2 rounded-xl text-xs uppercase tracking-widest -rotate-12 border-2 border-primary shadow-2xl animate-pulse">Coming Soon</div>
              </div>
              <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-500 mb-6 border border-slate-600">
                <Smartphone size={28} />
              </div>
              <h4 className="font-heading text-xl font-black text-slate-300 mb-2">Aplikasi Dosbing.ai</h4>
              <p className="text-slate-400 text-sm mb-6">Asisten Riset Saku</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-8">Konsultasi 24/7, manajemen referensi, dan tracking progress skripsi dalam satu aplikasi.</p>
              <div className="flex-grow"></div>
              <button disabled className="w-full bg-slate-700 text-slate-500 py-5 rounded-2xl font-black cursor-not-allowed mt-auto opacity-50">Nantikan Segera</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
