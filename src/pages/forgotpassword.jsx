 "use client";

import React, { useState } from "react";
import "../styles/forgotpassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Dummy confirmation (replace with real logic later)
    setMessage(`A password reset link has been sent to ${email}.`);
    setEmail("");
  };

  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit} className="forgotpassword-form">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="forgotpassword-message">{message}</p>}

        <div className="forgotpassword-links">
          <p>
            <button className="forgotpassword-link" onClick={() => window.location.href = "/login"}>
              Back to Login
            </button>
          </p>
          <p>
            <button className="forgotpassword-link" onClick={() => window.location.href = "/signup"}>
              Don't have an account? Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
