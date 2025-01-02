// import React from "react"; // Import React
// import CommunicationFrequencyChart from "../components/CommunicationFrequencyChart"; // Import your chart component

// const ReportingModule = () => {
//   return (
//     <div>
//       <h1>Reporting and Analytics</h1> {/* Page Title */}
//       <CommunicationFrequencyChart /> {/* Chart Component */}
//     </div>
//   );
// };

// export default ReportingModule; // Export the page

import React from "react"; // Import React
import CommunicationFrequencyChart from "../components/CommunicationFrequencyChart"; // Import your chart component

const ReportingModule = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "30px" }}>Reporting and Analytics</h1>
      <div 
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CommunicationFrequencyChart /> {/* Chart Component */}
      </div>
    </div>
  );
};

export default ReportingModule; // Export the page

