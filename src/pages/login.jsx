'use client';

import React, { useState } from 'react';
import '../styles/login.css';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    // Simulate login
    setTimeout(() => {
      alert(`Welcome, ${email}!`);
      setLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email" className="login-label">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          disabled={loading}
          required
        />
        <label htmlFor="password" className="login-label">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          disabled={loading}
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>

      <div className="login-links">
        <p>
          New user?{' '}
          <button
            type="button"
            className="login-link"
            onClick={() => router.push('/signup')}
          >
            Register Here
          </button>
        </p>
        <p>
          <button
            type="button"
            className="login-link"
            onClick={() => router.push('/forgotpassword')}
          >
            Forgot Password?
          </button>
        </p>
        <p>
          <button
            type="button"
            className="login-link"
            onClick={() => router.push('/')}
          >
            Go to Home
          </button>
        </p>
      </div>
    </div>
  );
}
