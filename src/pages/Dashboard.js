// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import LogCommunicationModal from '../components/LogCommunicationModal';
// import MenuButton from "../components/MenuButton"; // Ensure this is properly imported

// const Dashboard = () => {
//   // Initializing the companies with communication data
//   const [companies, setCompanies] = useState([
//     { name: 'Company A', communications: [{ date: '2024-12-10', type: 'Email', notes: 'Initial outreach' }], lastCommunication: "2024-12-20", nextCommunication: "2024-12-30", status: "yellow" },
//     { name: 'Company B', communications: [{ date: '2024-12-05', type: 'LinkedIn Post', notes: 'Follow-up message' }], lastCommunication: "2024-12-10", nextCommunication: "2024-12-25", status: "red" },
//     { name: 'Company C', communications: [], lastCommunication: "2024-12-28", nextCommunication: "2024-12-31", status: "green" },
//   ]);

//   const [selectedCompany, setSelectedCompany] = useState(null);

//   // Get today's date
//   const today = new Date().toISOString().split('T')[0];

//   // Filter overdue and today’s companies based on their next communication date
//   const overdueCompanies = companies.filter(
//     (company) => new Date(company.nextCommunication) < new Date(today)
//   );

//   const todayCompanies = companies.filter(
//     (company) => company.nextCommunication === today
//   );

//   // Log a communication (called from the modal)
//   const handleLogCommunication = (company) => {
//     setSelectedCompany(company);
//   };

//   const handleSubmitCommunication = (data) => {
//     const updatedCompanies = companies.map((company) =>
//       company.name === selectedCompany.name
//         ? {
//             ...company,
//             communications: [...company.communications, data],
//             lastCommunication: data.date,
//             nextCommunication: calculateNextCommunication(data.date, company.status),
//           }
//         : company
//     );
//     setCompanies(updatedCompanies);
//     setSelectedCompany(null);
//   };

//   const calculateNextCommunication = (lastDate, status) => {
//     const date = new Date(lastDate);
//     date.setDate(date.getDate() + (status === "yellow" ? 7 : status === "red" ? 3 : 14));
//     return date.toISOString().split("T")[0];
//   };

//   // Handle date click on the calendar
//   const handleDateClick = (value) => {
//     const dateString = value.toISOString().split('T')[0];
//     const communicationsOnDate = companies
//       .map((company) => ({
//         company: company.name,
//         communications: company.communications.filter((comm) => comm.date === dateString),
//       }))
//       .filter((company) => company.communications.length > 0);

//     console.log('Communications on', dateString, communicationsOnDate);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
//       {/* Menu Button */}
//       <MenuButton />

//       <h1 style={{ color: "#6c63ff", textAlign: "center" }}>📊 Dashboard 📊</h1>

//       {/* Notifications Section */}
//       <h2 style={{ color: "#2196f3" }}>Notifications</h2>
//       <div>
//         <h3>Overdue Communications</h3>
//         <ul>
//           {overdueCompanies.length > 0 ? (
//             overdueCompanies.map((company, index) => (
//               <li key={index} style={{ color: "#dc3545" }}>{company.name} (Due: {company.nextCommunication})</li>
//             ))
//           ) : (
//             <li style={{ color: "#28a745" }}>No overdue communications</li>
//           )}
//         </ul>
//         <h3>Today's Communications</h3>
//         <ul>
//           {todayCompanies.length > 0 ? (
//             todayCompanies.map((company, index) => (
//               <li key={index} style={{ color: "#ffc107" }}>{company.name} (Due: {company.nextCommunication})</li>
//             ))
//           ) : (
//             <li style={{ color: "#28a745" }}>No communications due today</li>
//           )}
//         </ul>
//       </div>

//       {/* Calendar Section */}
//       <div style={{ marginTop: "20px" }}>
//         <h2>Calendar</h2>
//         <Calendar
//           onClickDay={handleDateClick}
//           tileContent={({ date }) => {
//             const dateString = date.toISOString().split('T')[0];
//             const isCommunication = companies.some((company) =>
//               company.communications.some((comm) => comm.date === dateString)
//             );
//             return isCommunication ? <span>📌</span> : null;
//           }}
//         />
//       </div>

