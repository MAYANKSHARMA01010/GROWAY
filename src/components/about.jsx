"use client";

import React from 'react';
import '../styles/about.css';

import CTA from '../components/CTA';

export default function AboutHero() {
  return (
    <section id="about-hero">
      
      <div className="container">
        <div className="containers">
            
            <div className="content">
                <h1 className="headline">
                About <span className="highlight">Groway</span>
                </h1>
                <p className="description">
                At Groway, we’re a passionate team committed to helping individuals and professionals unlock their true potential. 
                Through innovative self-assessment tools and personalized insights, we guide you toward sustainable growth by 
                identifying your strengths and areas to improve. Your success is our mission.
                </p>
                <div className="stats-grid">
                    <div className="stat-item">
                        <p className="stat-number">10+</p>
                        <p className="stat-label">Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-number">200+</p>
                        <p className="stat-label">Satisfied Clients</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-number">15+</p>
                        <p className="stat-label">Expert Team Members</p>
                    </div>
                </div>
            </div>
          
          <div className="image-container">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Groway team" 
              className="team-image"
            />
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
