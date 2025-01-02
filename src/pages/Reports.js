// import React, { useState } from "react";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// // Register necessary components for Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const Reports = () => {
//   const [frequencyData, setFrequencyData] = useState({
//     labels: ["LinkedIn Post", "Email", "Phone Call", "LinkedIn Message", "Other"],
//     datasets: [
//       {
//         label: "Communication Frequency",
//         data: [12, 8, 5, 7, 3], // Example data
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const [engagementData, setEngagementData] = useState({
//     labels: ["LinkedIn Post", "Email", "Phone Call", "LinkedIn Message", "Other"],
//     datasets: [
//       {
//         label: "Engagement Effectiveness",
//         data: [70, 50, 60, 80, 30], // Example data
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 205, 86, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   });

//   return (
//     <div>
//       <h2>Communication Frequency Report</h2>
//       <Bar data={frequencyData} />
      
//       <h2>Engagement Effectiveness Report</h2>
//       <Doughnut data={engagementData} />
//     </div>
//   );
// };

// export default Reports;

import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Link } from "react-router-dom"; // Importing Link for navigation

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState("frequency"); // Track which report is selected
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state (open/close)

  // Communication Frequency Data
  const frequencyData = {
    labels: ["LinkedIn Post", "Email", "Phone Call", "LinkedIn Message", "Other"],
    datasets: [
      {
        label: "Communication Frequency",
        data: [12, 8, 5, 7, 3], // Example data
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Engagement Effectiveness Data
  const engagementData = {
    labels: ["LinkedIn Post", "Email", "Phone Call", "LinkedIn Message", "Other"],
    datasets: [
      {
        label: "Engagement Effectiveness",
        data: [70, 50, 60, 80, 30], // Example data
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Handle Menu Toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      {/* Floating Menu Button */}
      <button 
        onClick={handleMenuToggle} 
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          border: "none",
        }}
      >
        ☰ Menu
      </button>

      {/* Menu (appears on button click) */}
      {menuOpen && (
        <div 
          style={{
            position: "absolute",
            top: "50px",
            right: "20px",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            zIndex: 1,
          }}
        >

             <Link
                            to="/home"
                            style={{
                              display: "block",
                              padding: "8px 16px",
                              textDecoration: "none",
                              color: "#007bff",
                              borderRadius: "3px",
                              marginBottom: "8px",
                              fontSize: "16px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            Home
                          </Link>
          <Link 
            to="/admin"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#007bff",
              borderRadius: "3px",
              marginBottom: "8px",
              fontSize: "16px",
              backgroundColor: "#f0f0f0",
            }}
          >
            Admin Page
          </Link>
          <Link 
            to="/dashboard" 
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#007bff",
              borderRadius: "3px",
              fontSize: "16px",
              backgroundColor: "#f0f0f0",
            }}
          >
            Dashboard
          </Link>
           <Link
                          to="/profile"
                          style={{
                            display: "block",
                            padding: "8px 16px",
                            textDecoration: "none",
                            color: "#007bff",
                            borderRadius: "3px",
                            marginBottom: "8px",
                            fontSize: "16px",
                            backgroundColor: "#f0f0f0",
                          }}
                        >
                          Profile
                        </Link>
                         <Link
                                        to="/settings"
                                        style={{
                                          display: "block",
                                          padding: "8px 16px",
                                          textDecoration: "none",
                                          color: "#007bff",
                                          borderRadius: "3px",
                                          marginBottom: "8px",
                                          fontSize: "16px",
                                          backgroundColor: "#f0f0f0",
                                        }}
                                      >
                                        Settings
                                      </Link>
        </div>
      )}

      {/* Menu Buttons to Toggle Reports */}
      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={() => setSelectedReport("frequency")} 
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Communication Frequency Report
        </button>
        <button 
          onClick={() => setSelectedReport("engagement")} 
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Engagement Effectiveness Report
        </button>
      </div>

      {/* Display the selected report */}
      {selectedReport === "frequency" && (
        <>
          <h2>Communication Frequency Report</h2>
          <Bar data={frequencyData} />
        </>
      )}

      {selectedReport === "engagement" && (
        <>
          <h2>Engagement Effectiveness Report</h2>
          <Doughnut data={engagementData} />
        </>
      )}
    </div>
  );
};

export default Reports;
