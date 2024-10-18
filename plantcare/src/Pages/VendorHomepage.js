import React, { useState } from 'react';
import './VendorHomepage.css'; // Custom CSS for vendor-specific styling
import PlantForm from './PlantForm'; // Form for adding/updating plants
import PlantList from './PlantList'; // List to display vendor's plants
import { useNavigate } from 'react-router-dom';

const VendorHomepage = () => {
  // State to manage vendor plants
  const [plants, setPlants] = useState([]);
  const navigate=useNavigate();
  const handle = () =>{
    navigate('/Signin');
  }
  // Function to add new plant
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Function to delete a plant
  const deletePlant = (id) => {
    setPlants(plants.filter(plant => plant.id !== id));
  };

  // Function to update a plant
  const updatePlant = (updatedPlant) => {
    setPlants(plants.map(plant => (plant.id === updatedPlant.id ? updatedPlant : plant)));
  };

  return (
    <>
      {/* Vendor Header Section */}
      <header className="vendor-header">
        <div className="vendor-logo">Plantify Vendor</div>
        <div className="vendor-header-right">
          {/* Avatar for Account Section */}
          <div className="avatar-dropdown">
            <img 
              src="https://www.w3schools.com/howto/img_avatar.png" 
              alt="Vendor Avatar" 
              className="vendor-avatar" 
              style={{width:"60px",height:"60px",borderRadius:"60px",position:"absolute",top:"5px",right:"90px"}}
            />
            <div className="dropdown-content">
              
            </div>
            </div>
            <a onClick={handle}>Logout</a>
            </div>
      </header>

      {/* Vendor Dashboard Section */}
      <section className="vendor-dashboard">
        <h1>Welcome, Vendor!</h1>
        <p>Manage your plants by adding, updating, or deleting them below.</p>

        {/* Plant Form Section */}
        <PlantForm addPlant={addPlant} />

        {/* Display Vendor Plants */}
        <PlantList plants={plants} deletePlant={deletePlant} updatePlant={updatePlant} />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and About Section */}
          <div className="footer-logo-section">
            <img 
              src="https://marketplace.canva.com/EAFARQc8rxY/1/0/1600w/canva-teal-blue-green-floral-wreath-plant-logo-WGaKDiiFFUQ.jpg" 
              alt="Plantify Logo" 
              className="footer-logo" 
              style={{borderRadius: "80px"}} 
            />
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

export default VendorHomepage;
