// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const MenuButton = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
//       {/* Menu Button */}
//       <button
//         onClick={toggleMenu}
//         style={{
//           backgroundColor: "#6c63ff",
//           color: "white",
//           border: "none",
//           padding: "10px 15px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         ☰ Menu
//       </button>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div
//           style={{
//             marginTop: "10px",
//             backgroundColor: "#fff",
//             boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             borderRadius: "5px",
//             padding: "10px",
//           }}
//         >
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Admin Page
//               </Link>
//             </li>
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/dashboard"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Dashboard
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuButton;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          backgroundColor: "#6c63ff",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ☰ Menu
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {/* Home Link */}
            <li style={{ margin: "10px 0" }}>
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
            </li>

            {/* Admin Page Link */}
            <li style={{ margin: "10px 0" }}>
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
            </li>

            {/* Dashboard Link */}
            <li style={{ margin: "10px 0" }}>
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
            </li>

            {/* Reports Link */}
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/reports"
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
                Reports
              </Link>
            </li>

            {/* Profile Link */}
            <li style={{ margin: "10px 0" }}>
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
            </li>

            {/* Settings Link */}
            <li style={{ margin: "10px 0" }}>
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
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const MenuButton = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
//       {/* Menu Button */}
//       <button
//         onClick={toggleMenu}
//         style={{
//           backgroundColor: "#6c63ff",
//           color: "white",
//           border: "none",
//           padding: "10px 15px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         ☰ Menu
//       </button>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div
//           style={{
//             marginTop: "10px",
//             backgroundColor: "#fff",
//             boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             borderRadius: "5px",
//             padding: "10px",
//           }}
//         >
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {/* Admin Page Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Admin Page
//               </Link>
//             </li>

//             {/* Dashboard Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/dashboard"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Dashboard
//               </Link>
//             </li>

//             {/* Reports Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/reports"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Reports
//               </Link>
//             </li>

//             {/* Profile Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Profile
//               </Link>
//             </li>

//             {/* Settings Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Settings
//               </Link>
//             </li>

//             {/* Home Page Link */}
//             <li style={{ margin: "10px 0" }}>
//               <Link
//                 to="/home"
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#6c63ff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Home Page
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuButton;
