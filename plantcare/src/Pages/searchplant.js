import React, { useState } from 'react';

const PlantSearch = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const [plants, setPlants] = useState([]); // State for storing plant data
    const [error, setError] = useState(''); // State for error messages
    const [searched, setSearched] = useState(false); // State to track if a search has been performed

    // Function to fetch plants by name
    const fetchPlantsByName = async () => {
        if (!searchTerm) {
            setPlants([]); // Clear plants if no search term
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/plants/search/${searchTerm}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPlants(data); // Set the fetched plants
            setError(''); // Clear error if fetch is successful
            setSearched(true); // Set searched to true after fetching
        } catch (error) {
            console.error('Error fetching plants:', error);
            setError('Failed to fetch plants. Please try again.');
            setSearched(true); // Set searched to true even on error
        }
    };

    return (
        <div>
            <h1>Search for Plants</h1>
            <input
                type="text"
                placeholder="Enter plant name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state
                style={{ marginBottom: '20px', padding: '8px' }}
            />
            <button onClick={fetchPlantsByName} style={{ padding: '8px 12px' }}>
                Search
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

            <div>
                {searched && plants.length > 0 ? ( // Only display results if a search has been performed
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {plants.map((plant) => (
                            <li key={plant.id} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px' }}>
                                <img src={plant.imageUrl} alt={plant.name} style={{ width: '100px', height: '100px' }} />
                                <h2>{plant.name}</h2>
                                <p>Price: ${plant.price}</p>
                                <p>Original Price: ${plant.originalPrice}</p>
                                <p>Discount: {plant.discount}</p>
                                <p>Rating: {plant.rating}</p>
                                <p>Available Sizes: {plant.availableSizes.join(', ')}</p>
                                <p>Category: {plant.category}</p>
                                <p>Description: {plant.description}</p>
                                <p>Tags: {plant.tags.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    searched && <p>No plants found with that name.</p> // Show this message only after a search
                )}
            </div>
        </div>
    );
};

export default PlantSearch;