//       {/* Communication Log Section */}
//       <h2>Companies</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ padding: "10px", textAlign: "left" }}>Company</th>
//             <th style={{ padding: "10px", textAlign: "left" }}>Last Communication</th>
//             <th style={{ padding: "10px", textAlign: "left" }}>Next Communication</th>
//             <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {companies.map((company, index) => (
//             <tr key={index}>
//               <td>{company.name}</td>
//               <td>{company.lastCommunication || 'No Communication'}</td>
//               <td>{company.nextCommunication || 'Not Scheduled'}</td>
//               <td>
//                 <button
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#6c63ff",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => handleLogCommunication(company)}
//                 >
//                   Log Communication
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Log Communication Modal */}
//       {selectedCompany && (
//         <LogCommunicationModal
//           company={selectedCompany}
//           onClose={() => setSelectedCompany(null)}
//           onSubmit={handleSubmitCommunication}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import Calendar from "react-calendar";
import LogCommunicationModal from "../components/LogCommunicationModal";
import MenuButton from "../components/MenuButton";
import CalendarView from "../components/CalendarView";

const Dashboard = () => {
  const [companies, setCompanies] = useState([
    { name: "Company A", communications: [{ date: "2024-12-10", type: "Email", notes: "Initial outreach" }], lastCommunication: "2024-12-20", nextCommunication: "2024-12-30", status: "yellow" },
    { name: "Company B", communications: [{ date: "2024-12-05", type: "LinkedIn Post", notes: "Follow-up message" }], lastCommunication: "2024-12-10", nextCommunication: "2024-12-25", status: "red" },
    { name: "Company C", communications: [], lastCommunication: "2024-12-28", nextCommunication: "2024-12-31", status: "green" },
  ]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCompany, setEditedCompany] = useState({});

  const today = new Date().toISOString().split("T")[0];
  const overdueCompanies = companies.filter((company) => new Date(company.nextCommunication) < new Date(today));
  const todayCompanies = companies.filter((company) => company.nextCommunication === today);

  const handleLogCommunication = (company) => setSelectedCompany(company);

  const handleSubmitCommunication = (data) => {
    const updatedCompanies = companies.map((company) =>
      company.name === selectedCompany.name
        ? {
            ...company,
            communications: [...company.communications, data],
            lastCommunication: data.date,
            nextCommunication: calculateNextCommunication(data.date, company.status),
          }
        : company
    );
    setCompanies(updatedCompanies);
    setSelectedCompany(null);
  };

  const calculateNextCommunication = (lastDate, status) => {
    const date = new Date(lastDate);
    date.setDate(date.getDate() + (status === "yellow" ? 7 : status === "red" ? 3 : 14));
    return date.toISOString().split("T")[0];
  };

  const handleDateClick = (value) => {
    const dateString = value.toISOString().split("T")[0];
    const communicationsOnDate = companies
      .map((company) => ({
        company: company.name,
        communications: company.communications.filter((comm) => comm.date === dateString),
      }))
      .filter((company) => company.communications.length > 0);

    console.log("Communications on", dateString, communicationsOnDate);
  };

  const handleEditCompany = (company) => {
    setEditedCompany(company);
    setIsEditing(true);
  };

  const handleSaveCompany = () => {
    setCompanies(companies.map((company) =>
      company.name === editedCompany.name ? editedCompany : company
    ));
    setIsEditing(false);
    setEditedCompany({});
  };

  const handleChangeCompanyField = (field, value) => {
    setEditedCompany({ ...editedCompany, [field]: value });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <MenuButton />
      <div style={{
        backgroundColor: "#007bff", 
        color: "white", 
        padding: "20px", 
        textAlign: "center", 
        borderRadius: "5px", 
        marginBottom: "20px"
      }}>
        <h1 style={{ margin: 0 }}>📊 Dashboard 📊</h1>
      </div>

      {/* Notifications Section */}
      <section style={{ marginBottom: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#ffffff", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2196f3", marginBottom: "15px" }}>Notifications</h2>
        <div>
          <h3 style={{ color: "#dc3545", marginBottom: "10px" }}>Overdue Communications</h3>
          <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "15px" }}>
            {overdueCompanies.length > 0 ? (
              overdueCompanies.map((company, index) => (
                <li key={index} style={{ marginBottom: "10px", fontSize: "1rem", color: "#dc3545" }}>
                  🏢 {company.name} (Due: {company.nextCommunication})
                </li>
              ))
            ) : (
              <li style={{ color: "#28a745", fontSize: "1rem" }}>No overdue communications</li>
            )}
          </ul>
          <h3 style={{ color: "#ffc107", marginBottom: "10px" }}>Today's Communications</h3>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {todayCompanies.length > 0 ? (
              todayCompanies.map((company, index) => (
                <li key={index} style={{ marginBottom: "10px", fontSize: "1rem", color: "#ffc107" }}>
                  🏢 {company.name} (Due: {company.nextCommunication})
                </li>
              ))
            ) : (
              <li style={{ color: "#28a745", fontSize: "1rem" }}>No communications due today</li>
            )}
          </ul>
        </div>
      </section>

      {/* Calendar Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2196f3", marginBottom: "15px" }}>Calendar</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: "1.2rem", color: "#333" }}>
              {new Date().toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </h3>
          </div>
          <Calendar
            onClickDay={handleDateClick}
            tileContent={({ date }) => {
              const dateString = date.toISOString().split("T")[0];
              const isCommunication = companies.some((company) =>
                company.communications.some((comm) => comm.date === dateString)
              );
              return isCommunication ? <span style={{ color: "#6c63ff" }}>📌</span> : null;
            }}
          />
        </div>
      </section>

      {/* Upcoming Communications Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2196f3", marginBottom: "15px" }}>Upcoming Communications</h2>
        <CalendarView companies={companies} />
      </section>

      {/* Companies Section */}
      <section>
        <h2 style={{ fontSize: "1.5rem", color: "#2196f3", marginBottom: "15px" }}>Companies</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <thead style={{ backgroundColor: "#6c63ff", color: "#ffffff" }}>
            <tr>
              <th style={{ padding: "15px", textAlign: "left" }}>Company</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Last Communication</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Next Communication</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "15px" }}>{company.name}</td>
                <td style={{ padding: "15px" }}>{company.lastCommunication || "No Communication"}</td>
                <td style={{ padding: "15px" }}>{company.nextCommunication || "Not Scheduled"}</td>
                <td style={{ padding: "15px" }}>
                  <button
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#6c63ff",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      marginRight: "10px",
                    }}
                    onClick={() => handleLogCommunication(company)}
                  >
                    Log Communication
                  </button>
                  <button
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#ffc107",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                    }}
                    onClick={() => handleEditCompany(company)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Edit Company Modal */}
      {isEditing && (
        <div style={{ backgroundColor: "#ffffff", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <h3 style={{ color: "#333", marginBottom: "20px" }}>Edit Company</h3>
          <input
            type="text"
            value={editedCompany.name}
            onChange={(e) => handleChangeCompanyField("name", e.target.value)}
            placeholder="Company Name"
            style={{ padding: "10px", marginBottom: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
          <input
            type="date"
            value={editedCompany.lastCommunication}
            onChange={(e) => handleChangeCompanyField("lastCommunication", e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
          <input
            type="date"
            value={editedCompany.nextCommunication}
            onChange={(e) => handleChangeCompanyField("nextCommunication", e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
          <button
            onClick={handleSaveCompany}
            style={{
              padding: "10px 15px",
              backgroundColor: "#28a745",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
              width: "100%",
            }}
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Log Communication Modal */}
      {selectedCompany && (
        <LogCommunicationModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
          onSubmit={handleSubmitCommunication}
        />
      )}
    </div>
  );
};

export default Dashboard;
