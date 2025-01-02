import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Logout.css'; // Import the CSS for styling

const Logout = ({ onLogout }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a logout process, such as clearing the token or session
    const logoutUser = () => {
      // Example of clearing session or token
      localStorage.removeItem("authToken"); // Clear user session (replace with your actual logic)
      setLoading(false); // Set loading to false once logout is complete
      onLogout(); // Call the onLogout prop to update authentication status in App.js
      navigate("/"); // Redirect to Login page after logout
    };

    // Simulate delay for logout (2 seconds)
    setTimeout(logoutUser, 2000);
  }, [navigate, onLogout]);

  return (
    <div className="logout-container">
      <div className="logout-message">
        {loading ? (
          <>
            <h1>Logging out...</h1>
            <p>You will be redirected to the login page shortly.</p>
            <div className="spinner"></div> {/* A simple loading spinner */}
          </>
        ) : (
          <>
            <h1>You have been logged out successfully!</h1>
            <p>Redirecting to the login page...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Logout;

