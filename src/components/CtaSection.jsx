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

          <div className="cta-right-group">
            <div className="cta-actions">
              <Link href="/contact" className="btn-blue">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Our Services <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Floating Message Graphics */}
            <div className="cta-graphic-box">
              <div className="cta-icon-pill light">
                <Mail size={24} />
              </div>
              <div className="cta-icon-pill blue">
                <MessageCircle size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
