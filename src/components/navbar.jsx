'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/navbar.css';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigateAndClose = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger button */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => navigateAndClose('/')}
          role="button"
          tabIndex={0}
          aria-label="GroWay Home"
        >
          <img src="/logo2.png" alt="GroWay Logo" />
        </div>

        {/* Navigation links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button onClick={() => navigateAndClose('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateAndClose('/plans')}>Plans</button>
          </li>
          <li>
            <button onClick={() => navigateAndClose('/test')}>Start Test</button>
          </li>
        </ul>

        {/* Login button - always visible */}
        <div className="navbar-actions">
          <button
            className="btn-login"
            onClick={() => navigateAndClose('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
