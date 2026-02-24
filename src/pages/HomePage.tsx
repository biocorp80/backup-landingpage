import AnnouncementBar from '../components/ui/AnnouncementBar';
import HeroSection from '../components/ui/HeroSection';
import TrustSection from '../components/ui/StatsSection';
import WhyChooseUsSection from '../components/ui/WhyChooseUsSection';
import ProblemSolutionSection from '../components/ui/ProblemSolutionSection';
import AcademicPillarsSection from '../components/ui/AcademicPillarsSection';
import ProductShowcaseSection from '../components/ui/ProductShowcaseSection';
import PricingSection from '../components/ui/PricingSection';
import TestimonialSection from '../components/ui/TestimonialSection';

import HowItWorksSection from '../components/ui/HowItWorksSection';
import FAQSection from '../components/ui/FAQSection';
import ContactSection from '../components/ui/ContactSection';
import LatestBlogSection from '../components/ui/LatestBlogSection';

const HomePage = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <TrustSection />
      <WhyChooseUsSection />
      <ProblemSolutionSection />
      <AcademicPillarsSection />
      <ProductShowcaseSection />
      <PricingSection />
      <TestimonialSection />

      <HowItWorksSection />
      <LatestBlogSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;