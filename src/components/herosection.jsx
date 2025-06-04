"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/herosection.css";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300); // Delay visibility slightly
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock Your True Potential with <span className="highlight">Groway</span>
          </h1>
          <p className="hero-description">
            Discover your strengths, improve your weaknesses, and grow into your best professional self.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-button primary">
              Get Started →
            </a>
            <a href="#about" className="hero-button secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Business team working together"
            className="hero-image"
          />
          <motion.div 
            className="stats-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="stat">
              <p className="stat-label">Clients</p>
              <p className="stat-value">200+</p>
            </div>
            <div className="stat">
              <p className="stat-label">Success Rate</p>
              <p className="stat-value">98%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
