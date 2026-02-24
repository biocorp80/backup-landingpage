import { UserCheck, ScrollText, Cpu } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Standard Kualitas <span className="text-primary">Eksklusif.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
            Kami menjamin setiap output dari Dosbing.ai memenuhi standar penulisan ilmiah tertinggi di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transform transition hover:-translate-y-2" data-aos="fade-up" data-aos-delay="0">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 text-2xl shadow-inner">
              <UserCheck size={32} />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4">Privasi Terjaga</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Data riset dan identitasmu dijamin 100% aman. Kami menggunakan enkripsi tingkat perbankan untuk melindungi privasimu.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transform transition hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 text-2xl shadow-inner">
              <ScrollText size={32} />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4">Integritas Akademik</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Hasil generator didesain untuk membantu proses berpikir kritis, bukan untuk plagiarisme. Output orisinal dan unik.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transform transition hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 text-2xl shadow-inner">
              <Cpu size={32} />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4">AI Terverifikasi</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Dilatih khusus dengan ribuan database skripsi Indonesia untuk memastikan relevansi istilah dan metodologi lokal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;