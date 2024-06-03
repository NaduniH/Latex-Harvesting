import React, { useState, useEffect } from 'react';
import '../../components/SupervisiorNav/TopicBox';
import TopicBox from '../../components/SupervisiorNav/TopicBox';

const data = [
  { no: 1, lxbNumber: 'lxb 109', stateName: 'walahaduwa', totalLiters: 3000, chemical: '90/3.75' },
  { no: 2, lxbNumber: 'lxb 201', stateName: 'example', totalLiters: 500, chemical: '30/1.25' },
  // Add more rows as needed
];

const Order = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter(row => row.lxbNumber.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const totalLiters = filteredData.reduce((total, row) => total + row.totalLiters, 0);

  return (
    <div className="App">
        <TopicBox/>
        <style>
            {`
            
            body {
                font-family: Arial, sans-serif;
                margin-top:100px;
              }
              
             
              
              
              
              main {
                padding: 20px;
              }
              
              .search-container {
                display: flex;
                align-items: center;
                margin-bottom: 100px;
                margin-left: 1000px;
                
              }
              
              .search-container label {
                margin-right: 10px;
               
              }

              
              .search-container input {
                padding: 5px;
                margin-right: 10px;
                border-radius: 50px
           
              }

              h1{
                font-size:20px
              }
              
             
              
              table {
                width: 100%;
                border-collapse: collapse;
              }
              
              table th, table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              
              table th {
                background-color: #f1f1f1;
              }
              
              .total-container {
                margin-top: 20px;
              }
              
              .total-container label {
                margin-right: 10px;
              }
              
              .total-container input {
                padding: 5px;
                width: 100px;
              }
              

            `}
        </style>
     

      <main>
        <h1>Kamurupitiya Route</h1>

        <div className="search-container">
          <label htmlFor="routeSearch">LXB number:</label>
          
          <input
            type="text"
            id="routeSearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
        </div>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>LXB number</th>
              <th>State name</th>
              <th>Total Liters(L)</th>
              <th>Bring chemical NH3/TMTD</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(row => (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td>{row.lxbNumber}</td>
                <td>{row.stateName}</td>
                <td>{row.totalLiters}</td>
                <td>{row.chemical}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-container">
          <label>Total Liters:</label>
          <input type="text" value={totalLiters} readOnly />
        </div>
      </main>
    </div>
  );
};

export default Order;
