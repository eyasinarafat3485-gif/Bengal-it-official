'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fallbackProjects = [
  {
    _id: '1',
    title: 'Solutry IT Agency & Software',
    category: 'IT Agency',
    imageUrl: '/portfolio/solutry_it_agency_full.png',
    badge: 'IT & Software Agency',
  },
  {
    _id: '2',
    title: 'Developers Club by Bengal-IT',
    category: 'Developer Platform',
    imageUrl: '/portfolio/developers_club_full.png',
    badge: 'Themes, Plugins & Resources',
  },
  {
    _id: '3',
    title: 'Footcap Fabrics & Footwear Store',
    category: 'Fabrics & Footwear',
    imageUrl: '/portfolio/footcap_full_homepage.png',
    badge: 'Fabrics, Shoes & Sports',
  },
  {
    _id: '4',
    title: 'EduHome Learning Platform',
    category: 'Educational',
    imageUrl: '/portfolio/eduhome_full.png',
    badge: 'Academic & Courses',
  },
  {
    _id: '5',
    title: 'Homeverse Real Estate Portal',
    category: 'Real Estate',
    imageUrl: '/portfolio/homeverse_realestate_full.png',
    badge: 'Property & Real Estate',
  },
  {
    _id: '6',
    title: 'Anon Gadgets & Electronics Store',
    category: 'Gadgets & Electronics',
    imageUrl: '/portfolio/anon_full_homepage.png',
    badge: 'Gadgets & Smart Devices',
  },
  {
    _id: '7',
    title: 'Foodie Restaurant & Dining',
    category: 'Restaurant',
    imageUrl: '/portfolio/foodie_restaurant_full.png',
    badge: 'Fine Dining & Food',
  },
  {
    _id: '8',
    title: 'EasyBank Digital Banking',
    category: 'Digital Banking',
    imageUrl: '/portfolio/easybank_full.png',
    badge: 'Fintech & Banking',
  },
  {
    _id: '9',
    title: 'Dentelo Medical & Clinic',
    category: 'Healthcare',
    imageUrl: '/portfolio/dentelo_dental_full.png',
    badge: 'Dental & Medical Care',
  },
  {
    _id: '10',
    title: 'Organica Fresh Grocery Market',
    category: 'Grocery & Organic',
    imageUrl: '/portfolio/organica_full_homepage.png',
    badge: 'Organic Food & Grocery',
  },
  {
    _id: '11',
    title: 'FitLife Fitness & Gym Center',
    category: 'Fitness & Gym',
    imageUrl: '/portfolio/fitlife_full.png',
    badge: 'Health & Fitness Club',
  },
  {
    _id: '12',
    title: 'Tourest Travel & Tourism',
    category: 'Travel & Tourism',
    imageUrl: '/portfolio/tourest_full.png',
    badge: 'Travel & Booking',
  },
  {
    _id: '13',
    title: 'Casmart Fashion & Apparel Store',
    category: 'Fashion & Apparel',
    imageUrl: '/portfolio/casmart_full_homepage.png',
    badge: 'Watches, Sunglasses & Clothing',
  },
  {
    _id: '14',
    title: 'Ridex Car Rental Service',
    category: 'Car Rental',
    imageUrl: '/portfolio/ridex_full.png',
    badge: 'Fleet & Car Rental',
  },
  {
    _id: '15',
    title: 'Transportio Cargo Logistics',
    category: 'Logistics',
    imageUrl: '/portfolio/transportio_full.png',
    badge: 'Logistics & Cargo',
  },
];

export default function Projects({ showViewMore = false, limit, isHomePage = false }) {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/projects';
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.success && result.data && result.data.length > 0) {
          setProjects(result.data);
        }
      } catch (error) {
        console.warn('Backend server not reachable, using fallback local projects:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className={`projects-section ${isHomePage ? 'home-projects-section' : ''}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center"
        >
          <span className="section-tag">OUR WORK</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-desc">
            Explore some of our recent projects and digital solutions. Hover over any project to preview the full homepage layout.
          </p>
        </motion.div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
            <Loader2 className="animate-spin" size={32} style={{ color: '#0284c7' }} />
          </div>
        ) : (
          <div className="projects-grid">
            {displayedProjects.map((project, index) => (
              <div key={project._id || index} className="project-card">
                <div className="project-img-holder">
                  <div className="project-badge-overlay">
                    <span className="project-badge-tag">{project.badge || 'Featured'}</span>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-scroll-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {showViewMore && (
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link href="/portfolio" className="btn-outline" style={{ display: 'inline-flex' }}>
              View More Projects <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
