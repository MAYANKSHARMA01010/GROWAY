'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import '../styles/login.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        toast.success(`Welcome, ${email}!`);
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        toast.error(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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