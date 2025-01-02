import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "20px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "24px" }}>Menu</h2>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link
                to="/admin"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#34495e",
                  fontSize: "18px",
                }}
              >
                Admin Page
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#34495e",
                  fontSize: "18px",
                }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#34495e",
                  fontSize: "18px",
                }}
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#34495e",
                  fontSize: "18px",
                }}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#34495e",
                  fontSize: "18px",
                }}
              >
                Settings
              </Link>
            </li>

            <li>
              <Link
                to="/"

                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#e74c3c",
                  fontSize: "18px",
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#e74c3c",
                  fontSize: "18px",
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p style={{ fontSize: "14px", textAlign: "center" }}>© 2024 Your Company</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", backgroundColor: "#f4f6f8" }}>
        <h1 style={{ textAlign: "center", fontSize: "36px", color: "#2c3e50" }}>Welcome to the Home Page</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#7f8c8d" }}>
          This is the homepage where you can navigate to different sections of the application.
        </p>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           width: "250px",
//           backgroundColor: "#2c3e50",
//           color: "white",
//           padding: "20px",
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <h2 style={{ textAlign: "center", fontSize: "24px" }}>Menu</h2>
//         <nav>
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Link
//                 to="/admin"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#34495e",
//                   fontSize: "18px",
//                 }}
//               >
//                 Admin Page
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#34495e",
//                   fontSize: "18px",
//                 }}
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/reports"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#34495e",
//                   fontSize: "18px",
//                 }}
//               >
//                 Reports
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/profile"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#34495e",
//                   fontSize: "18px",
//                 }}
//               >
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/settings"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#34495e",
//                   fontSize: "18px",
//                 }}
//               >
//                 Settings
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/login"  {/* Updated to the login page route */}
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#e74c3c",
//                   fontSize: "18px",
//                 }}
//               >
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/logout"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   padding: "10px 15px",
//                   display: "block",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   backgroundColor: "#e74c3c",
//                   fontSize: "18px",
//                 }}
//               >
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div>
//           <p style={{ fontSize: "14px", textAlign: "center" }}>© 2024 Your Company</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: "40px", backgroundColor: "#f4f6f8" }}>
//         <h1 style={{ textAlign: "center", fontSize: "36px", color: "#2c3e50" }}>Welcome to the Home Page</h1>
//         <p style={{ textAlign: "center", fontSize: "20px", color: "#7f8c8d" }}>
//           This is the homepage where you can navigate to different sections of the application.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;
