import React from 'react';
import ProductArtistic from '../components/ProductArtistic';
import ServiceCarousel from '../components/ServiceCarousel';
import VideoTestimonials from '../components/VideoTestimonials';
import Contact from '../components/Contact';

const CreativeMedia = () => {
  return (
    <div className="pt-32">
      <ProductArtistic 
        title="CREATIVE"
        subtitle="MEDIA"
        description="Full-scale production services for brands that want to stand out. Concept to final cut."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
        number="01"
        tags={['Cinematic', 'Art Direction', 'Motion']}
      />
      <ServiceCarousel />
      <VideoTestimonials />
      <Contact />
    </div>
  );
};

export default CreativeMedia;
