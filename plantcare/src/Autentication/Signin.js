import React from 'react'
import "./Signin.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({  email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const navigate=useNavigate();
  const tosignin = () =>{
    navigate("/");
  }
  return (
    <>
    <div className="container" style={{width:"1519px"}}>
    <img src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{position:"absolute",height:"676px",left:"515px",top:"10px",width:"1020px",borderTopLeftRadius:"20px",borderEndStartRadius:"20px"}}></img>
      <div className="image-section"></div>
      <div className="form-section" style={{marginRight:"950px",borderRadius:"40px", backgroundColor: "rgba(255, 255, 255, 0.058)",width:"400px",
        transform: "scale(1.05)"}}>
        <form onSubmit="" className="form-container">
          <h1 style={{ textAlign: "center" }}>
            Signin
          </h1> 
          <div>
            <label className="form-label">
             <span style={{marginRight:"300px",fontSize:"21px"}}> Email:</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
                style={{}}
              />
            </label>
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label">
            <span style={{marginRight:"300px",fontSize:"21px"}}>Password:</span>
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
          <button type="submit" className="form-button" onClick="" style={{backgroundColor:"#40744D"}}>
            Signin
          </button>
          <button type="button"  className="toggle-button" style={{backgroundColor:"black"}} onClick={tosignin}>
          Don't have an account? Signup
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup