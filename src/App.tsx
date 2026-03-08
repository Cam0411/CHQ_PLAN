import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CreativeMedia from './pages/CreativeMedia';
import AdsPerformance from './pages/AdsPerformance';
import ManagementSystems from './pages/ManagementSystems';
import EcommerceOps from './pages/EcommerceOps';
import CreativeWebsite from './pages/CreativeWebsite';
import Contact from './components/Contact';
import { Page } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <main className="relative bg-black text-white selection:bg-yellow-400 selection:text-black min-h-screen noise-bg">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {activePage === 'home' && <Home setActivePage={setActivePage} />}
          {activePage === 'creative' && <CreativeMedia />}
          {activePage === 'ads' && <AdsPerformance />}
          {activePage === 'systems' && <ManagementSystems />}
          {activePage === 'ecommerce' && <EcommerceOps />}
          {activePage === 'web' && <CreativeWebsite />}
          {activePage === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-[100]">
        <motion.div 
          className="h-full bg-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.5)]"
          animate={{ 
            width: activePage === 'home' ? '10%' : 
                   activePage === 'creative' ? '30%' : 
                   activePage === 'ads' ? '50%' : 
                   activePage === 'systems' ? '70%' : 
                   activePage === 'ecommerce' ? '85%' : '100%' 
          }}
        />
      </div>
    </main>
  );
}
