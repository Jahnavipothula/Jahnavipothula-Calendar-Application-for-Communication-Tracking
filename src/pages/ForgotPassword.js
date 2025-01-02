import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css'; // Add styling for Forgot Password page

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    
    // Placeholder logic for password reset
    console.log("Password reset request sent for email:", email);
    setMessage("If the email is registered, a reset link will be sent.");
    setTimeout(() => navigate("/login"), 3000); // Redirect to login after a few seconds
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handlePasswordReset}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="forgot-password-button">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
