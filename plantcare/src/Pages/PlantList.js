import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlantList.css'; // Custom CSS for plant list styling

const PlantList = ({ deletePlant, updatePlant }) => {
  const [plants, setPlants] = useState([]);

  // Fetch plants from the backend
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/plants/all');
        setPlants(response.data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="plant-list-container">
      <h2>Your Plants</h2>
      <div className="plant-list">
        {plants.length === 0 ? (
          <p>No plants added yet. Start adding your plants!</p>
        ) : (
          plants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>
                <p>Quantity: {plant.quantity}</p>
                <p>Category: {plant.category}</p>
                <button
                  onClick={() => updatePlant(plant)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePlant(plant.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlantList;
