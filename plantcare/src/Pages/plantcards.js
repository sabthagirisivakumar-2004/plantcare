import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Plantcards.css'; // Custom CSS for styling the cards

const PlantCards = () => {
    const [plants, setPlants] = useState([]);

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

    return (
        <div className="plant-cards-container">
        {plants.slice(0, 4).map((plant) => ( // Limit to first 4 plants
            <div key={plant.id} className="plant-card">
                <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
                <h3 className="plant-name">{plant.name}</h3>
            </div>
        ))}
        </div>
    );
};

export default PlantCards;
