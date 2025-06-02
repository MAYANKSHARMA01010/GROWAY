'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/navbar.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left" onClick={() => router.push('/')} role="button" tabIndex={0}>
          <img src="/logo2.png" alt="GroWay Logo" className="navbar-logo" />
        </div>

        <ul className="navbar-links">
          <li onClick={() => router.push('/plans')}>Plans</li>
          <li onClick={() => router.push('/about')}>About</li>
          <li onClick={() => router.push('/contact')}>Contact</li>
        </ul>

        <div className="navbar-right">
            <button className='btn-starttest' onClick={() => alert('Starting Test...')}>
                Start Test
            </button>
            <button className="btn-login" onClick={() => router.push('/login')}>
                Login
            </button> 
        </div>
      </div>
    </nav>
  );
}
