import React, { useEffect, useRef } from 'react';
import '../styles/features.css';

function Features() {
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

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="features">
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
