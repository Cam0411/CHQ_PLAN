import React from 'react';
import ProductArtistic from '../components/ProductArtistic';
import Contact from '../components/Contact';

const EcommerceOps = () => {
  return (
    <div className="pt-32">
      <ProductArtistic 
        title="OPERATE"
        subtitle="ECOMM"
        description="Streamlining digital commerce. Integrating logistics and growth marketing."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
        number="04"
        tags={['Logistics', 'Growth', 'Strategy']}
      />
      <Contact />
    </div>
  );
};

export default EcommerceOps;
