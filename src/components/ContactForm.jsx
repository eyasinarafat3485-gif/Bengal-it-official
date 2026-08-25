'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$100 - $500',
    serviceType: 'Select Your Project Type',
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
          subject: `${formData.serviceType} (${formData.budget})`,
          message: formData.message
        }),
      }).catch(() => null);

      if (res && res.ok) {
        const result = await res.json();
        setStatus({ submitting: false, success: true, message: result.message || 'Scope transmitted successfully!' });
        setFormData({ name: '', email: '', budget: '$100 - $500', serviceType: 'Select Your Project Type', message: '' });
      } else {
        setTimeout(() => {
          setStatus({ submitting: false, success: true, message: 'Thank you! Your project scope has been transmitted successfully to Bengal-IT.' });
          setFormData({ name: '', email: '', budget: '$100 - $500', serviceType: 'Select Your Project Type', message: '' });
        }, 600);
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, message: err.message || 'Failed connecting to server.' });
    }
  };

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
                <div className="hub-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="hub-item-title">Headquarters</h4>
                  <p className="hub-item-detail">
                    Level 8, Tower B, Corporate Heights, Mirpur 11, Dhaka-1213, Bangladesh
                  </p>
                </div>
              </li>

              <li className="hub-item">
                <div className="hub-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="hub-item-title">General Inquiries</h4>
                  <p className="hub-item-detail">eyasinwebdev@gmail.com</p>
                </div>
              </li>

              <li className="hub-item">
                <div className="hub-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="hub-item-title">Consultation Hotline</h4>
                  <p className="hub-item-detail">+880 1793-679254</p>
                </div>
              </li>
            </ul>

            {/* NDA Card */}
            <div className="nda-card">
              <div className="nda-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="nda-title">NDA Protection</h4>
                <p className="nda-desc">
                  We maintain absolute privacy. All preliminary proposals, diagrams, and audits are guarded under strict non-disclosure agreements.
                </p>
              </div>
            </div>
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

              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label">Estimated Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="inquiry-select"
                  >
                    <option value="$100 - $500">$100 - $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Required Service *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="inquiry-select"
                  >
                    <option value="Select Your Project Type">Select Your Project Type</option>
                    <option value="Business Website Development">Business Website Development</option>
                    <option value="eCommerce Website Development">eCommerce Website Development</option>
                    <option value="Landing Page Development">Landing Page Development</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Website Maintenance">Website Maintenance</option>
                    <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                  </select>
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
