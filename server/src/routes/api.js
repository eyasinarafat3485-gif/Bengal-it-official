const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const Contact = require('../models/Contact');

// Health Check Endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Bengal-IT Official REST API is running smoothly',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Get Bengal-IT Services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    if (services.length === 0) {
      // Fallback initial data if DB is empty
      return res.status(200).json({
        success: true,
        source: 'fallback',
        data: [
          {
            _id: '1',
            title: 'Custom Web Application Development',
            description: 'Scalable Next.js & React full-stack web platforms tailored for business growth.',
            category: 'Web Solutions',
            iconName: 'Globe',
            features: ['Next.js SSR/SSG', 'REST & GraphQL APIs', 'Performance Optimization'],
          },
          {
            _id: '2',
            title: 'Enterprise Software & API Architecture',
            description: 'Robust Node.js & Express microservices with secure MongoDB database models.',
            category: 'Backend Architecture',
            iconName: 'Server',
            features: ['Scalable Express Backend', 'Mongoose Integration', 'JWT Authentication'],
          },
          {
            _id: '3',
            title: 'Cloud Infrastructure & DevOps',
            description: 'Seamless deployment, Docker containerization, and automated CI/CD pipelines.',
            category: 'DevOps',
            iconName: 'Cloud',
            features: ['AWS / Vercel Deployments', 'Containerization', '24/7 Monitoring'],
          },
        ],
      });
    }
    res.status(200).json({ success: true, count: services.length, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Contact Submission Handler
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
    }

    // Try saving if DB connected, or return mock success
    try {
      const newContact = await Contact.create({ name, email, subject, message });
      return res.status(201).json({ success: true, message: 'Message received! We will respond shortly.', data: newContact });
    } catch (dbErr) {
      return res.status(201).json({
        success: true,
        message: 'Message received (Demo mode)! Thank you for contacting Bengal-IT.',
        data: { name, email, subject, message, createdAt: new Date() }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
