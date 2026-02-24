import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle, TriangleAlert, Handshake, Zap, Scale, Users, Quote, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="pt-20">
      {/* SECTION 1: HERO / HEADLINE */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider mb-6 border border-blue-200 shadow-sm" data-aos="fade-down">
            TENTANG DOSBING.AI
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight" data-aos="fade-up">
            Bukan Sekadar AI, Tapi <br />
            <span className="text-primary relative inline-block">
              Sahabat Riset Anda
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7509 2.99999 52.3338 2.33333 79.9172 2.00003C137.917 1.33336 179.917 3.50001 197.917 5.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="100">
            Dosbing.ai hadir untuk memastikan tidak ada lagi mahasiswa yang merasa "tersesat" di tengah jalan saat menyusun skripsi atau tesis. Kami menggabungkan kecanggihan teknologi dengan metodologi akademik yang presisi.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM & SOLUTION */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Illustration/Image */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-[2.5rem] transform -rotate-2 opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="Students Studying" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] border-4 border-white"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block animate-float">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Status</p>
                    <p className="text-slate-900 font-bold">On-Track 100%</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm italic">"Bimbingan kapan saja, di mana saja."</p>
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
                Mengapa <span className="text-primary">Dosbing.ai?</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 text-xl shadow-sm">
                    <TriangleAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Masalah Umum</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Menyusun karya ilmiah seringkali terasa sepi dan membingungkan. Terbatasnya waktu bimbingan tatap muka dan sulitnya menemukan referensi yang tepat menjadi hambatan utama.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 text-xl shadow-sm">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Solusi Kami</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Dosbing.ai hadir sebagai jembatan. Kami memberikan pendampingan instan 24/7 yang membantu Anda tetap on-track, mulai dari penentuan judul hingga teknik analisis data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="py-12 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[100px] top-0 left-1/4"></div>
           <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-[100px] bottom-0 right-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Tiga Pilar Kami</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cerdas & Responsif</h3>
              <p className="text-slate-300 leading-relaxed">
                Mendapatkan jawaban dan arahan metodologi dalam hitungan detik, kapan saja Anda butuh.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Integritas Akademik</h3>
              <p className="text-slate-300 leading-relaxed">
                Kami membantu Anda berpikir lebih dalam, bukan menggantikan proses belajar Anda.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Inklusif untuk Semua</h3>
              <p className="text-slate-300 leading-relaxed">
                Akses ke bimbingan berkualitas untuk setiap mahasiswa, tanpa batasan jarak dan waktu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE VISION */}
      <section className="py-12 md:py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-10 text-primary opacity-20 flex justify-center">
            <Quote className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 leading-normal italic mb-10" data-aos="zoom-in">
            "Demokratisasi bimbingan akademik. Kami percaya setiap mahasiswa berhak mendapatkan arahan terbaik untuk menghasilkan riset yang berdampak bagi dunia."
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-slate-300"></div>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Visi Kami</span>
            <div className="h-px w-16 bg-slate-300"></div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 text-xs mb-3 space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-4">"Sangat membantu saat stuck cari judul. Benar-benar seperti punya dosen pembimbing 24 jam."</p>
              <p className="text-slate-900 font-bold text-sm">- Sarah, Mahasiswa Psikologi</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 text-xs mb-3 space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-4">"Fitur kerangka skripsinya rapi banget, tinggal isi konten. Hemat waktu formatting!"</p>
              <p className="text-slate-900 font-bold text-sm">- Budi, Mahasiswa Teknik</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 text-xs mb-3 space-x-1">
                 {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-4">"Metodologinya jelas dan akademis. Dosen saya acc judul dalam sekali pengajuan."</p>
              <p className="text-slate-900 font-bold text-sm">- Rina, Mahasiswa Ekonomi</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden" data-aos="flip-up">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Siap Selesaikan Revisi Hari Ini?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Ribuan mahasiswa telah memulai perjalanan riset mereka dengan lebih percaya diri. Sekarang giliran Anda.
            </p>
            
            <Link to="/#pricing" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-black text-lg shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 relative z-10">
              Coba Dosbing.ai Sekarang — Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
