import React from 'react';
import '../styles/newarrivals.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{price}</span>
    </div>
  );
}

export default ProductCard;
