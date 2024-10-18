import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import './Homepage.css'; // Custom CSS for styling
import PlantCard from "../Pages/plantcards";
const HomePage = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="logo">Plantify</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for plants, pots, tools..." />
          <button>Search</button>
        </div>
        <div className="header-right">
          <a href="/account">Account</a>
          <a href="/cart">Cart</a>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="carousel-section">
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    interval={3000}
    className="custom-carousel"
  >
    <div>
      <img
        src="https://images.unsplash.com/photo-1525247862234-30193931fdf7?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beautiful indoor plants"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <p className="legend">Indoor Plants</p>
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Outdoor Plants Collection"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <p className="legend">Outdoor Plants</p>
    </div>
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1679504029329-0dfac5d2d0e5?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Exclusive Gardening Tools"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <p className="legend">Gardening Tools</p>
    </div>
  </Carousel>
</section>


      {/* Featured Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <PlantCard/>
      </section>

      {/* Popular Products Section */}
      <section className="popular-products">
        <h2 style={{marginLeft:"75px"}}>Popular Plants</h2>
        <PlantCard/>
      </section>

      {/* Deals Section */}
      {/* Deals Section */}
<section className="deals">
<h2 className="deals-heading">Deal of the Day</h2>
<div className="deal-item">
  <div className="deal-image-container">
    <img 
      src="https://plus.unsplash.com/premium_photo-1667509217647-fd817172d5c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Deal Plant" 
      className="deal-image"
    />
    <span className="discount-badge">50% OFF</span> {/* Discount badge */}
  </div>
  <div className="deal-info">
    <h3>Aloe Vera Plant</h3>
    <p className="original-price">$20.00</p>
    <p className="discounted-price">Now $10.00</p>
    <p className="deal-description">The Aloe Vera plant is known for its medicinal properties and is perfect for both indoor and outdoor environments. Easy to care for and stylish in any setting!</p>
    <button className="deal-button">Shop Now</button>
  </div>
</div>
</section>


      {/* Footer Section */}
      <footer className="footer">
  <div className="footer-container">
    {/* Logo and About Section */}
    <div className="footer-logo-section">
      <img src="https://marketplace.canva.com/EAFARQc8rxY/1/0/1600w/canva-teal-blue-green-floral-wreath-plant-logo-WGaKDiiFFUQ.jpg" alt="Plantify Logo" className="footer-logo" style={{borderRadius:"80px"}}/>
      <p className="footer-about">
        Plantify is your go-to platform for all things green! Explore our vast collection of indoor and outdoor plants, pots, and gardening tools. Let’s make your space greener and healthier.
      </p>
    </div>

    {/* Footer Links Section */}
    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="/about">About Us</a>
      <a href="/contact">Contact Us</a>
      <a href="/faq">FAQs</a>
    </div>

    {/* Social Media Section */}
    <div className="social-media">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6ObjBZF7Bc1P7fSKJwQXJfFUCqfQY1U4DQ&s" className="social-icon">
          <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
        </a>
        <a href="/instagram" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/twitter" className="social-icon">
                
        <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>&copy; 2024 Plantify. All rights reserved.</p>
  </div>
</footer>

    </>
  );
};

export default HomePage;
