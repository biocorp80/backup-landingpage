import { Shield, Star, Users, Clock, Zap, GraduationCap } from 'lucide-react';

const TrustSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Hasil Instan',
      desc: 'Judul & kerangka skripsi siap dalam 15 menit',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Tervalidasi Akademik',
      desc: 'Output dicek 4 pilar: Necessity, Novelty, Relevance, Feasibility',
      color: 'from-teal-500 to-emerald-500',
      bg: 'bg-teal-50',
    },
    {
      icon: GraduationCap,
      title: 'Khusus Mahasiswa RI',
      desc: 'Database 6.000+ kampus & prodi dari PDDikti',
      color: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50',
    },
    {
      icon: Users,
      title: 'Dipercaya 2.500+',
      desc: 'Mahasiswa dari berbagai universitas di Indonesia',
      color: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50',
    },
  ];

  const universities = [
    { name: 'Universitas Indonesia', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_of_Universitas_Indonesia.svg' },
    { name: 'ITB', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_ITB_%282024%29.svg' },
    { name: 'UGM', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Lambang_Universitas_Gadjah_Mada.svg' },
    { name: 'Unpad', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lambang_Universitas_Padjadjaran.svg' },
    { name: 'Undip', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Logo_Undip.png' },
    { name: 'Unair', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Universitas_Airlangga_Logo.svg' },
    { name: 'UB', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_Universitas_Brawijaya.svg' },
    { name: 'ITS', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/ITS_Logo.png' },
    { name: 'UNS', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Logo-uns.svg' },
    { name: 'Telkom University', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_Telkom_University.png' },
    { name: 'Unhas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_Universitas_Hasanuddin.svg' },
    { name: 'IPB', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_IPB_University.svg' },
  ];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
          {benefits.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative bg-white rounded-2xl border border-slate-100 p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-sm md:text-base font-black text-slate-800 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Dipercaya mahasiswa dari kampus-kampus terbaik di Indonesia
            </p>
          </div>

          {/* University Ticker */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />
            <div className="flex items-center overflow-hidden">
              <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
                {[0, 1].map((set) => (
                  <div key={set} className="flex items-center gap-6 px-4">
                    {universities.map((uni, i) => (
                      <div key={`${set}-${i}`} className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={uni.logo}
                          alt={uni.name}
                          className="w-8 h-8 object-contain flex-shrink-0"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <span className="text-xs font-bold text-slate-600">{uni.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Clock size={14} className="text-teal-500" />
              <span className="text-[11px] font-bold text-slate-500">Proses cepat 15 menit</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Shield size={14} className="text-blue-500" />
              <span className="text-[11px] font-bold text-slate-500">Data aman & privat</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span className="text-[11px] font-bold text-slate-500">Rating 4.9/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;