const AnnouncementBar = () => {
  return (
    <div className="w-full bg-dark text-white py-2 overflow-hidden mt-[60px] sm:mt-16 relative z-30">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-10 px-10">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-accent">🔥 PROMO TERBATAS:</span> DISKON 60% UNTUK GENERATOR JUDUL HINGGA AKHIR BULAN INI! 🚀
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">💡 TIPS:</span> AJUKAN JUDUL SEKARANG SEBELUM KUOTA BIMBINGAN DOSENMU PENUH! 🎓
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-accent">🔥 PROMO TERBATAS:</span> DISKON 60% UNTUK GENERATOR JUDUL HINGGA AKHIR BULAN INI! 🚀
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">💡 TIPS:</span> AJUKAN JUDUL SEKARANG SEBELUM KUOTA BIMBINGAN DOSENMU PENUH! 🎓
          </p>
        </div>
        {/* Duplicate content for seamless loop if needed, but CSS marquee handles it usually. 
            However, the original HTML had duplicate content inside the flex container.
            Let's replicate that structure.
        */}
         <div className="flex items-center gap-10 px-10">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-accent">🔥 PROMO TERBATAS:</span> DISKON 60% UNTUK GENERATOR JUDUL HINGGA AKHIR BULAN INI! 🚀
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">💡 TIPS:</span> AJUKAN JUDUL SEKARANG SEBELUM KUOTA BIMBINGAN DOSENMU PENUH! 🎓
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-accent">🔥 PROMO TERBATAS:</span> DISKON 60% UNTUK GENERATOR JUDUL HINGGA AKHIR BULAN INI! 🚀
          </p>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">💡 TIPS:</span> AJUKAN JUDUL SEKARANG SEBELUM KUOTA BIMBINGAN DOSENMU PENUH! 🎓
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;