import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import AudioPlayer from './AudioPlayer';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    // Handle initial scroll or hash scroll
    if (location.hash) {
      // Use setTimeout to allow content to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <AudioPlayer />
    </div>
  );
};

export default Layout;