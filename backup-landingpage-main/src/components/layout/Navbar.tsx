import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHomePage) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const NavLink = ({ to, label, isScrollLink = false }: { to: string; label: string; isScrollLink?: boolean }) => {
    if (isScrollLink && isHomePage) {
      return (
        <button
          onClick={() => scrollToSection(to.replace('#', ''))}
          className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
        >
          {label}
        </button>
      );
    }
    
    // If not on homepage and it's a scroll link, redirect to homepage with hash
    if (isScrollLink && !isHomePage) {
      return (
        <Link
          to={`/${to}`}
          className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
        >
          {label}
        </Link>
      );
    }

    return (
      <Link to={to} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
        {label}
      </Link>
    );
  };

  const MobileNavLink = ({ to, label, isScrollLink = false }: { to: string; label: string; isScrollLink?: boolean }) => {
    if (isScrollLink && isHomePage) {
      return (
        <button
          onClick={() => scrollToSection(to.replace('#', ''))}
          className="text-sm font-bold text-slate-600 hover:text-primary py-2 border-b border-slate-100 text-left w-full"
        >
          {label}
        </button>
      );
    }

    if (isScrollLink && !isHomePage) {
       return (
        <Link
          to={`/${to}`}
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm font-bold text-slate-600 hover:text-primary py-2 border-b border-slate-100 text-left w-full"
        >
          {label}
        </Link>
      );
    }

    return (
      <Link
        to={to}
        onClick={() => setMobileMenuOpen(false)}
        className="text-sm font-bold text-slate-600 hover:text-primary py-2 border-b border-slate-100 text-left w-full"
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className={clsx('fixed w-full z-40 transition-all top-0 py-3', scrolled ? 'glass-navbar' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group transition-all">
          <img src="/logo.png" alt="Dosbing.ai Logo" className="h-8 w-auto max-w-[100px] md:h-10 object-contain shrink-0" />
          <span className="font-heading font-black text-2xl md:text-3xl tracking-tight leading-none">
            <span className="text-primary">Dosbing</span>
            <span className="text-secondary">.ai</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="#pricing" label="Produk" isScrollLink />
          <NavLink to="#how-it-works" label="Cara Kerja" isScrollLink />
          <NavLink to="#faq" label="FAQ" isScrollLink />
          <NavLink to="/about" label="Tentang Kami" />
          <a
            href="https://wa.me/6285678890596"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
          >
            Konsultasi Produk Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-900 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2">
          <MobileNavLink to="#pricing" label="Produk" isScrollLink />
          <MobileNavLink to="#how-it-works" label="Cara Kerja" isScrollLink />
          <MobileNavLink to="#faq" label="FAQ" isScrollLink />
          <MobileNavLink to="/about" label="Tentang Kami" />
          <a
            href="https://wa.me/6285678890596"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-primary transition-all shadow-lg"
          >
            Konsultasi Produk Gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;