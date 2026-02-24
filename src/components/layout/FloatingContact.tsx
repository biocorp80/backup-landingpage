import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  return (
    <a
      href="https://wa.me/6282118709218"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group ios-safe-bottom"
    >
      <div className="absolute -inset-1 bg-green-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transform transition group-hover:scale-110">
        <MessageCircle size={32} fill="white" />
      </div>
      <span className="absolute right-16 top-2 bg-white text-dark text-xs font-bold px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
        Ada kendala? Hubungi Admin
      </span>
    </a>
  );
};

export default FloatingContact;