import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, Smartphone, Zap, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Column Text */}
        <div className="hero-content-left">
          <h1 className="hero-h1">
            Build a Website That Moves Your <br />
            <span className="highlight">Business Forward</span>
          </h1>

          <p className="hero-subtext">
            Modern websites built for businesses that want to grow online.
          </p>

          <p className="hero-desc">
            BengaliIT designs and develops fast, professional, and user-friendly websites tailored to your business goals.
          </p>

          <div className="hero-cta-group">
            <Link href="/contact" className="btn-blue-hero">
              Start Your Project <span className="arrow-circle"><ArrowRight size={14} /></span>
            </Link>
            <Link href="/portfolio" className="btn-light-hero">
              View Our Work <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* 4 Feature Pill Cards */}
          <div className="hero-pills">
            <div className="pill-badge">
              <Sparkles size={14} className="pill-icon" /> <span>Modern Design</span>
            </div>
            <div className="pill-badge">
              <Smartphone size={14} className="pill-icon" /> <span>Mobile Friendly</span>
            </div>
            <div className="pill-badge">
              <Zap size={14} className="pill-icon" /> <span>Fast & Optimized</span>
            </div>
            <div className="pill-badge">
              <ShieldCheck size={14} className="pill-icon" /> <span>Ongoing Support</span>
            </div>
          </div>
        </div>

        {/* Right Column 4K HD Mockup Image */}
        <div className="hero-mockup-wrap">
          <img
            src="/hero-mockup.png"
            alt="BengalIT Creative Solutions Website Mockup"
            className="hero-banner-img"
          />
        </div>
      </div>
    </section>
  );
}
