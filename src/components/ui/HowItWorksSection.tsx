import { useState } from 'react';
import clsx from 'clsx';
import { FileText, Wand2, Save, AlertCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState<'kerangka' | 'generator'>('kerangka');

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Cara Kerja <span className="text-teal-600">Dosbing.ai</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Pilih produk yang kamu butuhkan dan ikuti langkah mudah berikut.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white p-1.5 rounded-full shadow-xl border border-slate-100 inline-flex relative z-10 flex-wrap justify-center max-w-full">
              <button
                onClick={() => setActiveTab('kerangka')}
                className={clsx(
                  "px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-full font-black transition-all duration-300 text-xs sm:text-sm md:text-lg flex items-center gap-2 sm:gap-3 min-h-[44px]",
                  activeTab === 'kerangka' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'
                )}
              >
                <FileText size={20} /> <span>Kerangka Skripsi</span>
              </button>
              <button
                onClick={() => setActiveTab('generator')}
                className={clsx(
                  "px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-full font-black transition-all duration-300 text-xs sm:text-sm md:text-lg flex items-center gap-2 sm:gap-3 min-h-[44px]",
                  activeTab === 'generator' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'
                )}
              >
                <Wand2 size={20} /> <span>Generator Judul</span>
              </button>
            </div>
          </div>

          {/* Content: Kerangka Skripsi */}
          {activeTab === 'kerangka' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-teal-200">1</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Kunjungi Link Pembelian</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Buka browser dan kunjungi <span className="text-teal-600 font-bold">lynk.id/dosbing.ai</span>. Pilih paket yang sesuai dengan kebutuhan kampus dan prodi kamu, lalu selesaikan pembayaran.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-teal-200">2</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Konfirmasi ke Admin</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Kirim screenshot bukti bayar ke WhatsApp Admin di nomor <span className="text-teal-600 font-bold">0821-1187-09218</span>.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-teal-200">3</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Terima Dokumen</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Kamu akan mendapatkan dokumen Kerangka Skripsi (.docx) yang dikirimkan oleh Admin langsung ke WhatsApp kamu.</p>
              </div>
              {/* Step 4 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-teal-200">4</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Mulai Mengerjakan</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Selamat mengerjakan skripsi! Kamu tinggal mengisi konten penelitian pada template yang sudah rapi.</p>
              </div>
            </div>
          )}

          {/* Content: Generator Judul */}
          {activeTab === 'generator' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-blue-200">1</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Beli Paket</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Kunjungi <span className="text-blue-600 font-bold">lynk.id/dosbing.ai</span>, pilih paket yang diinginkan, dan selesaikan pembayaran.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-blue-200">2</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Konfirmasi ke Admin</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Kirim screenshot bukti bayar ke WhatsApp Admin di nomor <span className="text-blue-600 font-bold">0821-1187-09218</span>.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-blue-200">3</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Dapatkan Token</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Admin akan memverifikasi pembayaran dan mengirimkan Kode Akses/Token (16 digit).</p>
              </div>
              {/* Step 4 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 relative z-10 shadow-lg shadow-blue-200">4</div>
                <h4 className="font-heading font-black text-lg text-slate-900 mb-3 relative z-10">Mulai Penelitian</h4>
                <p className="text-slate-500 text-sm font-medium relative z-10 leading-relaxed">Buka situs <span className="text-blue-600 font-bold">app.dosbing.ai</span>, masukkan token yang sudah diterima, lalu klik "Unlock" untuk memulai sesi.</p>
              </div>
            </div>
          )}

          {/* Additional Info for Generator */}
          {activeTab === 'generator' && (
            <div className="mt-8 text-center bg-blue-50/50 p-6 rounded-3xl border border-blue-100 border-dashed animate-in fade-in zoom-in duration-300">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-600 text-sm">
                <p className="font-bold flex items-center"><AlertCircle className="text-blue-500 mr-2" size={16} /> 1 Token = 1 Sesi: Kode akses hanya berlaku untuk satu kali sesi penelitian penuh.</p>
                <span className="hidden md:inline text-slate-300">|</span>
                <p className="font-bold flex items-center"><Save className="text-blue-500 mr-2" size={16} /> Unduh Hasil: Pastikan kamu menyimpan hasil akhir dalam format PDF sebelum menutup browser agar data penelitianmu tidak hilang.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;