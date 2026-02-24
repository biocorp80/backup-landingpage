const StatsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 text-center stats-grid">
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2">12k+</div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dokumen Dihasilkan</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-2">99.2%</div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kepuasan Pengguna</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2">6k+</div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kampus Terdaftar</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-2">24h</div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dukungan Responsif</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;