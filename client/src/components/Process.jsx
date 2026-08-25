'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Braces, ClipboardCheck, CloudLightning } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'We analyze your existing workflows, audit current infrastructure, and design a strategic blueprint mapping technology to your goals.',
      iconColor: '#0284c7',
      bgColor: '#e0f2fe',
      borderColor: 'rgba(2, 132, 199, 0.35)',
    },
    {
      num: '02',
      icon: PenTool,
      title: 'Architecture & Schema',
      description: 'We map database structures, define microservices endpoints, outline security protocols, and plan server capacities.',
      iconColor: '#d97706',
      bgColor: '#fef3c7',
      borderColor: 'rgba(217, 119, 6, 0.35)',
    },
    {
      num: '03',
      icon: Braces,
      title: 'Agile Engineering',
      description: 'Our engineers write highly-optimized, modular code. We run continuous local test suits and maintain absolute Git cleanliness.',
      iconColor: '#2563eb',
      bgColor: '#dbeafe',
      borderColor: 'rgba(37, 99, 235, 0.35)',
    },
    {
      num: '04',
      icon: ClipboardCheck,
      title: 'Rigorous Audits & QA',
      description: 'We execute load tests, perform penetration tests, check mobile layout responsiveness, and verify system integration points.',
      iconColor: '#059669',
      bgColor: '#d1fae5',
      borderColor: 'rgba(5, 150, 105, 0.35)',
    },
    {
      num: '05',
      icon: CloudLightning,
      title: 'Deployment & SLAs',
      description: 'We launch using containerized pipelines to secure cloud structures, wire automated server monitoring, and initiate 24/7 SLAs.',
      iconColor: '#7c3aed',
      bgColor: '#ede9fe',
      borderColor: 'rgba(124, 58, 237, 0.35)',
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">EXECUTION MODEL</span>
          <h2 className="section-title">
            Our Development <span className="highlight">Workflow</span>
          </h2>
          <p className="section-desc mt-3">
            We follow structured engineering pipelines to ensure that projects are deployed with maximum security, scalability, and code hygiene.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="workflow-timeline-wrapper">
          {/* Vertical Connecting Line */}
          <div className="timeline-vertical-line" />

          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="timeline-step-row group"
              >
                {/* Node Box */}
                <div className="timeline-node-box">
                  <div className="node-icon-circle" style={{ backgroundColor: step.bgColor, color: step.iconColor }}>
                    <Icon size={20} />
                  </div>
                  <span className="node-step-label">STEP {step.num}</span>
                </div>

                {/* Content Card Box */}
                <div className="timeline-content-card" style={{ borderColor: step.borderColor }}>
                  <h3 className="timeline-step-title">{step.title}</h3>
                  <p className="timeline-step-desc">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
