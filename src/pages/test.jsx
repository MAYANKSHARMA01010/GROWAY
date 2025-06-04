"use client";
import React from "react";
import "../styles/test.css";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function StartTest() {
  return (
    <div className="test-page-wrapper">
      <Navbar />
        <section className="test-start-section">
        <div className="quote-block">
            <h2>
            "It doesn't matter which way you go if you don't know what you want to get to"
            <br />– <span className="quote-author">Cheshire Cat</span>
            </h2>
            {/* <img src="/cheshireCat.png" alt="Cheshire Cat" className="cheshire-img" /> */}
        </div>

        <div className="intro-content">
            <img src="/girlReading.jpeg" alt="Girl reading map" className="girl-img" />
            <p className="message">
            If you have the <strong>goal</strong>, it’s important to create a <strong>plan</strong> and build a <strong>route</strong>.
            </p>
        </div>

        <div className="test-selector">
            <h3>
            Find your <span className="highlight-green">Growth</span> <span className="highlight-orange">Way</span>!
            </h3>
            <select className="dropdown">
            <option>Choose your goal occupation / role</option>
            {/* Copy full role list below */}
            <option>Accountant</option>
            <option>Analyst</option>
            <option>Architect</option>
            <option>Artist</option>
            <option>Auditor</option>
            <option>Blogger</option>
            <option>Business Analyst</option>
            <option>Businessman</option>
            <option>Chef</option>
            <option>CEO</option>
            <option>Coach</option>
            <option>Cosmetologist</option>
            <option>Data Analyst</option>
            <option>Designer</option>
            <option>DevOps Engineer</option>
            <option>Director</option>
            <option>Doctor</option>
            <option>Driver</option>
            <option>Ecologist</option>
            <option>Economist</option>
            <option>Engineer</option>
            <option>Entrepreneur</option>
            <option>Freelancer</option>
            <option>HR Specialist</option>
            <option>Investor</option>
            <option>Journalist</option>
            <option>Lawyer</option>
            <option>Logistics Manager</option>
            <option>Marketer</option>
            <option>Mentor</option>
            <option>Music Theory Teacher</option>
            <option>Osteopath</option>
            <option>Pharmacist</option>
            <option>Photographer</option>
            <option>Product Manager</option>
            <option>Project Manager</option>
            <option>Psychologist</option>
            <option>Psychotherapist</option>
            <option>Real Estate Specialist</option>
            <option>Sales Manager</option>
            <option>Software Engineer</option>
            <option>Trader</option>
            <option>UX/UI Designer</option>
            <option>Web Developer</option>
            <option>Writer</option>
            </select>
            <p className="subtitle">3 personality traits; 9 questions; 1 minute</p>
            <button className="start-btn">Start FREE Test</button>
            <p className="note">
            Can’t find your goal? Let us know on <a href="#">Telegram</a> or <a href="#">request form</a>, and we’ll add it!
            </p>
        </div>
        </section>
        <Footer />
    </div>
  );
}
