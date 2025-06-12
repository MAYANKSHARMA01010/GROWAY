'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/signup.css';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !fname) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${fname} ${lname}`, // ✅ Correct full name
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Welcome, ${fname} ${lname || ''}! Account created successfully.`);
        setEmail('');
        setPassword('');
        setFname('');
        setLname('');
        router.push('/login');
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleRegister}>
        <h3 className="signup-title">Sign Up</h3>

        <div className="signup-group">
          <label htmlFor="fname">
            First Name<span className="required">*</span>
          </label>
          <input
            id="fname"
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="signup-group">
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="signup-group">
          <label htmlFor="email">
            Email Address<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="signup-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="signup-links">
          <p>
            Already registered?{' '}
            <button
              type="button"
              className="signup-link"
              onClick={() => router.push('/login')}
            >
              Login
            </button>
          </p>
          <p>
            <button
              type="button"
              className="signup-link"
              onClick={() => router.push('/')}
            >
              Go to Home
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
