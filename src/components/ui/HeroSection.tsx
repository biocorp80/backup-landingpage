import { useState, useEffect, useRef } from 'react';
import { Wand2, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Shield, Award as AwardIcon, Star as StarIcon, Sparkles, BookOpen, Users, Volume2, VolumeX } from 'lucide-react';
import { useSiteContentStore } from '../../store/siteContentStore';

const HeroSection = () => {
  const { content } = useSiteContentStore();
  const heroImages = content.hero.images;
  const words = content.hero.typingWords;

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Typing effect
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

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Music toggle
  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/bg-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 hero-gradient overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>

      {/* Ambient glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-400/5 rounded-full blur-[200px]"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 text-teal-400/20 text-6xl animate-float hidden lg:block">✦</div>
      <div className="absolute bottom-40 left-16 text-teal-400/15 text-4xl animate-float hidden lg:block" style={{ animationDelay: '3s' }}>✦</div>
      <div className="absolute top-40 left-1/3 text-blue-300/10 text-3xl animate-float hidden lg:block" style={{ animationDelay: '2s' }}>✧</div>
      <div className="absolute bottom-20 right-1/3 text-teal-300/10 text-5xl animate-float hidden lg:block" style={{ animationDelay: '4s' }}>✧</div>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title={isMusicPlaying ? 'Matikan Musik' : 'Putar Musik'}
      >
        {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-teal-200 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
              🔥 Promo Spesial Mahasiswa
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 sm:mb-8">
              {content.hero.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === content.hero.headline.split('\n').length - 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400">
                      {line}
                    </span>
                  ) : line}
                </span>
              ))}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.hero.subheadline.split('{typing}')[0]}
              <span className="text-white font-bold typing-cursor underline decoration-teal-400/50">
                {text}
              </span>
              {content.hero.subheadline.split('{typing}')[1] || ''}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-10">
              <a
                href={content.hero.ctaLink}
                className="group w-full sm:w-auto px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm sm:text-base font-black rounded-2xl hover:from-blue-600 hover:to-teal-600 transition-all shadow-[0_15px_30px_rgba(26,74,182,0.3)] transform hover:-translate-y-1 text-center flex items-center justify-center gap-3"
              >
                <Wand2 className="group-hover:rotate-12 transition-transform flex-shrink-0" size={20} />
                <span>{content.hero.ctaText}</span>
              </a>
              <a
                href="https://lynk.id/dosbing.ai/6v9p194qxev9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-white/5 border-2 border-teal-400/30 text-white text-sm sm:text-base font-black rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-3 hover:-translate-y-1"
              >
                <FileTextIcon className="flex-shrink-0" size={20} />
                <span>Template Skripsi Rp 10rb</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <CheckCircleIcon className="text-teal-400" size={14} /> Verifikasi PDDikti
              </div>
              <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Shield className="text-teal-400" size={14} /> Enkripsi Data Aman
              </div>
              <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Sparkles className="text-teal-400" size={14} /> 12k+ Dokumen
              </div>
            </div>
          </div>

          {/* Right Content — Rotating Photo + Floating Cards */}
          <div className="w-full lg:w-2/5 relative" data-aos="fade-left">
            <div className="relative max-w-md mx-auto">
              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 rounded-[3.5rem] blur-3xl opacity-60 animate-pulse"></div>

              {/* Image Carousel */}
              <div className="relative rounded-[3rem] shadow-2xl border-4 border-white/20 overflow-hidden h-[320px] sm:h-[420px] lg:h-[520px] w-full z-10">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? 'bg-teal-400 w-6'
                        : 'bg-white/40 hover:bg-white/60'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Card: Judul Lolos ACC */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 bg-white/95 backdrop-blur-lg p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 flex items-center gap-3 sm:gap-4 animate-float z-20">
                <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
                  <AwardIcon size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-none mb-1">Judul Lolos ACC! ✅</p>
                  <div className="flex text-[8px] text-blue-500 gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card: Users count */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-6 bg-white/95 backdrop-blur-lg p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Users size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-none mb-1">6.632 Kampus</p>
                  <p className="text-[10px] text-slate-400 font-medium">Database PDDikti ✅</p>
                </div>
              </div>

              {/* Floating Card: Promo badge */}
              <div className="absolute top-1/2 -right-2 sm:-right-10 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-float z-20 hidden sm:flex" style={{ animationDelay: '3s' }}>
                <Sparkles size={18} />
                <span className="text-xs font-black">Promo Hemat! 🔥</span>
              </div>

              <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl blur-sm opacity-30 -rotate-12 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* University Running Text */}
      <div className="mt-16 sm:mt-24 w-full overflow-hidden bg-white/5 backdrop-blur-sm py-6 sm:py-8 border-y border-white/10">
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

      {/* Quick Stats Bar */}
      <div className="mt-0 w-full bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-blue-500/10 backdrop-blur-sm py-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-3 text-white/80">
            <BookOpen className="text-teal-400" size={20} />
            <div>
              <p className="text-lg sm:text-xl font-black">12.000+</p>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Dokumen Dihasilkan</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <StarIcon className="text-teal-400" size={20} fill="currentColor" />
            <div>
              <p className="text-lg sm:text-xl font-black">99.2%</p>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Kepuasan Pengguna</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Users className="text-blue-400" size={20} />
            <div>
              <p className="text-lg sm:text-xl font-black">33.000+</p>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Program Studi</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Shield className="text-blue-400" size={20} />
            <div>
              <p className="text-lg sm:text-xl font-black">24 Jam</p>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Support Responsif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
