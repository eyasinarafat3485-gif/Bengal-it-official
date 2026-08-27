import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const defaultMsg = "Hello Bengal-IT, I would like to inquire about your services.";
  const encodedMsg = encodeURIComponent(defaultMsg);
  const encodedSubject = encodeURIComponent("Direct Strategy Call Request");

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=8801793679254&text=${encodedMsg}`;
  const mailUrl = `mailto:info@bengalit.com.bd?subject=${encodedSubject}&body=${encodedMsg}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <Link href="/" className="footer-logo">
              <img src="/logo-b-icon.png" alt="BengalIT Logo" className="footer-logo-icon-img" />
              <div className="footer-logo-text-group">
                <span className="footer-logo-text">Bengal<span>IT</span></span>
                <div className="footer-logo-tagline">
                  <span className="tagline-line tagline-line-left"></span>
                  <span className="tagline-text">Built on Trust. Driven by Growth.</span>
                  <span className="tagline-line tagline-line-right"></span>
                </div>
              </div>
            </Link>
            <p className="footer-desc">
              We design and develop modern websites for businesses, brands, and growing companies.
            </p>
            <div className="footer-socials">
              <a href="https://web.facebook.com/bengalitbd" target="_blank" rel="noopener noreferrer" className="social-icon fb-icon" title="Facebook"><Facebook size={16} /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-icon" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.812.827 5.433 2.25 7.632L2.5 29.5l6.06-1.688A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.845-1.594l-.419-.249-4.341 1.21 1.161-4.17-.274-.437A11.44 11.44 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.31-8.528c-.346-.174-2.046-1.01-2.363-1.125-.317-.116-.548-.174-.779.174-.231.347-.895 1.125-1.097 1.356-.202.231-.404.26-.75.087-.346-.174-1.461-.538-2.783-1.717-1.028-.918-1.723-2.052-1.925-2.398-.202-.347-.021-.534.152-.707.156-.155.346-.404.519-.606.173-.202.231-.347.346-.578.116-.231.058-.433-.029-.606-.087-.174-.779-1.876-1.067-2.569-.281-.676-.567-.584-.779-.595-.202-.01-.433-.012-.664-.012-.231 0-.606.087-.923.433-.317.347-1.212 1.183-1.212 2.887 0 1.704 1.241 3.35 1.414 3.581.173.231 2.443 3.73 5.918 5.231.826.357 1.472.571 1.975.73.83.264 1.585.227 2.182.138.666-.099 2.046-.837 2.334-1.646.288-.809.288-1.501.202-1.646-.086-.145-.317-.231-.663-.405z" fill="currentColor" />
                </svg>
              </a>
              <a href={mailUrl} className="social-icon mail-icon" title="Email"><Mail size={16} /></a>
              <a href="tel:01904028006" className="social-icon phone-icon" title="Call"><Phone size={16} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services" className="footer-link">Business Websites</Link></li>
              <li><Link href="/services" className="footer-link">eCommerce Websites</Link></li>
              <li><Link href="/services" className="footer-link">Landing Pages</Link></li>
              <li><Link href="/services" className="footer-link">Website Redesign</Link></li>
              <li><Link href="/services" className="footer-link">Website Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about-us" className="footer-link">About Us</Link></li>
              <li><Link href="/portfolio" className="footer-link">Portfolio</Link></li>
              {/* <li><Link href="/#process" className="footer-link">Our Process</Link></li> */}
              {/* <li><Link href="/#blog" className="footer-link">Blog</Link></li> */}
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-item">
              <Phone size={16} style={{ color: '#2563eb', flexShrink: 0 }} />
              <a href="tel:01904028006" className="footer-contact-link">01904-028006</a>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.812.827 5.433 2.25 7.632L2.5 29.5l6.06-1.688A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.845-1.594l-.419-.249-4.341 1.21 1.161-4.17-.274-.437A11.44 11.44 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.31-8.528c-.346-.174-2.046-1.01-2.363-1.125-.317-.116-.548-.174-.779.174-.231.347-.895 1.125-1.097 1.356-.202.231-.404.26-.75.087-.346-.174-1.461-.538-2.783-1.717-1.028-.918-1.723-2.052-1.925-2.398-.202-.347-.021-.534.152-.707.156-.155.346-.404.519-.606.173-.202.231-.347.346-.578.116-.231.058-.433-.029-.606-.087-.174-.779-1.876-1.067-2.569-.281-.676-.567-.584-.779-.595-.202-.01-.433-.012-.664-.012-.231 0-.606.087-.923.433-.317.347-1.212 1.183-1.212 2.887 0 1.704 1.241 3.35 1.414 3.581.173.231 2.443 3.73 5.918 5.231.826.357 1.472.571 1.975.73.83.264 1.585.227 2.182.138.666-.099 2.046-.837 2.334-1.646.288-.809.288-1.501.202-1.646-.086-.145-.317-.231-.663-.405z" fill="#25D366" />
              </svg>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                01793-679254 <span className="whatsapp-badge">WhatsApp</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} style={{ color: '#2563eb', flexShrink: 0 }} />
              <a href={mailUrl} className="footer-contact-link">info@bengalit.com.bd</a>
            </div>
            <div className="footer-contact-item">
              <Facebook size={16} style={{ color: '#1877F2', flexShrink: 0 }} />
              <a href="https://web.facebook.com/bengalitbd" target="_blank" rel="noopener noreferrer" className="footer-contact-link">facebook.com/bengalitbd</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} style={{ color: '#2563eb', flexShrink: 0 }} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mirpur+11,+Dhaka-1213,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                Mirpur 11, Dhaka-1213, Bangladesh
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} BengalIT. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-link">Privacy Policy</Link>
            <Link href="#" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
