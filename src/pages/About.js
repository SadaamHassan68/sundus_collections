import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <section className="about-hero">
      <h1>About Sundus Collection</h1>
      <p className="about-tagline">Your Premium Fashion Destination</p>
    </section>

    <section className="about-story">
      <h2>Our Story</h2>
      <p>
        Sundus Collection was founded with a passion for bringing the latest trends and timeless classics to fashion lovers everywhere. Our journey began with a simple idea: to make high-quality, stylish, and affordable clothing accessible to everyone. Over the years, we have grown into a trusted brand known for our commitment to quality, customer satisfaction, and a curated selection of apparel and accessories for men, women, and children.
      </p>
    </section>

    <section className="about-values">
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality First:</strong> We source only the finest materials and work with skilled artisans to ensure every piece meets our high standards.</li>
        <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority. We strive to provide exceptional service and a seamless shopping experience.</li>
        <li><strong>Inclusivity:</strong> Fashion is for everyone. Our collections are designed to celebrate diversity and empower individuals to express their unique style.</li>
        <li><strong>Innovation:</strong> We stay ahead of the trends, constantly updating our collections to bring you the latest in fashion.</li>
        <li><strong>Sustainability:</strong> We are committed to ethical sourcing and environmentally friendly practices to help protect our planet.</li>
      </ul>
    </section>

    <section className="about-cta">
      <h2>Join the Sundus Collection Family</h2>
      <p>
        Whether you're looking for the perfect outfit for a special occasion or everyday essentials, Sundus Collection has something for everyone. Explore our latest arrivals and experience the difference of shopping with a brand that truly cares.
      </p>
      <a href="/products" className="about-shop-btn">Shop Our Collection</a>
    </section>
  </div>
);

export default About; 