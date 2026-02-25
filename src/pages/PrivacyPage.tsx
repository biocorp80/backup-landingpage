import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="pt-20">
      {/* PRIVACY POLICY CONTENT */}
      <section className="relative py-16 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-slate-100" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center uppercase border-b pb-6 border-slate-100">
              Kebijakan Privasi <br />
              <span className="text-primary">Dosbing.ai</span>
            </h1>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Kebijakan Privasi ini menjelaskan bagaimana Dosbing.ai (sebagai bagian dari Bio Corp) mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
            </p>

            <div className="space-y-8">
              {/* 1. Informasi yang Kami Kumpulkan */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Informasi yang Kami Kumpulkan</h3>
                <p className="text-slate-600 mb-2">Kami mengumpulkan informasi yang diperlukan untuk personalisasi bimbingan dan pengiriman produk digital:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Data Identitas:</strong> Nama lengkap, Gender, dan Nomor Induk Mahasiswa (NIM).</li>
                  <li><strong>Data Akademik:</strong> Nama perguruan tinggi, fakultas, program studi/jurusan, minat penelitian, dan metode penelitian (Kuantitatif, Kualitatif, R&D, atau Mixed Method).</li>
                  <li><strong>Data Transaksi:</strong> Bukti pembayaran (screenshot transfer/e-wallet) yang dikirimkan melalui WhatsApp Admin.</li>
                  <li><strong>Konten Penelitian:</strong> Objek penelitian, masalah penelitian, dan draf judul yang Anda masukkan ke dalam sistem kami.</li>
                </ul>
              </div>

              {/* 2. Penggunaan Informasi */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Penggunaan Informasi</h3>
                <p className="text-slate-600 mb-2">Informasi yang Anda berikan digunakan secara eksklusif untuk:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li>Menghasilkan rekomendasi judul skripsi dan telaah akademik yang akurat melalui AI.</li>
                  <li>Menyesuaikan template Kerangka Skripsi agar sesuai dengan logo dan pedoman kampus masing-masing berdasarkan database PDDikti.</li>
                  <li>Proses verifikasi pembayaran dan pengiriman file produk digital melalui WhatsApp.</li>
                  <li>Memberikan dukungan bantuan teknis melalui Admin WhatsApp.</li>
                </ul>
              </div>

              {/* 3. Kerahasiaan Data Akademik */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Kerahasiaan Data Akademik</h3>
                <p className="text-slate-600 mb-2">Dosbing.ai memahami pentingnya orisinalitas dalam skripsi:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Hak Milik:</strong> Seluruh hasil output dari Generator Judul dan Kerangka Skripsi sepenuhnya merupakan hak pakai pribadi Anda sebagai pembeli.</li>
                  <li><strong>Keamanan File:</strong> File PDF hasil generator hanya dapat diakses selama sesi berlangsung dan tidak disimpan secara permanen di server publik kami.</li>
                  <li><strong>Anti-Plagiasi:</strong> Kami membantu meminimalkan risiko revisi format dan plagiarisme, namun orisinalitas konten akhir tetap menjadi tanggung jawab mahasiswa.</li>
                </ul>
              </div>

              {/* 4. Berbagi Informasi dengan Pihak Ketiga */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Berbagi Informasi dengan Pihak Ketiga</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kami tidak akan menjual, menyewakan, atau memberikan informasi pribadi Anda kepada pihak ketiga untuk kepentingan komersial di luar ekosistem Bio Corp. Informasi hanya dibagikan secara terbatas jika diperlukan untuk proses pembayaran melalui platform pihak ketiga (seperti Lynk.id).
                </p>
              </div>

              {/* 5. Penyimpanan Data */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Penyimpanan Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li>Kode akses (token) bersifat sekali pakai dan akan hangus setelah sesi digunakan.</li>
                  <li>Data identitas yang dikirimkan ke WhatsApp Admin disimpan untuk keperluan garansi penggantian file jika template tidak sesuai.</li>
                </ul>
              </div>

              {/* 6. Kontak Kami */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Kontak Kami</h3>
                <p className="text-slate-600 mb-2">Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Email:</strong> dosbingai@gmail.com</li>
                  <li><strong>WhatsApp Admin:</strong> 0821-1870-9218</li>
                  <li><strong>Kantor Pusat:</strong> Cipinang, Cimaung, Kabupaten Bandung, Jawa Barat 40374</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
