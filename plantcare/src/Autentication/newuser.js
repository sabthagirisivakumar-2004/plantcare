import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ username: "", password: "" });

        // Simple form validation
        if (!form.username || !form.password) {
            setErrors({
                username: !form.username ? "Username is required" : "",
                password: !form.password ? "Password is required" : "",
            });
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/users/create", form);
            if (response.status === 200) {
                console.log("User created successfully");
                navigate("/Signin");
            } else {
                console.error("Error: ", response);
            }
        } catch (error) {
            console.error("Error creating user: ", error);
        }
    };

    return (
        <>
            <div className="container" style={{ width: "1519px" }}>
                <img src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    style={{ position: "absolute", height: "676px", left: "515px", top: "10px", width: "1020px", borderTopLeftRadius: "20px", borderEndStartRadius: "20px" }} 
                />
                <div className="form-section" style={{ marginRight: "950px", borderRadius: "40px", backgroundColor: "rgba(255, 255, 255, 0.058)", width: "400px", transform: "scale(1.05)" }}>
                    <form onSubmit={handleSubmit} className="form-container">
                        <h1 style={{ textAlign: "center" }}>Signup</h1>
                        <div>
                            <label className="form-label">
                                <span style={{ marginRight: "300px", fontSize: "21px" }}>Username:</span>
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
                                <span style={{ marginRight: "300px", fontSize: "21px" }}>Password:</span>
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
                        <button type="submit" className="form-button" style={{ backgroundColor: "#40744D" }}>
                            Signup
                        </button>
                        <button type="button" className="toggle-button" style={{ backgroundColor: "black" }}>
                            Already have an account? Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;