import React from 'react';
import { Play } from 'lucide-react';

const VideoTestimonials = () => {
  const testimonials = [
    { name: "Alex Rivers", role: "CEO, TechFlow", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Chen", role: "Founder, Bloom", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Director, Zenith", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="py-32 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-4xl md:text-6xl font-display uppercase mb-16 tracking-tighter">What Clients Say</h4>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Play fill="currentColor" size={24} />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-display uppercase">{t.name}</p>
                <p className="text-xs uppercase tracking-widest opacity-60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
