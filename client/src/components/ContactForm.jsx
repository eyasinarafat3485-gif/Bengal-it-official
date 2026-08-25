'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Direct Strategy Call Request',
    message: 'Hello Bengal-IT, I would like to schedule a direct strategy call with leadership.'
  });
  const [status, setStatus] = useState({ submitting: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      let res;
      try {
        res = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        res = await fetch('/api/express/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus({ submitting: false, success: true, message: result.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to submit form.');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, message: err.message || 'Failed connecting to backend.' });
    }
  };

  return (
    <section id="contact" style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card" style={{ border: '1px solid var(--border-accent)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Get In Touch With Bengal-IT</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Send us a message and our team will get back to you promptly.
            </p>
          </div>

          {status.success === true && (
            <div style={{ padding: '1rem', background: 'rgba(0, 255, 170, 0.1)', border: '1px solid rgba(0, 255, 170, 0.3)', borderRadius: '8px', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={20} />
              <span>{status.message}</span>
            </div>
          )}

          {status.success === false && (
            <div style={{ padding: '1rem', background: 'rgba(255, 75, 75, 0.1)', border: '1px solid rgba(255, 75, 75, 0.3)', borderRadius: '8px', color: '#ff8888', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <AlertCircle size={20} />
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. tanvir@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Web Development Inquiry"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your project requirement or inquiry..."
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '0.85rem' }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
