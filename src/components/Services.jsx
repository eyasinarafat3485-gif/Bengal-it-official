import Link from 'next/link';
import { Monitor, ShoppingCart, Target, Brush, Settings, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    icon: Monitor,
    title: 'Business Website Development',
    text: 'Professional websites that represent your business, services, and brand online.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Website Development',
    text: 'Complete online stores with product management, payment integration and smooth shopping experience.',
  },
  {
    icon: Target,
    title: 'Landing Page Development',
    text: 'High-converting landing pages for campaigns, products and lead generation.',
  },
  {
    icon: Brush,
    title: 'Website Redesign',
    text: 'Modernize your outdated website with improved design and better user experience.',
  },
  {
    icon: Settings,
    title: 'Website Maintenance',
    text: 'Ongoing updates, security, backups and technical support to keep your website running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="section-title">Web Solutions That Help Your Business Grow</h2>
          <p className="section-desc">
            We create websites that are not only beautiful but also functional, fast, and built around your business goals.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div>
                  <div className="service-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.text}</p>
                </div>

                <div>
                  <Link href="/contact" className="service-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
