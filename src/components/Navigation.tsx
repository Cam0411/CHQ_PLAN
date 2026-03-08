import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Page } from '../types';

const Navigation = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  const menuItems: { id: Page, label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'creative', label: 'Creative Media' },
    { id: 'ads', label: 'Ads Performance' },
    { id: 'systems', label: 'Management Systems' },
    { id: 'ecommerce', label: 'Ecommerce Ops' },
    { id: 'web', label: 'Creative Website' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      setTimeout(() => firstItemRef.current?.focus(), 100);
    } else {
      window.removeEventListener('keydown', handleEscape);
      triggerRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <nav 
        aria-label="Main Navigation"
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-8 py-8 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <button 
            ref={triggerRef}
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            aria-expanded={isOpen}
            aria-controls="main-menu"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-yellow-400 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
              <div className="relative z-10 flex flex-col gap-1">
                <div className="w-4 h-0.5 bg-black" />
                <div className="w-4 h-0.5 bg-black" />
              </div>
            </div>
            <span className="font-display text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-white">// MENU</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white">
          <a href="mailto:hi@36.agency" className="hover:text-yellow-400 transition-colors">hi@36.agency</a>
          <a href="tel:+1.855.362.7328" className="hover:text-yellow-400 transition-colors">+1.855.362.7328</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full border border-white/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.5)]"></div>
          </div>
          
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/10 rounded-full">
            <span className="text-[10px] md:text-[12px] font-display leading-none text-center text-white">
              30<br/><span className="text-[6px] md:text-[8px] opacity-50">YEARS</span>
            </span>
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
            </svg>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="main-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[200] flex flex-col md:flex-row"
          >
            <div className="flex-1 p-8 md:p-24 flex flex-col justify-center overflow-y-auto">
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="absolute top-8 md:top-12 right-8 md:right-12 p-4 hover:rotate-90 transition-transform duration-500 z-10"
              >
                <X size={40} md:size={64} strokeWidth={1} />
              </button>

              <div className="flex flex-col gap-2 mb-12 md:mb-0">
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    ref={idx === 0 ? firstItemRef : null}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      setActivePage(item.id);
                      setIsOpen(false);
                    }}
                    aria-label={`Go to ${item.label} page`}
                    className="group relative text-left"
                  >
                    <span className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 text-[10px] md:text-sm font-mono opacity-0 group-hover:opacity-40 transition-opacity" aria-hidden="true">0{idx}</span>
                    <span className={`font-display text-3xl sm:text-4xl md:text-[5vw] uppercase tracking-tighter leading-[0.85] transition-all duration-500 ${activePage === item.id ? 'text-yellow-400' : 'text-white hover:text-yellow-400 group-hover:skew-x-[-10deg]'}`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile-only footer info */}
              <div className="md:hidden mt-auto pt-12 border-t border-white/10 space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-4">Socials</p>
                  <div className="flex gap-6 text-sm font-display uppercase">
                    <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-4">Office</p>
                  <p className="text-sm font-light opacity-60">District 1, Ho Chi Minh City</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex w-1/3 bg-zinc-900 p-24 flex-col justify-end border-l border-white/5">
              <div className="space-y-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-6">Socials</p>
                  <div className="flex flex-col gap-2 text-2xl font-display uppercase">
                    <a href="#" aria-label="Visit our Instagram" className="hover:text-yellow-400 transition-colors">Instagram</a>
                    <a href="#" aria-label="Visit our LinkedIn" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
                    <a href="#" aria-label="Visit our Behance" className="hover:text-yellow-400 transition-colors">Behance</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-6">Office</p>
                  <p className="text-xl font-light opacity-60">District 1, Ho Chi Minh City<br />Vietnam, 700000</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
