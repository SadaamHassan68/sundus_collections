import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Sundus Collection</h1>
        <p>Your Premier Destination for Fashion Excellence</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for fashion and a commitment to quality, Sundus Collection
            has grown from a small boutique to a leading fashion destination. We believe in
            bringing you the finest selection of clothing and accessories that combine
            style, comfort, and elegance.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Sundus Collection, we strive to provide our customers with exceptional
            fashion choices that reflect their unique style. We are committed to:
          </p>
          <ul>
            <li>Curating the finest quality products</li>
            <li>Providing outstanding customer service</li>
            <li>Staying ahead of fashion trends</li>
            <li>Ensuring sustainable and ethical practices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Quality Assured</h3>
              <p>Every product meets our high standards of quality and craftsmanship.</p>
            </div>
            <div className="feature">
              <h3>Trending Styles</h3>
              <p>Stay ahead with our carefully selected latest fashion trends.</p>
            </div>
            <div className="feature">
              <h3>Customer First</h3>
              <p>Your satisfaction is our top priority with 24/7 support.</p>
            </div>
            <div className="feature">
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 