import { useState, useEffect } from 'react';
import { Wand2, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Shield, Award as AwardIcon, Star as StarIcon } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = ['Mahasiswa Akhir', 'Pejuang Skripsi', 'Calon Sarjana', 'Siswa Ambis'];

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleType = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const speed = isDeleting ? 40 : 100;
    const timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 lg:pt-64 lg:pb-48 hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
      
      <div className="absolute top-1/4 left-5 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-100 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
              Asisten Skripsi Premium #1 di Indonesia
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 sm:mb-8">
              Dosen Pembimbing Virtual 24/7, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">
                Terstruktur, Etis, Sampai Lulus.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50/80 font-medium mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dosbing.ai hadir menyelamatkanmu dari <em>writer's block</em>. Dapatkan ide judul yang{' '}
              <span className="text-white font-bold typing-cursor underline decoration-secondary/50">
                {text}
              </span>{' '}
              <br className="hidden sm:block" />
              dan susun kerangka Bab 1-5 dalam hitungan menit.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://lynk.id/dosbing.ai/nvynv9jqqjmj"
                className="group w-full md:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-secondary text-white text-sm sm:text-base font-bold rounded-2xl hover:bg-teal-500 transition-all shadow-[0_15px_30px_rgba(28,184,163,0.3)] transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
              >
                <Wand2 className="group-hover:rotate-12 transition-transform" size={20} />
                <span>Generator Judul Sekarang</span>
              </a>
              <a
                href="https://lynk.id/dosbing.ai/6v9p194qxev9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 border border-white/20 text-white text-sm sm:text-base font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <FileTextIcon size={20} />
                <span>Template Skripsi Rp 10rb</span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2 text-white text-[10px] font-bold tracking-widest uppercase">
                <CheckCircleIcon className="text-secondary" size={16} /> Verifikasi PDDikti
              </div>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold tracking-widest uppercase">
                <Shield className="text-secondary" size={16} /> Enkripsi Data Aman
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/5 relative" data-aos="fade-left">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary to-primary rounded-[3.5rem] blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Mahasiswa Indonesia Sukses"
                className="relative rounded-[3rem] shadow-2xl border-4 border-white/20 object-cover h-[350px] sm:h-[450px] lg:h-[500px] w-full transform hover:rotate-1 transition-transform duration-700"
              />
              
              <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-white/95 backdrop-blur-lg p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 flex items-center gap-3 sm:gap-4 animate-float z-20">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <AwardIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-none mb-1">Judul Lolos ACC!</p>
                  <div className="flex text-[8px] text-yellow-500 gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* University Running Text */}
      <div className="mt-16 sm:mt-32 w-full overflow-hidden bg-white/5 backdrop-blur-sm py-6 sm:py-8 border-y border-white/10">
        <p className="text-center text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Mendukung Format Akademik Kampus Top Indonesia</p>
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center justify-around gap-20 px-10 grayscale opacity-50 brightness-200">
            {['Universitas Indonesia', 'ITB Bandung', 'UGM Yogyakarta', 'IPB University', 'UNPAD Bandung', 'ITS Surabaya', 'UNDIP Semarang', 'Universitas Indonesia', 'ITB Bandung', 'UGM Yogyakarta'].map((uni, index) => (
              <span key={index} className="text-lg sm:text-2xl font-black text-white uppercase tracking-tighter">
                {uni}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
