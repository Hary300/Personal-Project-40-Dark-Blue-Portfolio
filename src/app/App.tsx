import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import TrustedSection from '@/sections/02-trusted';
import AboutSection from '@/sections/03-about';
import HowWeWorkSection from '@/sections/04-howWeWork';
import ServiceSection from '@/sections/05-service';
import IndustrySection from '@/sections/06-industry';
import ProjectSection from '@/sections/07-project';
import TestimonialsSection from '@/sections/08-testimonials';
import FaqSection from '@/sections/09-faq';
import ContactSection from '@/sections/10-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <TrustedSection />
      <AboutSection />
      <HowWeWorkSection />
      <ServiceSection />
      <IndustrySection />
      <ProjectSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
