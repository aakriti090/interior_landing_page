import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>We Provide best handpicked home decor</h2>
        <button className="explore-btn">Explore Our Products</button>
      </div>

      <div className="footer-middle">
        <div className="newsletter-section">
          <p>SUBSCRIBE TO RECEIVE GRAPE NEWS & OFFERS</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </form>
          <small>
            <input type="checkbox" /> I've read the Privacy Policy and I consent to Halal Interior sending me marketing communications
          </small>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <p>ALL PRODUCTS</p>
            <p>BEST SELLERS</p>
            <p>NEW ARRIVALS</p>
            <p>LOWEST PRICES</p>
            <p>DELIVERY</p>
          </div>
          <div className="link-column">
            <p>PRIVACY POLICY</p>
            <p>ORDER ONLINE</p>
            <p>CONTACT US</p>
            <p>RETURNS & CLAIMS</p>
          </div>
          <div className="link-column">
            <p>ABOUT US</p>
            <p>OUR PROMISE</p>
            <p>MY ACCOUNT</p>
          </div>
          <div className="link-column">
            <p>BLOG</p>
            <p>REVIEWS</p>
            <p>PRIVACY POLICY</p>
  
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-payment">
          <div className="social-icons">
            <a aria-label="Instagram" href="#">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a aria-label="Facebook" href="#">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a aria-label="Pinterest" href="#">
              <img src="/images/pinterest.png" alt="Pinterest" />
            </a>
            <a aria-label="Twitter" href="#">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        
        <p className="footer-note">© 2025 Interior. All Rights Reserved.</p>
        <p className="footer-terms">Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}

export default Footer;