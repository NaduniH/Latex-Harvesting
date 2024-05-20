import React from 'react'
import './Driver.css';

export default function Driver() {
    
      const rows = [
    { empNo: 2118, driverName: 'Mr. Akash', vehicle: 'if4499', route: 'Kamburupitiya', contact: '0711234534', email: 'akash@gmail.com' },
    { empNo: 2153, driverName: 'Mr. Pathum', vehicle: 'if44500', route: 'Not visible', contact: '0773327896', email: 'pathum@gmail.com' },
    { empNo: 2184, driverName: 'Mr. Sanath', vehicle: 'if3400', route: 'Not visible', contact: '070898865', email: 'sanath@gmail.com' },
  ];

  return (
    <div>
        
    <table>
        <thead>
          <tr>
            <th>Emp.no</th>
            <th>Driver Name</th>
            <th>Vehicle</th>
            <th>Root</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.empNo}</td>
              <td>{row.driverName}</td>
              <td>{row.vehicle}</td>
              <td>{row.route}</td>
              <td>{row.contact}</td>
              <td>{row.email}</td>
              <td><button className="edit">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <button className="change">Change Arrangement</button>
    </div>
  )
  
}

