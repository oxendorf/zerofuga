import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AiSection from './components/AiSection';
import CrmSection from './components/CrmSection';
import GmbSection from './components/GmbSection';
import RecoverySection from './components/RecoverySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#00ff88] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AiSection />
        <CrmSection />
        <GmbSection />
        <RecoverySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;