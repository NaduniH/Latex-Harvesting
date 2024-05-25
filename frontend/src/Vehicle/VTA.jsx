import React from 'react'
import './VTA.css';

export default function VTA() {
  const rows = [
    { lxbNumber: '001', stateName: 'sbc', route: 'kxp', dry: '900kg', vfa: '0.007', nh3: '0.027' },
    { lxbNumber: '001', stateName: 'sbc', route: 'kxp', dry: '900kg', vfa: '0.007', nh3: '0.027' },
    { lxbNumber: '001', stateName: 'sbc', route: 'kxp', dry: '900kg', vfa: '0.007', nh3: '0.027' },
    
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

        <div className="header1">
          <button className="edit">Day</button>
          <button className="edit">Monthly</button>
          <button className="edit">Year</button>
        </div>

        <button className="vta">High VTA</button>

        <label>min
          <input type="text" />
        </label>
        <label>max
          <input type="text" />
        </label>

        <input className="search-bar" type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>LXB Number</th>
            <th>State Name</th>
            <th>Route</th>
            <th>Dry (kg)</th>
            <th>VFA</th>
            <th>NH3</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.lxbNumber}</td>
              <td>{row.stateName}</td>
              <td>{row.route}</td>
              <td>{row.dry}</td>
              <td>{row.vfa}</td>
              <td>{row.nh3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
