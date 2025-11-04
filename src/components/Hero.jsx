import React, { useEffect, useState } from 'react';
import '../styles/hero.css';

function Hero() {
  // Array of hero images for the background slider
  const images = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png',
    '/images/hero4.png',
  ];

  // State to keep track of the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // useEffect to automatically change the background image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentImage index, looping back to 0 after the last image
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in-text">
            We offer you the best home decor products & items for a dream home
          </h1>
          <button className="slide-up-btn">Explore our products</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
