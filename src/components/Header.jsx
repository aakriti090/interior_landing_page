import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">.INTERIOR</div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>
          <img src="/images/search-icon.png" alt="Search" />
        </button>
      </div>

      <div className="right-section">
        <ul className="nav-links">
          <li>New In</li>
          <li>Furniture</li>
          <li>Lights</li>
          <li>Rugs</li>
          <li>Decor</li>
          <li>Accessories</li>
        </ul>
        <div className="icons">
          <img src="/images/cart-icon.png" alt="Cart" />
          <img src="/images/user-icon.png" alt="User" />
        </div>
      </div>
    </header>
  );
}

export default Header;
