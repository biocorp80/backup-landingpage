import { Youtube, FileText, ListChecks } from 'lucide-react';

const ProductShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal-600 font-black tracking-widest uppercase text-xs mb-2 block">VIDEO PANDUAN</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Kenali Lebih Dekat <span className="text-teal-600">Produk Kami.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Lihat langsung cara kerja produk kami — dari generate judul skripsi, template kerangka, hingga outline skripsi otomatis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">

          {/* Generator Judul Skripsi */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="0">
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/lfNxUzMbk9c?rel=0"
                title="Generator Judul Skripsi - Dosbing.ai"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <Youtube size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Generator Judul Skripsi</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Saksikan bagaimana mudahnya menggunakan Generator Judul untuk menemukan topik penelitian yang tepat dalam hitungan menit.
              </p>
            </div>
          </div>

          {/* Template Kerangka Skripsi */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JT2hykCyph0?rel=0"
                title="Template Kerangka Skripsi - Dosbing.ai"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Template Kerangka Skripsi</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Lihat langsung hasil template kerangka skripsi — format rapi, sesuai pedoman akademik, dan siap pakai.
              </p>
            </div>
          </div>

          {/* Outline Skripsi Otomatis */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 flex flex-col ring-2 ring-orange-200/50" data-aos="fade-up" data-aos-delay="200">
            <div className="relative pb-[56.25%] h-0 bg-gradient-to-br from-orange-500 to-amber-500">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <ListChecks size={48} className="mb-4 opacity-90" />
                <p className="font-black text-lg">Outline Skripsi Otomatis</p>
                <p className="text-white/80 text-sm mt-1">Video segera hadir</p>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <ListChecks size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Outline Skripsi Otomatis</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Input judul skripsimu, dapatkan outline Bab 1 – Bab 3 secara otomatis — lengkap dengan panduan isi tiap sub-bab.
              </p>
            </div>
          </div>

        </div>

        {/* Tutorial Pembelian Sub-section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-teal-600 font-black tracking-widest uppercase text-xs mb-2 block">TUTORIAL PEMBELIAN</span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
            Tatacara Pembelian <span className="text-teal-600">Produk Kami.</span>
          </h3>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Ikuti panduan singkat berikut untuk membeli produk kami — prosesnya cepat, mudah, dan langsung bisa dipakai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Tutorial Pembelian Kerangka Skripsi */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="0">
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/riY4Pvu0n8o?rel=0"
                title="Tutorial Pembelian Kerangka Skripsi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Youtube size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Tutorial Pembelian Kerangka Skripsi</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Panduan langkah demi langkah cara membeli template kerangka skripsi di Dosbing.ai dengan mudah dan cepat.
              </p>
            </div>
          </div>

          {/* Tutorial Pembelian Generator Judul */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/rl5sDDZ5ki0?rel=0"
                title="Tutorial Pembelian Generator Judul Skripsi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Youtube size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Tutorial Pembelian Generator Judul</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Panduan lengkap cara membeli akses Generator Judul Skripsi — proses cepat dan langsung bisa digunakan.
              </p>
            </div>
          </div>

          {/* Tutorial Pembelian Outline Skripsi */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 flex flex-col ring-2 ring-orange-200/50" data-aos="fade-up" data-aos-delay="200">
            <div className="relative pb-[56.25%] h-0 bg-gradient-to-br from-orange-500 to-amber-500">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <ListChecks size={48} className="mb-4 opacity-90" />
                <p className="font-black text-lg">Tutorial Pembelian</p>
                <p className="text-white/80 text-sm mt-1">Video segera hadir</p>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex-grow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Youtube size={24} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3">Tutorial Pembelian Outline Skripsi</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Panduan cara membeli outline skripsi otomatis di Dosbing.ai — input judul, bayar, dan terima outline langsung.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;