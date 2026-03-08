import React from 'react';

const SystemsArtistic = () => (
  <section className="relative min-h-screen bg-zinc-950 py-20 md:py-32 px-6 md:px-8 grid-lines flex flex-col justify-center">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <h2 className="text-huge font-display uppercase leading-none skew-text">
          SYSTEMS <br /> <span className="text-outline">CONTROL</span>
        </h2>
        <span className="md:vertical-text font-mono text-[10px] tracking-[0.5em] md:tracking-[0.8em] opacity-20 uppercase">Infrastructure // Automation // Intelligence</span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {[
          { title: "Sales Ops", desc: "Unified multi-channel management." },
          { title: "Warehouse", desc: "Real-time logistics tracking." },
          { title: "AI Bots", desc: "Custom LLM intelligence." },
          { title: "Workflows", desc: "Optimization & syncing." },
          { title: "Analytics", desc: "Deep performance reporting." },
          { title: "Cloud", desc: "Scalable architecture." }
        ].map((item, i) => (
          <div key={i} className="p-10 md:p-16 bg-black hover:bg-yellow-400 hover:text-black transition-all duration-700 group cursor-pointer">
            <span className="font-mono text-[10px] opacity-30 mb-8 block">0{i+1}</span>
            <h4 className="text-2xl md:text-3xl font-display uppercase mb-4">{item.title}</h4>
            <p className="text-[10px] md:text-xs opacity-40 group-hover:opacity-100 uppercase tracking-widest leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemsArtistic;
