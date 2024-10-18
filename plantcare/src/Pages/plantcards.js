import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';
import './Plantcards.css'; // Custom CSS for styling the cards

const PlantCards = () => {
  const [plants, setPlants] = useState([]);
// React Router's history for programmatic navigation
const navigate=useNavigate();
  // Fetch all plants from the backend
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/plants/all'); // Adjust this URL to your backend API
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  // Navigate to Product Page when a plant card is clicked
  const handleCardClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product page using the plant id
  };

  return (
    <div className="plant-cards-container">
      {plants.slice(0, 4).map((plant) => ( // Limit to first 4 plants
        <div
          key={plant.id}
          className="plant-card"
          onClick={() => handleCardClick(plant.id)} // Add click handler
        >
          <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
          <h3 className="plant-name">{plant.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PlantCards;
