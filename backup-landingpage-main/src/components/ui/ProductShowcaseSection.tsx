import { Youtube, FileText, ExternalLink, Download } from 'lucide-react';

const ProductShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-black tracking-widest uppercase text-xs mb-2 block">CONTOH HASIL NYATA</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Intip Daleman <span className="text-secondary">Generator Judul.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Lihat langsung bagaimana sistem kami bekerja menghasilkan judul dan dokumen berkualitas untukmu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Video Column */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-right">
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/lfNxUzMbk9c?rel=0" 
                title="Tutorial Dosbing.ai" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <Youtube size={24} />
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3">Tutorial Penggunaan</h3>
              <p className="text-slate-500 leading-relaxed">
                Saksikan bagaimana mudahnya menggunakan Generator Judul Dosbing.ai untuk menemukan topik penelitian yang tepat dan valid secara akademik dalam hitungan menit.
              </p>
            </div>
          </div>

          {/* PDF Preview Column */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-left">
            <div className="relative h-[400px] bg-slate-100 border-b border-slate-200">
              {/* Desktop PDF Embed (Hidden on Mobile) */}
              <div className="hidden lg:block w-full h-full relative">
                <iframe src="/template-preview.pdf#toolbar=0&navpanes=0&scrollbar=0" className="w-full h-full border-none"></iframe>
                {/* Overlay */}
                <a href="/template-preview.pdf" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors group flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-slate-900 font-bold text-sm flex items-center gap-2">
                    <ExternalLink size={16} /> Buka Full Screen
                  </div>
                </a>
              </div>

              {/* Mobile Fallback (Visible on Mobile) */}
              <div className="lg:hidden w-full h-full flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-4 text-red-500">
                  <FileText size={40} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Preview Template PDF</h4>
                <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
                  Tampilan preview tidak tersedia di mobile. Silakan unduh atau buka file untuk melihat.
                </p>
                <a href="/template-preview.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <Download size={16} /> Buka / Download PDF
                </a>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3">Preview Template Skripsi</h3>
              <p className="text-slate-500 leading-relaxed">
                Contoh nyata template kerangka skripsi yang akan Anda dapatkan. Format rapi, sesuai pedoman akademik, dan siap pakai.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;