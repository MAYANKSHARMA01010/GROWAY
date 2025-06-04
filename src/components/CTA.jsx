"use client";

import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion'; // Only using the hook
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import '../styles/CTA.css';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/test');
  };

  const handleServicesClick = () => {
    router.push('/plans');
  };

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.add('cta-in-view');
    }
  }, [isInView]);

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-gradient"></div>
          <div 
            className="cta-background-image" 
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            }}
          />
          
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Unlock Your True Potential?
            </h2>
            <p className="cta-description">
              Join Groway today and discover how our tailored tests and strategic insights can help you identify your strengths, 
              overcome weaknesses, and achieve lasting success.
            </p>
            <div className="cta-buttons">
              <div className="cta-button secondary"onClick={handleContactClick}>Start Free Test <ArrowRight className="cta-icon" /></div>
              <div className="cta-button outline" onClick={handleServicesClick}>Explore Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
