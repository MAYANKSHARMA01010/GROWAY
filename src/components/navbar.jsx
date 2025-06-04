'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/navbar.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => router.push('/')}
          role="button"
          tabIndex={0}
          aria-label="GroWay Home"
        >
          <img src="/logo2.png" alt="GroWay Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li onClick={() => router.push('/plans')}>Plans</li>
          {/* <li onClick={() => router.push('/aboutpage')}>Results Overview</li> */}
          {/* <li onClick={() => router.push('/contact')}>Contact</li> */}
        </ul>
{/* resulttable */}
        {/* Action Buttons */}
        <div className="navbar-actions">
          <button
            className="btn-starttest"
            onClick={() => alert('Starting Test...')}
          >
            Start Test
          </button>
          <button
            className="btn-login"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
