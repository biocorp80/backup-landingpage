import { XCircle, Check } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Berhenti Menyiksa Diri <br /> <span className="text-red-500">Dengan Cara Lama.</span>
            </h2>
            <p className="text-slate-500 font-medium mb-10 text-lg">
              Rata-rata mahasiswa menghabiskan 3-5 minggu hanya untuk mencari judul. Kami memangkasnya menjadi 15 menit saja.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 bg-red-50 rounded-2xl border border-red-100 transition hover:bg-red-100">
                <XCircle className="text-red-500 flex-shrink-0" size={24} />
                <p className="text-sm font-bold text-red-900 italic">"Gak tau mau nulis apa, layar laptop putih terus seharian..."</p>
              </div>
              <div className="flex items-center gap-4 p-5 bg-red-50 rounded-2xl border border-red-100 transition hover:bg-red-100">
                <XCircle className="text-red-500 flex-shrink-0" size={24} />
                <p className="text-sm font-bold text-red-900 italic">"Udah ngajuin 3 judul ditolak semua, dibilang gak relevan..."</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative border-t-8 border-secondary" data-aos="fade-left">
            <div className="absolute -top-6 left-10 bg-secondary text-white font-black px-8 py-2 rounded-full text-xs shadow-xl tracking-widest uppercase">Evolusi Skripsi</div>
            <h3 className="text-2xl font-black text-white mb-10">Bersama Dosbing.ai:</h3>
            
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Judul yang Tajam & Terarah</p>
                  <p className="text-slate-400 text-sm">Output AI kami menyertakan novelty (kebaruan) yang disukai dosen penguji.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Format Word 100% Sempurna</p>
                  <p className="text-slate-400 text-sm">Tidak perlu pusing margin, spasi, atau daftar isi manual lagi.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Persiapan Mental Bimbingan</p>
                  <p className="text-slate-400 text-sm">Dapatkan draf pertanyaan yang mungkin ditanyakan dosen saat presentasi judul.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;