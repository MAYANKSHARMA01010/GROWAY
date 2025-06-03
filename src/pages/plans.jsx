'use client';

import React from 'react';
import '../styles/globals.css';
import '../styles/plans.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

const plansData = [
  {
    name: 'Try',
    price: 'Free',
    priceInfo: '-',
    features: ['3 Random', 'Personality Traits'],
    duration: '-',
    buttonLabel: 'Start Free Test'
  },
  {
    name: 'Fast',
    price: '€1',
    priceInfo: '-',
    features: ['TOP - 15', 'Personality Traits'],
    duration: '1 Test',
    buttonLabel: 'Get Full Test'
  },
  {
    name: 'Grow',
    price: '€5',
    priceInfo: 'Subscription',
    features: ['TOP - 15', 'Personality Traits'],
    duration: '1 Test /day',
    buttonLabel: 'Subscribe'
  },
  {
    name: 'Hack',
    price: '€19',
    priceInfo: 'Subscription',
    features: ['TOP - 15', 'Personality Traits'],
    duration: 'Unlimited Test /day',
    buttonLabel: 'Boost'
  }
];

const Plans = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="plans-container">
        <h1 className="plans-heading">Plans and Pricing</h1>
        <div className="plans-grid">
          {plansData.map((plan, index) => (
            <div key={index} className="plan-card">
              <h2 className="plan-name">{plan.name}</h2>
              <div className="plan-separator"></div>
              <p className="plan-price">{plan.price}{plan.price.includes('€') && <span className="plan-duration">{plan.name === 'Grow' || plan.name === 'Hack' ? '/mo' : ''}</span>}</p>
              <p className="plan-price-info">{plan.priceInfo}</p>
              <div className="plan-features">
                <p className="feature-title">The test evaluates:</p>
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="feature-item">{feature}</p>
                ))}
              </div>
              <p className="plan-duration-text">{plan.duration}</p>
              <button className="plan-button" aria-label={plan.buttonLabel}>{plan.buttonLabel}</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;