import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ServiceCarousel = () => {
  const services = [
    { title: "Film & Video", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", desc: "Cinematic storytelling that captures the essence of your brand." },
    { title: "Photography", img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800", desc: "High-end commercial photography for digital and print." },
    { title: "3D Motion", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800", desc: "Dynamic 3D animations that bring products to life." },
    { title: "Branding", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", desc: "Strategic visual identities that resonate with audiences." }
  ];

  return (
    <div className="py-32 overflow-hidden">
      <div className="px-8 mb-12">
        <h4 className="text-4xl font-display uppercase tracking-tighter">Explore Our Expertise</h4>
      </div>
      <motion.div 
        drag="x"
        dragConstraints={{ right: 0, left: -1200 }}
        className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
      >
        {services.map((service, i) => (
          <motion.div 
            key={i}
            className="min-w-[350px] md:min-w-[450px] aspect-[4/5] relative group rounded-2xl overflow-hidden"
          >
            <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <h5 className="text-3xl font-display uppercase mb-2">{service.title}</h5>
              <p className="text-sm opacity-60 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="px-8 mt-8 flex items-center gap-4 opacity-30">
        <ArrowRight size={16} />
        <span className="text-[10px] uppercase tracking-[0.3em]">Drag to explore</span>
      </div>
    </div>
  );
};

export default ServiceCarousel;
