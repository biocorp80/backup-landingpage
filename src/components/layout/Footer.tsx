import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 md:pt-32 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight" data-aos="fade-up">
            Siap Kelar Skripsi? <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 underline decoration-teal-500/30">Mulai Sekarang!</span> 🚀
          </h2>
          <a
            href="https://wa.me/628567890596"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-12 py-6 rounded-3xl font-black text-xl shadow-xl hover:from-blue-600 hover:to-teal-600 transition-all transform hover:-translate-y-2 active:scale-95"
            data-aos="zoom-in"
          >
            Chat Admin Sekarang
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.png" alt="Dosbing.ai Footer Logo" className="h-10 w-auto" />
              <span className="font-heading font-black text-3xl text-white">Dosbing.ai</span>
            </div>
            <p className="text-slate-400 font-medium max-w-sm leading-relaxed mb-6">
              Teman Bimbingan Cerdas yang siap membantumu kapan saja, di mana saja. Fokus kami adalah membantumu lulus dengan kualitas akademik terbaik. 🤲
            </p>
          </div>
          <div>
            <h5 className="text-sm font-black uppercase tracking-widest text-teal-400 mb-8">Informasi</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/about" className="hover:text-white transition">Tentang Kami</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><a href="#contact" className="hover:text-white transition">Hubungi Kami</a></li>
              <li><Link to="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-black uppercase tracking-widest text-teal-400 mb-8">Kontak Kami</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex items-center gap-3"><Mail className="text-blue-400 w-4 h-4" /> dosbingai@gmail.com</li>
              <li className="flex items-start gap-3 leading-relaxed"><MapPin className="text-blue-400 w-4 h-4 mt-1" /> Cipinang, Cimaung, Kab. Bandung, Jawa Barat</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">© 2026 Dosbing.ai. Member Of Bio Corp.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="https://www.instagram.com/dosbing.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            {/* Tiktok Icon fallback since Lucide might not have it or it's named differently */}
            <a href="https://www.tiktok.com/@dosbing.ai?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;