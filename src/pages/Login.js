import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';  // Importing the CSS for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To handle login errors
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const adminCredentials = {
      username: "admin",
      password: "admin123",
    };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      onLogin(true); // Update authentication state
      navigate("/home"); // Redirect to home page
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="footer">
       
       
<p>
  Don't have an account? <a href="/create-account">Create Account</a>
</p>
<p className="forgot-password">
  <a href="/forgot-password">Forgot Password?</a>
</p>

        </div>
      </div>
    </div>
  );
};

export default Login;

