import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Clients from '../components/Clients';
import FAQ from '../components/FAQ';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects showViewMore={true} />
      <WhyChooseUs />
      <Process />
      <Clients />
      <FAQ />
      <CtaSection />
    </>
  );
}
