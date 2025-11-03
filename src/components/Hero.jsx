import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in-text">
            We offering you the best home decor products & items for a dream home
          </h1>
          <button className="slide-up-btn">Explore our products</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
