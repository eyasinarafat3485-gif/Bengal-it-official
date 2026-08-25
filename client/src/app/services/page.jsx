import Services from '../../components/Services';
import ServicesSection from '../../components/ServicesSection';
import Process from '../../components/Process';
import CtaSection from '../../components/CtaSection';
import FAQ from '../../components/FAQ';

export const metadata = {
  title: 'Services | Bengal-IT - Enterprise Web Solutions',
  description: 'Explore web development, eCommerce, redesign, and custom software services from Bengal-IT.',
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Services />
      <ServicesSection />
      <Process />
      <FAQ />
      <CtaSection />
    </div>
  );
}
