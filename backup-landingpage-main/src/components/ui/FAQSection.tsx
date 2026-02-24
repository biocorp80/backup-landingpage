import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah format Kerangka Skripsi pasti sesuai dengan kampus saya?",
      answer: "Ya! Database kami mencakup 6.632 Perguruan Tinggi dan 33.000+ Program Studi di Indonesia sesuai data PDDikti. Template yang kamu terima sudah termasuk logo kampus, margin, spasi, hingga daftar isi otomatis yang disesuaikan dengan pedoman umum kampusmu."
    },
    {
      question: "Bagaimana cara menggunakan Kode Akses untuk Generator Judul?",
      answer: "Setelah melakukan pembayaran ke Admin WA, kamu akan menerima 16 karakter kode unik. Buka aplikasi di app.dosbing.ai, masukkan kode tersebut, dan kamu bisa langsung memulai sesi pencarian judul hingga selesai."
    },
    {
      question: "Apakah satu Kode Akses bisa digunakan berkali-kali?",
      answer: "Tidak. Satu kode akses bersifat single-use (sekali pakai) untuk satu sesi pembuatan judul hingga menghasilkan PDF. Jika ingin membuat judul untuk topik yang berbeda, kamu perlu membeli kode akses baru."
    },
    {
      question: "Berapa lama proses pengiriman file Kerangka Skripsi?",
      answer: "Setelah kamu mengirimkan bukti bayar dan data diri (Nama, NIM, Kampus, Prodi) ke WhatsApp Admin, file .docx akan dikirimkan maksimal 1x24 jam kerja. Namun, biasanya admin akan mengirimkannya jauh lebih cepat dari itu."
    },
    {
      question: "Apakah judul yang dihasilkan AI sudah pasti di-ACC dosen?",
      answer: "Keputusan akhir tetap ada pada dosen pembimbing. Namun, judul dari Dosbing.ai sudah dilengkapi dengan Telaah Akademik 4 Pilar (Urgensi, Kebaruan, Kesesuaian, Kelayakan) yang kuat, sehingga kamu punya alasan ilmiah yang solid saat berargumen dengan dosen."
    },
    {
      question: "File apa yang akan saya dapatkan nantinya?",
      answer: "Untuk Generator Judul, kamu akan mendapatkan file PDF super lengkap berisi Telaah Akademik 4 Pilar (Skor Validasi, Justifikasi, Argumentasi), rekomendasi judul, kerangka penelitian, hingga draf kuesioner. Untuk Kerangka Skripsi, kamu akan mendapatkan file Microsoft Word (.docx) yang siap kamu isi."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Sangat aman. Kami sangat menjaga privasi data akademik mahasiswa. Pembayaran pun dilakukan melalui platform resmi atau transfer yang terverifikasi."
    },
    {
      question: "Bagaimana jika kampus atau prodi saya tidak ditemukan di database?",
      answer: "Tenang, jangan khawatir! Segera hubungi Admin via WhatsApp. Tim kami akan melakukan pengecekan manual dan jika memungkinkan, kami akan membuatkan template khusus untukmu tanpa biaya tambahan."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-widest">Pusat Bantuan</h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 shadow-sm" 
              data-aos="fade-up"
            >
              <button 
                onClick={() => toggle(index)} 
                className="w-full flex justify-between items-center p-8 text-left focus:outline-none bg-white font-bold"
              >
                <span className="text-slate-900 text-base md:text-lg pr-4">{faq.question}</span>
                <div 
                  className={clsx(
                    "w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary transition-transform duration-500 flex-shrink-0",
                    active === index && "rotate-180 bg-primary text-white"
                  )}
                >
                  <ChevronDown size={16} />
                </div>
              </button>
              <div 
                className={clsx(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  active === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-8 pt-0 text-slate-500 leading-relaxed font-medium bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;