import React from 'react'
import './Estate.css';

export default function Estate() {
  const rows = [
    { dbNumber: '001', stateName: 'Mr. Nihal', ownerName: 'Mr. Sunil', ownerContact: '07106126047', assistantContact: '07106126047', helperContact: '07106126047', averageTapping: '350L', location: '230area', route: 'dialuma akurassa', moreInfo: 'More info' },
    { dbNumber: '001', stateName: 'Mr. Nihal', ownerName: 'Mr. Sunil', ownerContact: '07106126047', assistantContact: '07106126047', helperContact: '07106126047', averageTapping: '350L', location: '230area', route: 'dialuma akurassa', moreInfo: 'More info' },
    { dbNumber: '001', stateName: 'Mr. Nihal', ownerName: 'Mr. Sunil', ownerContact: '07106126047', assistantContact: '07106126047', helperContact: '07106126047', averageTapping: '350L', location: '230area', route: 'dialuma akurassa', moreInfo: 'More info' },
    
  ];

  return (
    <div>
      <div className="header">
        <button className="edit">All</button>
        <button className="edit">Kp</button>
        <button className="edit">Rp</button>
        <button className="edit">Mg</button>
        <button className="edit">Ho</button>
        <button className="edit">Pp</button>
        <button className="edit">Bs</button>
        <button className="edit">Ag</button>

        {/* Add your search input and magnifying glass icon */}
        <input className="search-bar" type="text" placeholder="Search..." />
        <button>🔍</button>

        <button className="edit1">New state pending</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>DB Number</th>
            <th>State Name</th>
            <th>Owner Name</th>
            <th>Owner Contact</th>
            <th>Assistant Contact</th>
            <th>Helper Contact</th>
            <th>Average Tapping</th>
            <th>Location</th>
            <th>Route</th>
            <th>More Info</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.dbNumber}</td>
              <td>{row.stateName}</td>
              <td>{row.ownerName}</td>
              <td>{row.ownerContact}</td>
              <td>{row.assistantContact}</td>
              <td>{row.helperContact}</td>
              <td>{row.averageTapping}</td>
              <td>{row.location}</td>
              <td>{row.route}</td>
              <td>{row.moreInfo}</td>
              <td><button className="edit">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
