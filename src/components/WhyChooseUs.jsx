import { Users, Smartphone, Rocket, Headphones } from 'lucide-react';

const whyItems = [
  {
    icon: Users,
    title: 'Business-Focused Approach',
    desc: 'We understand your goals and create websites that help you achieve them.',
  },
  {
    icon: Smartphone,
    title: 'Modern & Responsive Design',
    desc: 'Your website looks great and works smoothly on all devices.',
  },
  {
    icon: Rocket,
    title: 'Performance Matters',
    desc: 'We build clean, optimized websites that load fast and perform well.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'We are here to support you even after your website goes live.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">WHY CHOOSE BENGALIIT</span>
          <h2 className="section-title">A Practical Approach to Web Development</h2>
          <p className="section-desc">
            We focus on delivering websites that are reliable, user-friendly, and built to support your business.
          </p>
        </div>

        <div className="why-grid">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="why-item">
                <div className="why-icon-circle">
                  <Icon size={24} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
