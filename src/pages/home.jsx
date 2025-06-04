import React from 'react';
import "../styles/globals.css";
import "../styles/home.css";

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import About from '../components/about.jsx';
import Contact from '../components/contact.jsx';
import HeroSection from '../components/herosection.jsx';
import ResultTable from '../components/resulttable.jsx';
import GrowayOverview from '../components/overview.jsx';


function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <HeroSection />
      <GrowayOverview />
      <main className="main-content">
        <div id='about'>
          <About />  
        </div>
        <div id='resulttable'>
          <ResultTable />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
