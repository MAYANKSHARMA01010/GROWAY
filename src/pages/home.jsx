import React from 'react';
import "../styles/globals.css";
import "../styles/home.css";

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import About from '../components/about.jsx';
import Contact from '../components/contact.jsx';

function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <About />
      <main className="main-content">
        {/* Your main content goes here */}
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
