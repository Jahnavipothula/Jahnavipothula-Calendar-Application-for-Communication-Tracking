// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Admin />} /> {/* Admin as default */}
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';  // Import Create Account page
import ForgotPassword from './pages/ForgotPassword';  // Import Forgot Password page

function App() {
  // State to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login status
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Set the authentication status to false on logout
    localStorage.removeItem("authToken"); // Optionally clear any stored session data (e.g., auth token)
  };

  return (
    <Router>
      <Routes>
        {/* Public Login Page */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        
        {/* Create Account Route (Public) */}
        <Route path="/create-account" element={<CreateAccount />} />
        
        {/* Forgot Password Route (Public) */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Home Route */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/" />
          }
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            isAuthenticated ? <Admin /> : <Navigate to="/" />
          }
        />

        {/* Protected Routes for Other Pages */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/reports"
          element={
            isAuthenticated ? <Reports /> : <Navigate to="/" />
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/" />
          }
        />
        <Route
          path="/settings"
          element={
            isAuthenticated ? <Settings /> : <Navigate to="/" />
          }
        />
        
        {/* Logout Route */}
        <Route
          path="/logout"
          element={
            isAuthenticated ? <Logout onLogout={handleLogout} /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Importing your components
// import Admin from "./pages/Admin";
// import Dashboard from "./pages/Dashboard";
// import ReportingModule from "./pages/ReportingModule"; // Import the reporting module
// import HomePage from "./pages/HomePage"; // Import HomePage component
// import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage component
// import SettingsPage from "./pages/SettingsPage"; // Import SettingsPage component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Define all your routes here */}
//         <Route path="/" element={<Admin />} /> {/* Admin module */}
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
//         <Route path="/reporting" element={<ReportingModule />} /> {/* Reporting Module */}
//         <Route path="/home" element={<HomePage />} /> {/* Home Page */}
//         <Route path="/profile" element={<ProfilePage />} /> {/* Profile Page */}
//         <Route path="/settings" element={<SettingsPage />} /> {/* Settings Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

