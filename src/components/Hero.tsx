import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: 1,
    title: "CASCADE:",
    subtitle: "THE XRS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Precision in every detail of the game."
  },
  {
    id: 2,
    title: "CREATIVE:",
    subtitle: "AGENCY",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    desc: "Visual storytelling that commands attention."
  },
  {
    id: 3,
    title: "DIGITAL:",
    subtitle: "FUTURE",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    desc: "Building the next generation of digital tools."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center">
      {/* Background Text / Large Title - Bottom Left */}
      <div className="absolute bottom-12 left-8 md:left-24 z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 50, opacity: 0, skewY: 5 }}
            animate={{ y: 0, opacity: 1, skewY: 0 }}
            exit={{ y: -50, opacity: 0, skewY: -5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-huge md:text-massive font-display uppercase leading-[0.75] tracking-tighter text-white">
              {slides[current].title} <br />
              {slides[current].subtitle}
            </h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 max-w-md text-xs md:text-sm font-mono tracking-[0.3em] uppercase"
            >
              {slides[current].desc}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Container - Positioned Right, Floating */}
      <div className="absolute top-1/2 right-0 md:right-12 -translate-y-1/2 w-[85%] h-[60%] md:w-[55%] md:h-[70%] z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: '100%', opacity: 0, scale: 1.2 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: '-100%', opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border border-white/5" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Vertical Text */}
      <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden lg:block z-0">
        <span className="vertical-text font-mono text-[10px] tracking-[1em] opacity-10 uppercase">
          CHQ // AGENCY // 2024
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-30">
        <span className="font-mono text-[9px] tracking-[0.5em] opacity-30 uppercase vertical-text">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
