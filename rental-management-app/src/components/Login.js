import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin' // Default role selection
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    // For demonstration purposes, let's just log the form data
    console.log(formData);
  };

  const handleToggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h5>Welcome To Rental Management System</h5>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username or Email"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="admin">Admin</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
          <button type="submit">Sign In</button>
          <a href="#">Forgot your password?</a>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleToggleForm}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleToggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
