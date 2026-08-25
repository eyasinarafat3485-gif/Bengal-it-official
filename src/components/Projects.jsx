import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Restaurant Website',
    category: 'Business Website',
    headerBg: 'linear-gradient(135deg, #1e1b18 0%, #3a2e2b 100%)',
    badge: 'Fine Dining & Grill',
    accentColor: '#f59e0b',
  },
  {
    title: 'Dental Clinic Website',
    category: 'Business Website',
    headerBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    badge: 'Medical Care',
    accentColor: '#0284c7',
  },
  {
    title: 'Fashion eCommerce Store',
    category: 'eCommerce Website',
    headerBg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
    badge: 'Apparel & Shoes',
    accentColor: '#0f172a',
  },
  {
    title: 'Digital Agency Website',
    category: 'Business Website',
    headerBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    badge: 'Digital Agency',
    accentColor: '#818cf8',
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">OUR WORK</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-desc">
            Explore some of our recent projects and digital solutions. Each project is built around the goals and vision of the business.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-holder" style={{ background: project.headerBg, padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', fontWeight: 600 }}>
                    {project.badge}
                  </span>
                  <ExternalLink size={14} style={{ opacity: 0.8 }} />
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: project.title.includes('Dental') || project.title.includes('Fashion') ? '#0f172a' : '#ffffff' }}>
                    {project.title}
                  </h4>
                  <div style={{ height: 3, width: 28, background: project.accentColor, borderRadius: 2, marginTop: 6 }} />
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-outline" style={{ display: 'inline-flex' }}>
            View More Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
