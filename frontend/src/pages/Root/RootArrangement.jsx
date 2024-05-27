import React from 'react';
import './RootArrangement.css';
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";


const dummyData = [
  {
    date: "2022.05.26",
    route: "Kamburupitiya",
    vehicleNo: "QL9904",
    supervisor: "Mr. Amal",
    driver: "Mr. Namal",
    helper: "Mr. Buddika",
    nightDriver: "Mr. Amal",
    nightHelper: "Mr. Janaka"
  },
  // You can add more dummy entries here
];

const TableComponent = () => {
  return (
    <div className="table-container">
        <NavigationBar />
      <div className="controls">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Route</th>
            <th>Vehicle no.</th>
            <th>Supervisor</th>
            <th>Driver</th>
            <th>Helper</th>
            <th>Night Driver</th>
            <th>Night Helper</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.route}</td>
              <td>{entry.vehicleNo}</td>
              <td>{entry.supervisor}</td>
              <td>{entry.driver}</td>
              <td>{entry.helper}</td>
              <td>{entry.nightDriver}</td>
              <td>{entry.nightHelper}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="new-button-container">
        <button className="new-button">New</button>
      </div>
       <Footer />
    </div>
  );
};

export default TableComponent;