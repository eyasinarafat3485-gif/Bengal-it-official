'use client';

import Process from '../../components/Process';
import CtaSection from '../../components/CtaSection';
import FAQ from '../../components/FAQ';
import CompanyStats from './CompanyStats';
import { ShieldCheck, Cpu, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* Hero Header Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left: Text Details */}
            <div className="about-content-left">
              <span className="section-tag">ABOUT BENGAL-IT</span>
              <h1 className="about-h1">
                Pioneering <span className="highlight-gradient">Digital Transformation</span> from Bangladesh
              </h1>
              <p className="about-desc">
                Bengal-IT is a premier software engineering and cybersecurity agency. We operate at the intersection of enterprise software architecture, machine learning systems, and secure cloud orchestration to build high-performance digital ecosystems.
              </p>
              <p className="about-desc">
                We collaborate with visionary businesses locally and internationally to transition ideas into resilient production-ready software. Guided by standards of absolute confidentiality, agile compliance, and 99.8% system uptime SLAs, we are Bangladesh's leading technology delivery partner.
              </p>
              <div className="about-cta-group" style={{ marginTop: '1.8rem' }}>
                <Link href="/contact" className="btn-blue-hero">
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Core Principles Box */}
            <div className="about-principles-card">
              <h3 className="principles-title">Core Principles</h3>
              <ul className="principles-list">
                <li className="principle-item">
                  <div className="principle-icon-wrap cyan">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="principle-name">High-Performance Engineering</h4>
                    <p className="principle-desc">We write clean, test-covered, and decoupled code optimized for load capabilities.</p>
                  </div>
                </li>
                <li className="principle-item">
                  <div className="principle-icon-wrap gold">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="principle-name">Zero-Trust Operations</h4>
                    <p className="principle-desc">Security is integrated from line one. We protect database assets and identity pathways.</p>
                  </div>
                </li>
                <li className="principle-item">
                  <div className="principle-icon-wrap blue">
                    <Headphones size={18} />
                  </div>
                  <div>
                    <h4 className="principle-name">24/7 SLA Responsiveness</h4>
                    <p className="principle-desc">Our monitoring engines keep track of error logs and system resources round the clock.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Model / Workflow Timeline */}
      <Process />

      {/* Company Growth & Performance Chart */}
      <CompanyStats />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
