'use client';

import React from 'react';
import '../styles/globals.css';
import '../styles/plans.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

function Plans() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="plans-container main-content">
        <h1 className="plans-heading">Plans and Pricing</h1>
        <div className="plans-grid">
          {/* Plan 1 - Try */}
          <div className="plan-card">
            <h2>Try</h2>
            <p className='line'></p>
            <p className="price">Free</p>
            <p className="price-info">-</p>
            <div className="data">
              <p className='l1'>The test evaluates:</p>
              <p className='l2'>3 Random</p>
              <p className='l3'>Personality Traits</p>
            </div>
            <p className='duration'>-</p>
            <button className="plan-button">Start Free Test</button>
          </div>

          {/* Plan 2 - Fast */}
          <div className="plan-card">
            <h2>Fast</h2>
            <p className='line'></p>
            <p className="price">€1</p>
            <p className="price-info">-</p>
            <div className="data">
              <p className='l1'>The test evaluates:</p>
              <p className='l2'>TOP - 15</p>
              <p className='l3'>Personality Traits</p>
            </div>
            <p className='duration'>1 Test</p>
            <button className="plan-button">Get Full Test</button>
          </div>

          {/* Plan 3 - Grow */}
          <div className="plan-card">
            <h2>Grow</h2>
            <p className='line'></p>
            <p className="price">€5 <span>/mo</span></p>
            <p className="price-info">Subscription</p>
            <div className="data">
              <p className='l1'>The test evaluates:</p>
              <p className='l2'>TOP - 15</p>
              <p className='l3'>Personality Traits</p>
            </div>
            <p className='duration'>1 Test <span>/day</span></p>
            <button className="plan-button">Subscribe</button>
          </div>

          {/* Plan 4 - Hack */}
          <div className="plan-card">
            <h2>Hack</h2>
            <p className='line'></p>
            <p className="price">€19 <span>/mo</span></p>
            <p className="price-info">Subscription</p>
            <div className="data">
              <p className='l1'>The test evaluates:</p>
              <p className='l2'>TOP - 15</p>
              <p className='l3'>Personality Traits</p>
            </div>
            <p className='duration'>Unlimited Test <span>/day</span></p>
            <button className="plan-button">Boost</button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Plans;