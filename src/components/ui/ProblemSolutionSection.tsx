import { XCircle, Check, Sparkles } from 'lucide-react';

const ProblemSolutionSection = () => {
  const problems = [
    '"Udah berjam-jam di depan laptop, tapi layar masih kosong..."',
    '"Udah ngajuin 3 judul ditolak semua, stres banget rasanya..."',
  ];

  const solutions = [
    {
      title: 'Judul yang Tajam & Terarah',
      desc: 'Output AI kami menyertakan novelty (kebaruan) yang disukai dosen penguji.',
    },
    {
      title: 'Format Word 100% Sempurna',
      desc: 'Tidak perlu pusing margin, spasi, atau daftar isi manual lagi.',
    },
    {
      title: 'Persiapan Mental Bimbingan',
      desc: 'Dapatkan draf pertanyaan yang mungkin ditanyakan dosen saat presentasi judul.',
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Problem Side */}
          <div data-aos="fade-right" className="flex flex-col">
            <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Deadline Makin Dekat, <br />
              <span className="text-red-500">Judul Belum Ketemu?</span>
            </h2>
            <p className="text-slate-500 font-medium mb-8 text-base leading-relaxed">
              Rata-rata mahasiswa menghabiskan 3–5 minggu hanya untuk mencari judul. Kami memangkasnya menjadi <strong className="text-slate-700">15 menit</strong> saja — biar kamu bisa fokus ke hal lain! 💪
            </p>

            <div className="space-y-4 mt-auto">
              {problems.map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-red-50/70 rounded-xl border border-red-100/60">
                  <XCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-semibold text-red-800/80 italic leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div data-aos="fade-left">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 h-full relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]" />

              {/* Top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 rounded-full" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-teal-500/20 mb-6">
                  <Sparkles size={12} className="text-teal-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">Solusi Dosbing.ai</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-8">
                  Bersama Dosbing.ai:
                </h3>

                <ul className="space-y-6">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500/15 rounded-xl flex items-center justify-center">
                        <Check size={16} className="text-teal-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;