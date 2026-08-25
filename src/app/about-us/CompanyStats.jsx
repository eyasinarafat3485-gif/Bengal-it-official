'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const performanceData = [
  { year: '2023', projects: 85, clients: 25, uptime: 98.5, rating: 4.2 },
  { year: '2024', projects: 190, clients: 60, uptime: 99.1, rating: 4.5 },
  { year: '2025', projects: 260, clients: 80, uptime: 98.9, rating: 4.7 },
  { year: '2026', projects: 370, clients: 110, uptime: 99.8, rating: 4.9 },
];

export default function CompanyStats() {
  const [activePoint, setActivePoint] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SVG Chart Geometry Constants
  const width = 800;
  const height = 320;
  const paddingLeft = 50;
  const paddingRight = 50;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const getX = (index) => paddingLeft + (index / (performanceData.length - 1)) * chartW;
  
  // Left Y-axis scale (0 to 400 for projects & clients)
  const getLeftY = (val) => height - paddingBottom - (val / 400) * chartH;
  
  // Right Y-axis scale (0 to 100 for uptime & rating*20)
  const getRightY = (val) => height - paddingBottom - (val / 100) * chartH;

  // Build SVG Path strings
  const projectsPath = performanceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getLeftY(d.projects)}`).join(' ');
  const clientsPath = performanceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getLeftY(d.clients)}`).join(' ');
  const uptimePath = performanceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getRightY(d.uptime)}`).join(' ');
  const ratingPath = performanceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getRightY(d.rating * 20)}`).join(' ');

  return (
    <section className="about-stats-section">
      <div className="container">
        <div className="stats-card-container">
          <div className="stats-header">
            <div>
              <h2 className="stats-title">Company Growth & Quality Performance</h2>
              <p className="stats-desc">Multi-metric performance trend (2023 – 2026) showing scale and quality standards.</p>
            </div>
          </div>

          {/* Interactive Chart Box */}
          <div className="chart-box">
            {/* Custom Legend */}
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#00e5a3' }}></span>
                <span className="legend-label" style={{ color: '#00c78c' }}>Projects Delivered (370+)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#ffb703' }}></span>
                <span className="legend-label" style={{ color: '#d99b00' }}>Enterprise Clients (110+)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#2563eb' }}></span>
                <span className="legend-label" style={{ color: '#2563eb' }}>System Uptime SLA (99.8%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#8b5cf6' }}></span>
                <span className="legend-label" style={{ color: '#8b5cf6' }}>Client Rating (4.9 / 5.0)</span>
              </div>
            </div>

            {/* SVG Chart Rendering */}
            <div className="svg-container" onMouseLeave={() => setActivePoint(null)}>
              <svg viewBox={`0 0 ${width} ${height}`} className="responsive-svg">
                {/* Horizontal Grid Lines */}
                {[0, 100, 200, 300, 400].map((val, idx) => {
                  const y = getLeftY(val);
                  return (
                    <g key={idx}>
                      <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                      <text x={paddingLeft - 10} y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="11" fontWeight="600">{val}</text>
                      <text x={width - paddingRight + 10} y={y + 4} textAnchor="start" fill="#94a3b8" fontSize="11" fontWeight="600">{val / 4}%</text>
                    </g>
                  );
                })}

                {/* X-Axis Years */}
                {performanceData.map((d, i) => (
                  <text key={i} x={getX(i)} y={height - 12} textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">
                    {d.year}
                  </text>
                ))}

                {/* 1. Projects Delivered (Emerald Green) */}
                {mounted ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    d={projectsPath}
                    fill="none"
                    stroke="#00e5a3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path d={projectsPath} fill="none" stroke="#00e5a3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                )}
                
                {/* 2. Enterprise Clients (Warm Amber) */}
                {mounted ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
                    d={clientsPath}
                    fill="none"
                    stroke="#ffb703"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path d={clientsPath} fill="none" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                )}

                {/* 3. System Uptime SLA (Royal Blue) */}
                {mounted ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                    d={uptimePath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path d={uptimePath} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                )}

                {/* 4. Client Rating (Vibrant Purple Dashed) */}
                {mounted ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                    d={ratingPath}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path d={ratingPath} fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" strokeLinejoin="round" />
                )}

                {/* Invisible Hover Rectangles (Captures hover anywhere on the chart column) */}
                {performanceData.map((d, i) => {
                  const cx = getX(i);
                  const step = chartW / (performanceData.length - 1);
                  const rectX = i === 0 ? paddingLeft : cx - step / 2;
                  const rectW = i === 0 || i === performanceData.length - 1 ? step / 2 : step;

                  return (
                    <rect
                      key={`hover-col-${i}`}
                      x={rectX}
                      y={paddingTop}
                      width={rectW}
                      height={chartH}
                      fill="transparent"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setActivePoint(i)}
                    />
                  );
                })}

                {/* Interactive Points */}
                {performanceData.map((d, i) => {
                  const cx = getX(i);
                  return (
                    <g key={i} className="chart-point-group" style={{ pointerEvents: 'none' }}>
                      {/* Highlight vertical guide line on hover */}
                      {activePoint === i && (
                        <line x1={cx} y1={paddingTop} x2={cx} y2={height - paddingBottom} stroke="#cbd5e1" strokeDasharray="3 3" />
                      )}

                      {/* Dots */}
                      <circle cx={cx} cy={getLeftY(d.projects)} r={activePoint === i ? "7" : "5"} fill="#00e5a3" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={cx} cy={getLeftY(d.clients)} r={activePoint === i ? "7" : "5"} fill="#ffb703" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={cx} cy={getRightY(d.uptime)} r={activePoint === i ? "7" : "5"} fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={cx} cy={getRightY(d.rating * 20)} r={activePoint === i ? "7" : "5"} fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  );
                })}
              </svg>

              {/* Active Hover Tooltip */}
              {activePoint !== null && (
                <div
                  className="chart-tooltip"
                  style={{ left: `${(getX(activePoint) / width) * 100}%` }}
                >
                  <div className="tooltip-year">Year {performanceData[activePoint].year}</div>
                  <div className="tooltip-row" style={{ color: '#00c78c' }}>
                    <span>Projects:</span> <strong>{performanceData[activePoint].projects}+</strong>
                  </div>
                  <div className="tooltip-row" style={{ color: '#d99b00' }}>
                    <span>Clients:</span> <strong>{performanceData[activePoint].clients}+</strong>
                  </div>
                  <div className="tooltip-row" style={{ color: '#2563eb' }}>
                    <span>Uptime SLA:</span> <strong>{performanceData[activePoint].uptime}%</strong>
                  </div>
                  <div className="tooltip-row" style={{ color: '#8b5cf6' }}>
                    <span>Rating:</span> <strong>{performanceData[activePoint].rating} / 5.0</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
