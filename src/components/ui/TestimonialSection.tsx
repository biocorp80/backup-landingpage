import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, MessageCircle } from 'lucide-react';

const testimonials = [
    {
        nama: "Aisyah Putri R.",
        kampus: "Universitas Indonesia",
        jurusan: "Manajemen 2022",
        avatar: "AP",
        rating: 5,
        teks: "Awalnya skeptis, tapi setelah coba Generator Judul, langsung dapet 3 opsi judul yang relevan banget sama topik saya. Dosen pembimbing langsung ACC judul pertama! Hemat waktu berminggu-minggu. 🤲",
        highlight: "Dosen langsung ACC judul pertama!",
        produk: "Generator Judul",
    },
    {
        nama: "Muhammad Rizki F.",
        kampus: "ITB Bandung",
        jurusan: "Teknik Informatika 2021",
        avatar: "MR",
        rating: 5,
        teks: "Template kerangka skripsinya rapi banget, udah sesuai format kampus saya. Tinggal isi konten aja, ga perlu pusing format margin, spasi, daftar isi. Worth it banget cuma 10rb!",
        highlight: "Tinggal isi konten, ga pusing format!",
        produk: "Kerangka Skripsi",
    },
    {
        nama: "Fatimah Zahra",
        kampus: "UGM Yogyakarta",
        jurusan: "Psikologi 2022",
        avatar: "FZ",
        rating: 5,
        teks: "Waktu lagi buntu ide, coba Dosbing.ai. Analisis 4 pilarnya bikin saya paham kenapa judul saya layak diteliti. Alhamdulillah sekarang tinggal sidang! 🎓",
        highlight: "Alhamdulillah tinggal sidang!",
        produk: "Generator Judul",
    },
    {
        nama: "Ahmad Fadlan",
        kampus: "UNPAD Bandung",
        jurusan: "Akuntansi 2021",
        avatar: "AF",
        rating: 5,
        teks: "Beli bundling Parsel Skripsi (Judul + Kerangka) harga promo 25rb. Jauh lebih murah dari jasa bikin skripsi yang ratusan ribu. Dan ini legal, etis, tinggal kembangkan sendiri. Top! 💯",
        highlight: "Legal, etis, tinggal kembangkan sendiri!",
        produk: "Parsel Skripsi",
    },
    {
        nama: "Siti Nurhaliza",
        kampus: "ITS Surabaya",
        jurusan: "Teknik Sipil 2022",
        avatar: "SN",
        rating: 5,
        teks: "Output PDF-nya lengkap: ada matriks variabel, hipotesis, bahkan draft kuesioner. Dosen saya sampai bilang, 'Kamu serius banget ya persiapannya.' Padahal prosesnya cuma 15 menit. 😂",
        highlight: "Dosen bilang: 'Serius banget persiapannya!'",
        produk: "Generator Judul",
    },
    {
        nama: "Budi Santoso",
        kampus: "UNDIP Semarang",
        jurusan: "Hukum 2021",
        avatar: "BS",
        rating: 4,
        teks: "Awalnya cuma mau coba, eh ternyata judul yang di-generate relevan dan ada analisis mendalam. Saya pakai opsi ke-2 dan langsung disetujui dosen. Recommended buat teman-teman hukum!",
        highlight: "Judul langsung disetujui dosen!",
        produk: "Generator Judul",
    },
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    useEffect(() => {
        if (!isAutoplay) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoplay]);

    const goTo = (index: number) => {
        setActiveIndex(index);
        setIsAutoplay(false);
        setTimeout(() => setIsAutoplay(true), 10000);
    };

    const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((activeIndex + 1) % testimonials.length);

    const current = testimonials[activeIndex];

    return (
        <section className="py-16 md:py-28 bg-slate-950 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold mb-6">
                        <MessageCircle size={16} /> Cerita Mereka
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Mahasiswa</span> yang Sudah Pakai
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                        Bergabung dengan ribuan mahasiswa yang sudah terbantu menyelesaikan skripsi mereka.
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 sm:p-12 transition-all duration-500">
                        {/* Quote icon */}
                        <div className="absolute top-6 right-8 text-blue-400/10">
                            <Quote size={80} />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className={i < current.rating ? 'text-teal-400' : 'text-white/10'}
                                    fill={i < current.rating ? 'currentColor' : 'none'}
                                />
                            ))}
                        </div>

                        {/* Highlight quote */}
                        <p className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 mb-6 leading-snug">
                            "{current.highlight}"
                        </p>

                        {/* Full testimonial */}
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                            {current.teks}
                        </p>

                        {/* User info */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-lg font-black shadow-lg">
                                    {current.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm sm:text-base">{current.nama}</p>
                                    <div className="flex items-center gap-2 text-white/40 text-xs">
                                        <GraduationCap size={12} />
                                        <span>{current.kampus} • {current.jurusan}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-[10px] font-bold uppercase tracking-wider">
                                ✅ Pengguna {current.produk}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <button onClick={prev} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition">
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-gradient-to-r from-blue-400 to-teal-400 w-8' : 'bg-white/20 w-2 hover:bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                    <button onClick={next} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition">
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Stats summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    {[
                        { angka: '2.500+', label: 'Pengguna Aktif', color: 'text-blue-400' },
                        { angka: '4.9/5', label: 'Rating Kepuasan', color: 'text-teal-400' },
                        { angka: '98%', label: 'Judul Disetujui', color: 'text-blue-400' },
                        { angka: '<15 min', label: 'Waktu Proses', color: 'text-teal-400' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                            <p className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.angka}</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
