import React from "react";
import "../styles/overview.css";

const GrowayOverview = () => {
  return (
    <section className="groway-overview" style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", fontWeight: "700", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Transform Yourself to Transform the World
      </h2>
      <blockquote
        style={{
          fontStyle: "italic",
          textAlign: "center",
          fontSize: "1.5rem",
          marginBottom: "2rem",
          color: "#555",
          borderLeft: "4px solid #22c55e",
          paddingLeft: "1rem",
        }}
      >
        "If you want to change the world, start with yourself."
        <br />
        <span style={{ fontWeight: "600", display: "block", marginTop: "0.5rem" }}>— Mahatma Gandhi</span>
      </blockquote>

      <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#14b8a6", textAlign: "center" }}>
        Unlock Your True Potential with Groway
      </h3>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center", maxWidth: "700px", margin: "0 auto 2rem" }}>
        Every profession requires a unique combination of skills and personal traits to achieve excellence. At Groway,
        we believe that success begins with self-awareness. That’s why we have identified the <strong>TOP-15 key traits</strong>{' '}
        that drive success in your chosen career path.
      </p>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
        <img
          src="https://groway.my/static/img/gandhi-landing/gandhi-landing-top-250.1b9113ec9326.png"
          alt="Top Traits Overview"
          style={{ maxWidth: "250px", width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
        />
        <img
          src="https://groway.my/static/img/gandhi-landing/gandhi-landing-middle-250.555f03d08156.png"
          alt="Self-Reflection & Growth"
          style={{ maxWidth: "250px", width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
        />
        <img
          src="https://groway.my/static/img/test-result/test-result-left-02-245.7482a0fae453.png"
          alt="Test Results Insights"
          style={{ maxWidth: "250px", width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
        />
      </div>

      <h4 style={{ fontSize: "1.6rem", marginBottom: "1rem", textAlign: "center", color: "#22c55e" }}>
        How Groway Helps You
      </h4>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
        <li style={{ marginBottom: "0.7rem" }}>
          <strong>Analyze Your Strengths and Weaknesses:</strong> Understand where you stand on the essential traits that matter most for your profession.
        </li>
        <li style={{ marginBottom: "0.7rem" }}>
          <strong>Personalized Insights:</strong> Receive detailed feedback tailored to your results, helping you focus on growth areas.
        </li>
        <li>
          <strong>Strategic Growth Plan:</strong> Get actionable advice to develop the traits that will make you a top performer.
        </li>
      </ul>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        Take the first step towards changing your world by understanding yourself better with Groway. Our platform empowers you with knowledge,
        clarity, and a roadmap to success.
      </p>
    </section>
  );
};

export default GrowayOverview;
