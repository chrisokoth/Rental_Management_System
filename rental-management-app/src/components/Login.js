import React, { useState } from 'react';
import './Login.css';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin' // Default role selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    // For demonstration purposes, let's just log the form data
    console.log(formData);
  };

  return (
    <div className="login-page">
      <h2>Welcome to Rental Management System</h2>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Login as:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="admin">Admin</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
