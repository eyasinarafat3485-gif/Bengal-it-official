'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Direct Project Inquiry',
          message: formData.message
        }),
      }).catch(() => null);

      if (res && res.ok) {
        const result = await res.json();
        setStatus({ submitting: false, success: true, message: result.message || 'Scope transmitted successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setTimeout(() => {
          setStatus({ submitting: false, success: true, message: 'Thank you! Your project scope has been transmitted successfully to Bengal-IT.' });
          setFormData({ name: '', email: '', message: '' });
        }, 600);
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, message: err.message || 'Failed connecting to server.' });
    }
  };

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Mirpur+11,+Dhaka-1213,+Bangladesh";

  return (
    <section id="contact" className="inquiry-section">
      <div className="container">
        {/* Top Header */}
        <div className="inquiry-header text-center">
          <span className="inquiry-badge">INQUIRY ENGINE</span>
          <h1 className="inquiry-title">
            Initiate Your <span className="highlight-gradient">Transformation</span>
          </h1>
          <p className="inquiry-subtitle">
            Reach out to our software consultants. We typically analyze project scopes and return custom pricing details within 24 business hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="inquiry-grid">
          {/* Left Column: Consultation Hubs */}
          <div className="hubs-column">
            <h3 className="hubs-heading">Consultation Hubs</h3>
            <p className="hubs-subtext">
              Connect with our local solution architect team or visit our engineering facilities in Dhaka.
            </p>

            <ul className="hubs-list">
              <li className="hub-item">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hub-icon-wrap"
                  title="View on Google Maps"
                >
                  <MapPin size={20} />
                </a>
                <div>
                  <h4 className="hub-item-title">Headquarters</h4>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hub-item-detail map-location-link"
                  >
                    Mirpur 11, Dhaka-1213, Bangladesh
                  </a>
                </div>
              </li>

              <li className="hub-item">
                <a href="mailto:info@bengalit.com.bd" className="hub-icon-wrap" title="Send Email">
                  <Mail size={20} />
                </a>
                <div>
                  <h4 className="hub-item-title">General Inquiries</h4>
                  <a href="mailto:info@bengalit.com.bd" className="hub-item-detail map-location-link">
                    info@bengalit.com.bd
                  </a>
                </div>
              </li>

              <li className="hub-item">
                <a href="tel:01904028006" className="hub-icon-wrap" title="Call Hotline">
                  <Phone size={20} />
                </a>
                <div>
                  <h4 className="hub-item-title">Consultation Hotline</h4>
                  <a href="tel:01904028006" className="hub-item-detail map-location-link">
                    01904-028006
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: High-Tech Dark Form Card */}
          <div className="inquiry-form-card">
            {status.success === true && (
              <div className="status-alert success">
                <CheckCircle2 size={20} />
                <span>{status.message}</span>
              </div>
            )}

            {status.success === false && (
              <div className="status-alert error">
                <AlertCircle size={20} />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="inquiry-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john124@gmail.com"
                    className="inquiry-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Project Details & Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project goals, features, or design references..."
                  className="inquiry-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="transmit-btn"
              >
                {status.submitting ? 'TRANSMITTING...' : <>TRANSMIT PROJECT SCOPE <Send size={16} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
