import React from 'react';
import ProductArtistic from '../components/ProductArtistic';
import ProcessTimeline from '../components/ProcessTimeline';
import Contact from '../components/Contact';

const CreativeWebsite = () => {
  return (
    <div className="pt-32">
      <ProductArtistic 
        title="DIGITAL"
        subtitle="WEBSITE"
        description="Websites that work as hard as you do. Cutting-edge tech with world-class design."
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000"
        number="05"
        tags={['Next.js', 'React', 'Three.js']}
      />
      <ProcessTimeline />
      <Contact />
    </div>
  );
};

export default CreativeWebsite;
