import Projects from '../../components/Projects';
import Clients from '../../components/Clients';
import CtaSection from '../../components/CtaSection';

export const metadata = {
  title: 'Portfolio & Projects | Bengal-IT',
  description: 'Explore our selected projects, case studies, and client work at Bengal-IT.',
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <Projects />
      <Clients />
      <CtaSection />
    </div>
  );
}
