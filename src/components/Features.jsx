import React, { useEffect, useRef } from 'react';
import '../styles/features.css';

function Features() {
  // Array of feature objects, each containing a title and description
  const features = [
    {
      title: 'Unique & Modern Products',
      desc: 'A curation of beautiful design pieces for every room in your home.',
    },
    {
      title: 'Expertly Vetted Quality',
      desc: 'Beautiful, durable materials selected for a longer lifespan.',
    },
    {
      title: 'Delivery At Your Door',
      desc: 'Fast, secure shipping and full customer support at every step.',
    },
  ];

  // Ref to store references to each feature card for intersection observer
  const cardsRef = useRef([]);

  useEffect(() => {
    // Create an Intersection Observer to detect when cards enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' class when the card is visible in the viewport
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    // Observe each card using the Intersection Observer
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup function to unobserve cards when component unmounts
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="features">
      {/* Loop through features array and render each feature card */}
      {features.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="feature-card"
        >
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
