"use client";
import React from "react";
import "../styles/test.css";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { useRouter } from 'next/navigation';


export default function StartTest() {
  const router = useRouter();
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
            <p className="subtitle">3 personality traits; 9 questions; 1 minute</p>
            <button className="start-btn" onClick={() => router.push('/GoalQuestionnaire')}>Start FREE Test</button>
            <p className="note">
            Can’t find your goal? Let us know on <a href="#">Telegram</a> or <a href="#">request form</a>, and we’ll add it!
            </p>
        </div>
        </section>
        <Footer />
    </div>
  );
}
