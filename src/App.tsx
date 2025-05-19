import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'LUNGOV & BARROT - Advocacia';
    
    // Update header element
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = 'LUNGOV & BARROT - Advocacia';
      titleElement.removeAttribute('data-default');
    }
    
    // Add Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="font-sans antialiased">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
          <SpeedInsights/>
        </div>
  );
};

export default App;