import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <span className="section-tag">LET'S WORK TOGETHER</span>
            <h2 className="cta-title">Have a Project in Mind?</h2>
            <p className="cta-desc">
              Tell us about your project, business or website requirements. We'll review your needs and discuss the best approach for your website.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="cta-actions">
              <Link href="/contact" className="btn-blue">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Our Services <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Floating Message Graphics */}
            <div style={{ display: 'flex', gap: '0.5rem', background: '#ffffff', padding: '1.2rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(37,99,235,0.1)' }}>
              <div style={{ background: '#eff6ff', padding: '0.8rem', borderRadius: '12px', color: '#2563eb' }}>
                <Mail size={32} />
              </div>
              <div style={{ background: '#2563eb', padding: '0.8rem', borderRadius: '12px', color: '#ffffff' }}>
                <MessageCircle size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
