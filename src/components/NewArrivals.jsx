import React from 'react';
import ProductCard from './ProductCard';
import '../styles/newarrivals.css';

function NewArrivals() {
  const products = [
    { name: 'Arm Sofa', price: '$465.00', image: '/images/armchair.png' },
    { name: 'Wooden Sofa', price: '$485.00', image: '/images/sofa2.png' },
    { name: 'Cozy Lounge', price: '$445.00', image: '/images/sofa3.png' },
    { name: 'Minimalist Sofa', price: '$495.00', image: '/images/sofa4.png' },
  ];

  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <p>Discover our latest designs crafted to elevate your living experience.</p>
      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
