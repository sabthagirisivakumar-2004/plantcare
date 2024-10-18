import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signin.css';

const Signin = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [userData, setUserData] = useState([]); // Store the fetched user data
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Fetch user data when the component is mounted
    useEffect(() => {
        fetchUserData();
    }, []);

    // Fetch all users from the backend
    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users/all');
            setUserData(response.data); // Store the user data in state
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Function to check if username contains specific allowed domains
    const validateUsernameDomain = (username) => {
        const allowedDomains = ["@admin.com", "@gmail.com", "@vendor.com"];
        return allowedDomains.some((domain) => username.endsWith(domain));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Handle Signin form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({ username: '', password: '' });

        // Simple validation for empty fields
        if (!form.username || !form.password) {
            setErrors({
                username: !form.username ? 'Username is required' : '',
                password: !form.password ? 'Password is required' : ''
            });
            return;
        }

        // Domain validation for username
        if (!validateUsernameDomain(form.username)) {
            setErrors({
                username: 'Username must end with @admin.com, @gmail.com, or @vendor.com'
            });
            return;
        }

        // Check if the username and password match the stored data
        const foundUser = userData.find(user => user.username === form.username && user.password === form.password);

        if (foundUser) {
            console.log('Login successful!', foundUser);
            // If login is successful, navigate to the home page
            navigate('/home'); // Redirect to home page
        } else {
            setErrors({ username: 'Invalid username or password', password: '' });
        }
    };

    return (
        <>
            <div className="container" style={{ width: '1519px' }}>
                <img
                    src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ position: 'absolute', height: '676px', left: '515px', top: '10px', width: '1020px', borderTopLeftRadius: '20px', borderEndStartRadius: '20px' }}
                    alt="Background"
                />
                <div className="image-section"></div>
                <div
                    className="form-section"
                    style={{ marginRight: '950px', borderRadius: '40px', backgroundColor: 'rgba(255, 255, 255, 0.058)', width: '400px', transform: 'scale(1.05)' }}
                >
                    <form onSubmit={handleSubmit} className="form-container">
                        <h1 style={{ textAlign: 'center' }}>Signin</h1>
                        <div>
                            <label className="form-label">
                                <span style={{ marginRight: '300px', fontSize: '21px' }}>Username:</span>
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </label>
                            {errors.username && <p className="form-error">{errors.username}</p>}
                        </div>
                        <div>
                            <label className="form-label">
                                <span style={{ marginRight: '300px', fontSize: '21px' }}>Password:</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </label>
                            {errors.password && <p className="form-error">{errors.password}</p>}
                        </div>
                        <button type="submit" className="form-button" style={{ backgroundColor: '#40744D' }}>
                            Signin
                        </button>
                        <button type="button" className="toggle-button" style={{ backgroundColor: 'black' }}>
                            Don't have an account? Signup
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;
