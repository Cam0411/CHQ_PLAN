import React from 'react';
import Hero from '../components/Hero';
import ProductArtistic from '../components/ProductArtistic';
import SystemsArtistic from '../components/SystemsArtistic';
import Contact from '../components/Contact';
import CreativeSlider from '../components/CreativeSlider';
import { Page } from '../types';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <>
      <Hero onNext={() => setActivePage('creative')} />
      
      <ProductArtistic 
        title="CREATIVE"
        subtitle="MEDIA"
        description="Pushing boundaries of visual storytelling. Cinematic production that commands attention."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
        number="01"
        tags={['Cinematic', 'Art Direction', 'Motion']}
      />

      <CreativeSlider />

      <ProductArtistic 
        title="PERFORM"
        subtitle="ADS"
        description="Data-driven strategies that scale. Focus on ROI and precision targeting."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        number="02"
        tags={['Google Ads', 'Meta', 'TikTok']}
      />

      <SystemsArtistic />

      <ProductArtistic 
        title="OPERATE"
        subtitle="ECOMM"
        description="End-to-end management for online stores. Complexity handled, growth delivered."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
        number="04"
        tags={['Logistics', 'Growth', 'Strategy']}
      />

      <ProductArtistic 
        title="DIGITAL"
        subtitle="WEBSITE"
        description="High-performance digital experiences. Powerful business tools, not just beauty."
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000"
        number="05"
        tags={['Next.js', 'React', 'Three.js']}
      />

      <Contact />
    </>
  );
};

export default Home;
