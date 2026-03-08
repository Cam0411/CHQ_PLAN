import React from 'react';
import { motion } from 'motion/react';

const ProcessTimeline = () => {
  const steps = [
    { step: "01", title: "Strategy", desc: "We define the goals and roadmap for your digital presence." },
    { step: "02", title: "Design", desc: "Crafting a unique visual language and user experience." },
    { step: "03", title: "Build", desc: "Developing with the latest tech for speed and reliability." },
    { step: "04", title: "Launch", desc: "Rigorous testing followed by a seamless deployment." }
  ];

  return (
    <div className="py-32 px-8">
      <div className="mb-20">
        <h4 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">Our Process</h4>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pt-12 border-t border-white/10 group"
          >
            <span className="absolute top-4 left-0 font-mono text-yellow-400 text-sm group-hover:text-white transition-colors">{item.step}</span>
            <h5 className="text-2xl font-display uppercase mb-4 group-hover:text-yellow-400 transition-colors">{item.title}</h5>
            <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
