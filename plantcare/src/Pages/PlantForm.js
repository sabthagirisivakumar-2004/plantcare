import React, { useState } from 'react';
import axios from 'axios';
import './PlantForm.css'; // Custom CSS for styling the form

const PlantForm = ({ addPlant, updatePlant, editingPlant }) => {
  const [plant, setPlant] = useState(
    editingPlant || {
      id: '',
      name: '',
      price: '',
      originalPrice: '',
      discount: '',
      rating: '',
      availableSizes: '',
      planterTypes: '',
      quantity: '',
      imageUrl: '',
      deliveryAvailable: false,
      dateAdded: '',
      category: '',
      description: '',
      stockAvailable: false,
      tags: '',
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setPlant({ ...plant, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const plantData = {
      ...plant,
      price: parseFloat(plant.price),
      originalPrice: parseFloat(plant.originalPrice),
      rating: parseFloat(plant.rating),
      availableSizes: plant.availableSizes.split(',').map((size) => size.trim()),
      planterTypes: plant.planterTypes.split(',').map((type) => type.trim()),
      quantity: parseInt(plant.quantity, 10),
      tags: plant.tags.split(',').map((tag) => tag.trim()),
    };

    try {
      await axios.post('http://localhost:8080/plants/add', plantData);
      addPlant(plantData);
      setPlant({
        id: '',
        name: '',
        price: '',
        originalPrice: '',
        discount: '',
        rating: '',
        availableSizes: '',
        planterTypes: '',
        quantity: '',
        imageUrl: '',
        deliveryAvailable: false,
        dateAdded: '',
        category: '',
        description: '',
        stockAvailable: false,
        tags: '',
      });
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <div className="plant-form-container">
      <h2>{editingPlant ? 'Update Plant' : 'Add New Plant'}</h2>
      <form onSubmit={handleSubmit} className="plant-form">
        <input
          type="text"
          name="name"
          value={plant.name}
          onChange={handleChange}
          placeholder="Plant Name"
          required
        />
        <input
          type="number"
          name="price"
          value={plant.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="originalPrice"
          value={plant.originalPrice}
          onChange={handleChange}
          placeholder="Original Price"
          required
        />
        <input
          type="text"
          name="discount"
          value={plant.discount}
          onChange={handleChange}
          placeholder="Discount"
          required
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          value={plant.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
        />
        <input
          type="text"
          name="availableSizes"
          value={plant.availableSizes}
          onChange={handleChange}
          placeholder="Available Sizes (comma separated)"
          required
        />
        <input
          type="text"
          name="planterTypes"
          value={plant.planterTypes}
          onChange={handleChange}
          placeholder="Planter Types (comma separated)"
          required
        />
        <input
          type="number"
          name="quantity"
          value={plant.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <input
          type="url"
          name="imageUrl"
          value={plant.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          name="dateAdded"
          value={plant.dateAdded}
          onChange={handleChange}
          placeholder="Date Added (YYYY-MM-DD)"
          required
        />
        <input
          type="text"
          name="category"
          value={plant.category}
          onChange={handleChange}
          placeholder="Category (e.g., Indoor, Outdoor)"
          required
        />
        <textarea
          name="description"
          value={plant.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="deliveryAvailable"
              checked={plant.deliveryAvailable}
              onChange={handleChange}
            />
            Delivery Available
          </label>
          <label>
            <input
              type="checkbox"
              name="stockAvailable"
              checked={plant.stockAvailable}
              onChange={handleChange}
            />
            Stock Available
          </label>
        </div>
        <input
          type="text"
          name="tags"
          value={plant.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          required
        />
        <button type="submit" className="submit-btn">
          {editingPlant ? 'Update Plant' : 'Add Plant'}
        </button>
      </form>
    </div>
  );
};

export default PlantForm;
