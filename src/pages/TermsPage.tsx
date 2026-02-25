import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="pt-20">
      {/* TERMS CONTENT */}
      <section className="relative py-16 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-slate-100" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center uppercase border-b pb-6 border-slate-100">
              Syarat dan Ketentuan <br />
              <span className="text-primary">Penggunaan Dosbing.ai</span>
            </h1>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Selamat datang di Dosbing.ai. Dengan mengakses atau membeli produk kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan di bawah ini:
            </p>

            <div className="space-y-8">
              {/* 1. Definisi Produk */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Definisi Produk</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Generator Judul Skripsi:</strong> Sub-produk dalam ekosistem Dosbing.ai yang memberikan rekomendasi judul dan telaah akademik dalam format PDF.</li>
                  <li><strong>Kerangka Skripsi:</strong> Produk digital berupa template dokumen Microsoft Word (.docx) yang telah dikonfigurasi sesuai format perguruan tinggi di Indonesia.</li>
                  <li><strong>Akses:</strong> Kode unik (token) atau file digital yang diberikan setelah pembayaran dikonfirmasi.</li>
                </ul>
              </div>

              {/* 2. Ketentuan Pembelian dan Pembayaran */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Ketentuan Pembelian dan Pembayaran</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Harga Promo:</strong>
                    <ul className="list-[circle] pl-6 mt-2 space-y-1">
                      <li>Generator Judul Skripsi: Rp20.000 (dari harga normal Rp50.000).</li>
                      <li>Kerangka Skripsi: Rp10.000 (dari harga normal Rp35.000).</li>
                    </ul>
                  </li>
                  <li><strong>Metode Pembayaran:</strong> Melalui transfer bank, e-wallet (GoPay, OVO, DANA, ShopeePay), atau QRIS melalui platform yang ditunjuk.</li>
                  <li><strong>Bukti Bayar:</strong> Pengguna wajib mengirimkan bukti pembayaran yang sah ke WhatsApp Admin untuk mendapatkan produk atau kode akses.</li>
                </ul>
              </div>

              {/* 3. Hak Penggunaan (Lisensi) */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Hak Penggunaan (Lisensi)</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Lisensi Pribadi:</strong> Produk yang dibeli hanya diperuntukkan bagi penggunaan pribadi mahasiswa yang bersangkutan.</li>
                  <li><strong>Larangan Penggandaan:</strong> Dilarang keras membagikan, menjual kembali (reseller), atau mendistribusikan file tanpa izin tertulis dari Dosbing.ai.</li>
                  <li><strong>Kode Sekali Pakai:</strong> Kode akses untuk Generator Judul bersifat sekali pakai. Sesi dianggap berakhir setelah PDF diunduh atau browser ditutup.</li>
                </ul>
              </div>

              {/* 4. Kebijakan Pembatalan dan Garansi */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Kebijakan Pembatalan dan Garansi</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>Tanpa Pengembalian Dana:</strong> Karena sifat produk adalah digital, tidak ada pengembalian dana setelah file dikirim atau kode akses diberikan.</li>
                  <li><strong>Garansi Kesesuaian:</strong> Kami memberikan garansi penggantian file jika template Kerangka Skripsi yang diterima tidak sesuai dengan kampus atau prodi yang dipesan.</li>
                  <li><strong>Tanggung Jawab Akademik:</strong> Dosbing.ai adalah asisten riset. Keputusan akhir mengenai persetujuan judul dan isi skripsi sepenuhnya merupakan wewenang Dosen Pembimbing masing-masing.</li>
                </ul>
              </div>

              {/* 5. Batasan Tanggung Jawab */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Batasan Tanggung Jawab</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li>Dosbing.ai tidak bertanggung jawab atas kegagalan teknis pada perangkat pengguna (seperti masalah browser atau ketiadaan aplikasi Microsoft Word).</li>
                  <li>Pengguna bertanggung jawab penuh atas kebenaran data identitas (Nama, NIM, Prodi) yang dimasukkan ke dalam sistem atau dikirimkan ke Admin.</li>
                </ul>
              </div>

              {/* 6. Kontak dan Bantuan */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Kontak dan Bantuan</h3>
                <p className="text-slate-600 leading-relaxed mb-2">Segala bentuk kendala teknis atau pertanyaan lebih lanjut dapat disampaikan melalui:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                  <li><strong>WhatsApp Admin:</strong> 0821-1870-9218.</li>
                  <li><strong>Waktu Operasional:</strong> Pengiriman file diproses maksimal 1x24 jam kerja setelah konfirmasi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
