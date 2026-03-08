import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => (
  <section className="min-h-screen bg-black py-20 md:py-32 px-6 md:px-8 flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-400/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
       <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-5xl w-full text-center relative z-10"
    >
      <h2 className="text-huge font-display uppercase leading-none mb-12 skew-text">
        LET'S <span className="text-yellow-400">WORK</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
        <a href="mailto:hi@chq.agency" className="group p-10 md:p-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] md:rounded-[40px] hover:bg-yellow-400 hover:text-black transition-all duration-700">
          <Mail size={48} strokeWidth={1} className="mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl md:text-4xl font-display uppercase mb-4">Email Us</h3>
          <p className="text-lg md:text-xl opacity-60 group-hover:opacity-100">hi@chq.agency</p>
        </a>
        <a href="tel:+84123456789" className="group p-10 md:p-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] md:rounded-[40px] hover:bg-white hover:text-black transition-all duration-700">
          <Phone size={48} strokeWidth={1} className="mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl md:text-4xl font-display uppercase mb-4">Call Us</h3>
          <p className="text-lg md:text-xl opacity-60 group-hover:opacity-100">+84 123 456 789</p>
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pt-12 border-t border-white/10">
        <div className="flex gap-8 md:gap-12 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
          <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Behance</a>
        </div>
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30">© 2024 CHQ AGENCY. ALL RIGHTS RESERVED.</p>
      </div>
    </motion.div>
  </section>
);

export default Contact;
