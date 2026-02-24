import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import AudioPlayer from './AudioPlayer';
import { useVisitorStore } from '../../store/visitorStore';
import { useSiteContentStore } from '../../store/siteContentStore';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {
  const location = useLocation();
  const trackVisit = useVisitorStore((s) => s.trackVisit);
  const seo = useSiteContentStore((s) => s.content.seo);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  // Track visitor on route change
  useEffect(() => {
    trackVisit(location.pathname + location.hash);
  }, [location.pathname, location.hash, trackVisit]);

  // Dynamic SEO meta tags
  useEffect(() => {
    // Set page title if on homepage
    if (location.pathname === '/' && seo.siteTitle) {
      document.title = seo.siteTitle;
    }

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (location.pathname === '/') metaDesc.setAttribute('content', seo.siteDescription);

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords);

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', seo.robots);

    // OG tags
    const ogTags: [string, string][] = [
      ['og:title', seo.siteTitle],
      ['og:description', seo.siteDescription],
      ['og:image', seo.ogImage],
      ['og:type', 'website'],
    ];
    ogTags.forEach(([prop, val]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    });
  }, [location.pathname, seo]);

  useEffect(() => {
    // Handle initial scroll or hash scroll
    if (location.hash) {
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
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      <AudioPlayer />
    </div>
  );
};

export default Layout;