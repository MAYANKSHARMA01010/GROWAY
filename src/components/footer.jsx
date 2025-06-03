'use strict';

import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3 className="footer-title">GroWay</h3>
          <p className="footer-description">
            Your trusted platform for growth and learning. Unlock your potential with personalized tests and plans.
          </p>
        </div>

        {/* Legal and Contact Section */}
        <div className="footer-links">
          <nav className="footer-nav" aria-label="Legal Links">
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </nav>

          <div className="footer-contact">
            <p>Email: <a href="mailto:support@groway.com">support@groway.com</a></p>
            <div className="footer-social">
              <a href="https://t.me/groway" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon">📨</a>
              <a href="https://instagram.com/groway" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">📸</a>
              <a href="mailto:support@groway.com" aria-label="Email" className="social-icon">✉️</a>
              <a href="https://linkedin.com/company/groway" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">🔗</a>
              <a href="https://facebook.com/groway" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">📘</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <span>© 2024 GroWay. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
