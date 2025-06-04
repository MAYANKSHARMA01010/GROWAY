'use client';

import React, { useState } from 'react';
import '../styles/login.css';
import { useRouter } from 'next/navigation';

function Login() {
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
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          disabled={loading}
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>

      <div className="login-links">
        <p>
          New user?{' '}
          <span className="login-link" onClick={() => router.push('/signup')}>
            Register Here
          </span>
        </p>
        <p>
          <span className="login-link" onClick={() => router.push('/forgotpassword')}>
            Forgot Password?
          </span>
        </p>
        <p>
          <span className="login-link" onClick={() => router.push('/')}>
            Go to Home
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
