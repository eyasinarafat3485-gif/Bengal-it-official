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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d9e75cb9-cae9-429b-bb80-aaf80932fa96",
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          subject: `New Project Scope Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Bengal-IT Client)`,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Thank you! Your project scope has been transmitted successfully to Bengal-IT.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({
        submitting: false,
        success: false,
        message: err.message || 'Error transmitting message. Please try again.'
      });
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
                <div
                  onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}
                  className="hub-item-card"
                  role="button"
                  tabIndex={0}
                  title="Our Location (Click to view Google Maps)"
                >
                  <div className="hub-icon-wrap">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="hub-item-title">Headquarters</h4>
                    <p className="hub-item-detail">
                      Mirpur 11, Dhaka-1213, Bangladesh
                    </p>
                  </div>
                </div>
              </li>

              <li className="hub-item">
                <div
                  onClick={() => window.location.href = 'mailto:info@bengalit.com.bd'}
                  className="hub-item-card"
                  role="button"
                  tabIndex={0}
                  title="Our Official Email (Click to send email)"
                >
                  <div className="hub-icon-wrap">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="hub-item-title">General Inquiries</h4>
                    <p className="hub-item-detail">
                      info@bengalit.com.bd
                    </p>
                  </div>
                </div>
              </li>

              <li className="hub-item">
                <div
                  onClick={() => window.location.href = 'tel:01904028006'}
                  className="hub-item-card"
                  role="button"
                  tabIndex={0}
                  title="Our Hotline Number (Click to call)"
                >
                  <div className="hub-icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="hub-item-title">Consultation Hotline</h4>
                    <p className="hub-item-detail">
                      01904-028006
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: High-Tech Form Card */}
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
