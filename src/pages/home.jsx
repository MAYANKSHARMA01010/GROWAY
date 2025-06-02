import React from 'react';
import "../styles/globals.css";
import "../styles/home.css";

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="main-content">
        {/* Your main content goes here */}
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
