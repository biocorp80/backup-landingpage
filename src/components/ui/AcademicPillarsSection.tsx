import { AlertTriangle, Lightbulb, Target, CheckCircle, TrendingUp, BookOpen, ShieldCheck, GitMerge, MessageSquare, Info } from 'lucide-react';

const AcademicPillarsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal-600 font-black tracking-widest uppercase text-xs mb-2 block">🎯 GENERATOR JUDUL SKRIPSI</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Telaah Akademik <span className="text-teal-600">4 Pilar.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Produk Generator Judul Skripsi kami menggunakan sistem AI yang memberikan skor dan analisis mendalam pada empat aspek krusial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1: Necessity */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="0">
            <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <AlertTriangle size={28} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Necessity (Urgensi)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Menilai seberapa penting masalah tersebut untuk diteliti saat ini.</p>
          </div>

          {/* Pillar 2: Novelty */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="100">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Lightbulb size={28} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Novelty (Kebaruan)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Memastikan adanya celah penelitian (research gap) atau sisi unik yang membedakan penelitian Anda dengan penelitian terdahulu.
            </p>
          </div>

          {/* Pillar 3: Relevance */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="200">
            <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Target size={28} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Relevance (Kesesuaian)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Menilai apakah judul sesuai dengan bidang keilmuan atau program studi Anda.
            </p>
          </div>

          {/* Pillar 4: Feasibility */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full" data-aos="fade-up" data-aos-delay="300">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle size={28} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Feasibility (Kelayakan)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Meninjau apakah penelitian tersebut mungkin dilakukan dalam hal waktu, biaya, dan ketersediaan data.
            </p>
          </div>
        </div>

        {/* Validation Result Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden" data-aos="fade-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 opacity-50"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Hasil Akhir Validasi</h3>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                Setelah melalui tahap validasi ini, Anda akan mendapatkan output berupa dokumen PDF yang berisi:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
              {/* Result 1 */}
              <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <TrendingUp size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Skor Validasi</h4>
                <p className="text-sm text-slate-500">Indikator numerik kelayakan judul.</p>
              </div>
              {/* Result 2 */}
              <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <BookOpen size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Justifikasi Ilmiah</h4>
                <p className="text-sm text-slate-500">Alasan mengapa judul layak diteliti.</p>
              </div>
              {/* Result 3 */}
              <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Bahan Argumentasi</h4>
                <p className="text-sm text-slate-500">Senjata untuk diskusi dengan dosen.</p>
              </div>
              {/* Result 4 */}
              <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <GitMerge size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Kerangka & Plan</h4>
                <p className="text-sm text-slate-500">Desain variabel hingga analisis data.</p>
              </div>
              {/* Result 5 */}
              <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <MessageSquare size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Draf Kuesioner</h4>
                <p className="text-sm text-slate-500">10 butir pernyataan siap pakai.</p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Info className="text-amber-500" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Catatan Penting</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Meskipun sistem memberikan validasi akademik yang tinggi, keputusan akhir tetap berada di tangan dosen pembimbing masing-masing. Dokumen PDF hasil validasi ini dirancang untuk menjadi "senjata" Anda dalam berdiskusi dan mempertahankan argumen saat bimbingan.
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

export default AcademicPillarsSection;