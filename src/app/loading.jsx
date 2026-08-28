'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-center-box">
        {/* Outer Glowing Animated Ring */}
        <div className="loading-ring-container">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="loading-outer-ring"
          />

          {/* Inner Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
            className="loading-inner-ring"
          />

          {/* Center Glowing Pulse Core */}
          <motion.div
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="loading-core-pulse"
          />
        </div>

        {/* Professional Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-text-group"
        >
          <p className="loading-brand">
            Bengal<span className="brand-accent">IT</span>
          </p>
          <p className="loading-status">
            Loading ...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
