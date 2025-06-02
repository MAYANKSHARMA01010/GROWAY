'use strict';

import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>GroWay</h3>
          <p>Your trusted platform for growth and learning. We help you unlock your potential with personalized tests and plans.</p>
        </div>

        <div className="footer-legal-contact">
          <nav className="footer-legal">
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </nav>

          <div className="footer-contact">
            <p>Email: <a href="mailto:support@groway.com">support@groway.com</a></p>
            <div className="social-icons">
              <a href="https://t.me/groway" target="_blank" rel="noopener noreferrer" aria-label="Telegram">📨</a>
              <a href="https://instagram.com/groway" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
              <a href="mailto:support@groway.com" aria-label="Email">✉️</a>
              <a href="https://linkedin.com/company/groway" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
              <a href="https://facebook.com/groway" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 GroWay</span>
      </div>
    </footer>
  );
}
