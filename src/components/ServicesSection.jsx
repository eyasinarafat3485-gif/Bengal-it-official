'use client';

import { useState, useEffect } from 'react';
import { Globe, Server, Cloud, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Globe: Globe,
  Server: Server,
  Cloud: Cloud,
  Code: Code,
};

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        let res;
        try {
          res = await fetch('http://localhost:5000/api/services');
        } catch {
          res = await fetch('/api/express/services');
        }
        if (res.ok) {
          const data = await res.json();
          setServices(data.data || []);
        }
      } catch (err) {
        console.error('Failed fetching services:', err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center"
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="section-tag">
            What We Deliver
          </span>
          <h2 className="section-title">
            Enterprise Solutions & Tech Capabilities
          </h2>
          <p className="section-desc">
            Powering business transformation with modern architecture, API services, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <div key={service._id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', marginBottom: '1.25rem' }}>
                    <IconComponent size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {service.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0.4rem 0 0.8rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.features?.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--accent-cyan)' }} /> {feat}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                    Explore Details <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
