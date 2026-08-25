'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link href="/" className="logo-wrap">
          <img src="/logo-b-icon.png" alt="BengalIT Logo" className="logo-icon-img" />
          <div className="logo-text-group">
            <span className="logo-text">Bengal<span>IT</span></span>
            <div className="logo-tagline">
              <span className="tagline-line tagline-line-left"></span>
              <span className="tagline-text">Built on Trust. Driven by Growth.</span>
              <span className="tagline-line tagline-line-right"></span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-only">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className="desktop-only">
          <Link href="/contact" className="btn-blue">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-menu">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-cta">
            <Link href="/contact" className="btn-blue" style={{ width: '100%', justifyContent: 'center' }}>
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
