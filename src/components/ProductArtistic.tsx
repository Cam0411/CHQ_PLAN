import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ProductArtistic = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  number,
  tags 
}: { 
  title: string, 
  subtitle: string, 
  description: string, 
  image: string, 
  number: string,
  tags: string[]
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-16">
        <div className="flex justify-between items-start">
          <span className="font-mono text-yellow-400 text-xs md:text-sm tracking-widest">{number}</span>
          <div className="flex flex-col items-end gap-1 md:gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
          <motion.div style={{ y: yText }} className="max-w-4xl w-full">
            <h2 className="text-huge font-display uppercase leading-[0.8] skew-text blend-exclusion break-words">
              {title} <br /> <span className="text-outline">{subtitle}</span>
            </h2>
          </motion.div>
          
          <div className="max-w-xs text-right mb-4 md:mb-0">
            <p className="text-[10px] md:text-xs font-light leading-relaxed opacity-60 uppercase tracking-widest">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArtistic;
