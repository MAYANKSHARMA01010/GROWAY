'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/navbar.css';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigateAndClose = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    router.push('/login');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    }
  }, []);

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
          <img src="/logoNavbar.png" alt="GroWay Logo" />
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

        {/* Login / Logout button */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <button className="btn-login" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn-login" onClick={() => navigateAndClose('/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
