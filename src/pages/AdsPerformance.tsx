import React from 'react';
import ProductArtistic from '../components/ProductArtistic';
import { BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const ProductAdsDetail = () => (
  <section className="min-h-screen py-32 px-8 grid-lines">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24">
        <span className="font-mono text-yellow-400 text-sm mb-4 block">PRODUCT_02</span>
        <h2 className="text-huge font-display uppercase leading-none skew-text mb-12">
          ADS <br /> <span className="text-outline">PERFORMANCE</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="p-12 glass-card">
            <h4 className="text-2xl font-display uppercase mb-4">Precision Targeting</h4>
            <p className="text-zinc-400 font-light leading-relaxed">We use advanced audience modeling to ensure your ads reach the right people at the right time. No wasted spend, just results.</p>
          </div>
          <div className="p-12 glass-card">
            <h4 className="text-2xl font-display uppercase mb-4">Creative Optimization</h4>
            <p className="text-zinc-400 font-light leading-relaxed">Continuous A/B testing of creative assets to find the highest-converting combinations for your brand.</p>
          </div>
        </div>
        <div className="aspect-square bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center relative">
           <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-3xl" />
           <BarChart3 size={200} className="text-yellow-400 opacity-20" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl font-display uppercase">92%</span>
                <p className="text-xs uppercase tracking-[0.4em] opacity-40">Avg. ROI Increase</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const AdsPerformance = () => {
  return (
    <div className="pt-32">
      <ProductArtistic 
        title="PERFORM"
        subtitle="ADS"
        description="Data-driven strategies that scale. Focus on ROI and precision targeting."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        number="02"
        tags={['Google Ads', 'Meta', 'TikTok']}
      />
      
      <ProductAdsDetail />

      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-display uppercase mb-16">Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Avg. ROAS", value: "4.8x" },
              { label: "Growth Rate", value: "+120%" },
              { label: "Ad Spend", value: "$2M+" },
              { label: "Conversions", value: "50k+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-white/10 rounded-3xl"
              >
                <p className="text-5xl font-display text-yellow-400 mb-4">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest opacity-40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdsPerformance;
