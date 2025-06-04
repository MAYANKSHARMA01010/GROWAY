'use client';

import React from 'react';
import '../styles/globals.css';
import '../styles/plans.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

const plansData = [
  {
    name: 'Starter',
    price: 'Free',
    priceInfo: 'Basic Access',
    features: [
      'Access to 3 random personality traits',
      'Basic result interpretation',
      'One-time test access'
    ],
    duration: '1 test',
    buttonLabel: 'Try for Free'
  },
  {
    name: 'Essential',
    price: '€2',
    priceInfo: 'One-Time Purchase',
    features: [
      'Access to top 15 personality traits',
      'Detailed result breakdown',
      'Printable PDF report',
      'Email support'
    ],
    duration: 'Single test',
    buttonLabel: 'Get Full Test'
  },
  {
    name: 'Pro',
    price: '€7',
    priceInfo: 'Monthly Subscription',
    features: [
      'Unlimited tests per month',
      'Advanced insights & analytics',
      'Personal growth recommendations',
      'Access to community forums',
      'Priority email support'
    ],
    duration: 'Unlimited tests / month',
    buttonLabel: 'Subscribe Now'
  },
  {
    name: 'Elite',
    price: '€20',
    priceInfo: 'Annual Subscription',
    features: [
      'Unlimited tests per year',
      'Full feature suite',
      'Exclusive webinars & workshops',
      'One-on-one coaching session',
      'Dedicated account manager'
    ],
    duration: 'Unlimited tests / year',
    buttonLabel: 'Join Elite'
  },
  {
    name: 'Team',
    price: '€50',
    priceInfo: 'Team Subscription',
    features: [
      'Unlimited tests for teams',
      'Team performance dashboard',
      'Group insights & analytics',
      'Admin panel for team management',
      'Priority support'
    ],
    duration: 'Unlimited tests / month',
    buttonLabel: 'Get Team Plan'
  },
  {
    name: 'Enterprise',
    price: '€100',
    priceInfo: 'Enterprise Subscription',
    features: [
      'Custom test packages',
      'Dedicated success manager',
      'Integrations with HR systems',
      'Custom branding & white-labeling',
      'Onboarding & training sessions',
      '24/7 premium support'
    ],
    duration: 'Custom package',
    buttonLabel: 'Contact Sales'
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