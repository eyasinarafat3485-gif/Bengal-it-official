'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is your typical project completion timeline?',
    answer:
      'Timelines depend on the project scope. Standard business landing pages or UI/UX redesigns usually take 1–2 weeks, while custom e-commerce products or enterprise web applications take 3–6 weeks from architecture to deployment.',
  },
  {
    question: 'How do you handle project pricing and payments?',
    answer:
      'We offer milestone-based transparent pricing. Usually, we break payment into 3–4 phases: Kickoff Deposit, Mid-project Review, Final Testing, and Deployment. We accept local and international bank transfers and online gateways.',
  },
  {
    question: 'Will I get ongoing support after project completion?',
    answer:
      'Yes! We provide 30 days of free technical support and bug fixing post-launch. After that, we offer affordable monthly maintenance packages for system updates, security audits, and performance monitoring.',
  },
  {
    question: 'Do you sign a Non-Disclosure Agreement (NDA)?',
    answer:
      'Absolute privacy is guaranteed. We sign formal legal NDAs before receiving any project briefs, codebases, or proprietary business information.',
  },
  {
    question: 'Can you upgrade or redesign an existing application?',
    answer:
      'Definitely. We conduct a thorough code and UI/UX audit of your existing system, map out improvements, and refactor or migrate your tech stack without downtime.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="faq-badge">
            <Sparkles size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our engineering process, security standards, and consultation terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="faq-button"
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-wrap">
                    <HelpCircle className="faq-question-icon" size={20} />
                    <span className="faq-question-text">{faq.question}</span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="faq-chevron-box"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Animated Answer Drawer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Direct Contact Prompt */}
        <div className="faq-footer-prompt">
          <p>
            Have a question that isn't answered above?{' '}
            <Link href="/contact">
              Contact our tech team directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
