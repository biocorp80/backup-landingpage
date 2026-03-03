import { MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Hubungi Kami</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
            Butuh bantuan skripsi? Tim support kami siap membantu kamu kapan saja. 💬
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-6" data-aos="fade-right">
            {/* WhatsApp Card */}
            <a href="https://wa.me/628567890596" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 text-3xl shadow-inner group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">WhatsApp Admin</h4>
                <p className="text-slate-500 text-sm font-medium mb-1">Respon Cepat (09:00 - 21:00 WIB)</p>
                <p className="text-teal-600 font-bold text-lg group-hover:underline">+62 856-7890-596</p>
              </div>
            </a>

            {/* Email Card */}
            <a href="mailto:dosbingai@gmail.com" className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl shadow-inner group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Email Support</h4>
                <p className="text-slate-500 text-sm font-medium mb-1">Untuk Kerjasama & Pertanyaan Umum</p>
                <p className="text-blue-600 font-bold text-lg group-hover:underline">dosbingai@gmail.com</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-lg group">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-3xl shadow-inner">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Kantor Pusat</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Cipinang, Cimaung, Kabupaten Bandung,<br />Jawa Barat 40374</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-100 shadow-xl min-h-[300px] sm:min-h-[400px] aspect-square sm:aspect-auto" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.957596286782!2d107.54585637499736!3d-7.014316992987154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb63a016624d%3A0xc3952f08687719f9!2sCipinang%2C%20Cimaung%2C%20Bandung%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1708683451234!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem', minHeight: '300px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;