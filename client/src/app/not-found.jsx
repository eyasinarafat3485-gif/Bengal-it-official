import Link from 'next/link';
import { Home, Briefcase, FolderKanban, PhoneCall, HelpCircle, Sparkles } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Bengal-IT',
  description: 'The page you are looking for does not exist on Bengal-IT.',
};

export default function NotFound() {
  return (
    <section className="not-found-wrapper">
      <div className="container">
        <div className="not-found-card">
          {/* Background Decorative Glow */}
          <div className="not-found-glow" />

          {/* 404 Badge */}
          <div className="not-found-badge">
            <span className="not-found-badge-dot" />
            <span>ERROR 404</span>
          </div>

          {/* Animated 404 Number */}
          <div className="not-found-hero-code">
            4<span className="zero-glow">0</span>4
          </div>

          <h1 className="not-found-title">
            Oops! Page Not Found
          </h1>
          <p className="not-found-subtitle">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Primary Action Buttons */}
          <div className="not-found-cta-group">
            <Link href="/" className="btn-blue btn-lg">
              <Home size={18} />
              Return to Homepage
            </Link>
            <Link href="/contact" className="btn-outline-blue btn-lg">
              <PhoneCall size={18} />
              Contact Support
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="not-found-quicklinks">
            <h3 className="quicklinks-title">
              <Sparkles size={16} style={{ color: 'var(--primary-blue)' }} />
              Or explore our popular sections:
            </h3>

            <div className="quicklinks-grid">
              <Link href="/services" className="quicklink-card">
                <div className="quicklink-icon-box blue">
                  <Briefcase size={20} />
                </div>
                <div className="quicklink-content">
                  <h4>Our Services</h4>
                  <p>Custom Web & Software Development Solutions</p>
                </div>
              </Link>

              <Link href="/portfolio" className="quicklink-card">
                <div className="quicklink-icon-box cyan">
                  <FolderKanban size={20} />
                </div>
                <div className="quicklink-content">
                  <h4>Recent Projects</h4>
                  <p>Explore our latest client work & case studies</p>
                </div>
              </Link>

              <Link href="/about-us" className="quicklink-card">
                <div className="quicklink-icon-box gold">
                  <HelpCircle size={20} />
                </div>
                <div className="quicklink-content">
                  <h4>About Bengal-IT</h4>
                  <p>Learn about our mission, vision & dedicated team</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
