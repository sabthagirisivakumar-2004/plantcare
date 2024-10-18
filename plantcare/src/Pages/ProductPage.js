import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css'; // Import the custom CSS for styling the product page
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [plant, setPlant] = useState(null);
  const { id } = useParams(); // Use the ID from the URL (should be a string)

  useEffect(() => {
    // Fetch plant data from the server using the plant id passed via route
    const fetchPlantData = async () => {
      try {
        // Ensure the ID is sent as a string in the URL
        const response = await axios.get(`http://localhost:8080/plants/search/${String(id)}`);
        setPlant(response.data);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    if (id) {
      fetchPlantData();
    }
  }, [id]);

  if (!plant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={plant.imageUrl} alt={plant.name} />
      </div>
      <div className="product-details">
        <h1>{plant.name}</h1>
        <p className="product-price">
          ${plant.price.$numberDouble} <span className="original-price">${plant.originalPrice.$numberDouble}</span>
          <span className="discount">{plant.discount}</span>
        </p>
        <p className="product-rating">Rating: {plant.rating.$numberDouble} &#9733;</p>
        <p className="product-description">{plant.description}</p>
        
        <div className="product-extra-info">
          <p><strong>Available Sizes:</strong> {plant.availableSizes.join(', ')}</p>
          <p><strong>Planter Types:</strong> {plant.planterTypes.join(', ')}</p>
          <p><strong>Stock Available:</strong> {plant.quantity.$numberInt}</p>
          <p><strong>Category:</strong> {plant.category}</p>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
