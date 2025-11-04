import React from 'react';
import '../styles/newArrivals.css';

function NewArrivals() {
  // Array of new arrival products with name, price, and image
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
        {/* Loop through products array and render each product */}
        {products.map((p, index) => (
          <div key={index} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <span>{p.price}</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
