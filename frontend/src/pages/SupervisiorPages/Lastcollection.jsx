import React, { useState } from 'react';
import '../../components/SupervisiorNav/TopicBox';
import TopicBox from '../../components/SupervisiorNav/TopicBox';



const Lastcollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes] = useState([
    { id: 1, lxbNumber: 'lxb 109', stateName: 'walahaduwa', lastCollectionDate: '2024-04-22' },
    { id: 2, lxbNumber: 'lxb 201', stateName: 'walahaduwa', lastCollectionDate: '2024-04-22' },
    { id: 3, lxbNumber: 'lxb 021', stateName: 'horana', lastCollectionDate: '2024-05-21' }
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const calculateDaysAgo = (date) => {
    const today = new Date();
    const collectionDate = new Date(date);
    const differenceInTime = today.getTime() - collectionDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };

  const filteredRoutes = routes.filter(route =>
    route.lxbNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="route-table">
        <TopicBox/>
    <style>
      {`
      body {
        font-family: Arial, sans-serif;
        margin-top: 100px;
      }
      
      .App {
        text-align: center;
      }
      
     
      
      .route-table {
        padding: 20px;
        
      }
      
      .route-table input {
        padding: 0.5rem;
        margin-bottom: 1rem;
        width: 15%;
        box-sizing: border-box;
        margin-left:1100px;
        border-radius:50px
      }
      
      .route-table table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
      }
      
      .route-table th, .route-table td {
        border: 1px solid #ccc;
        padding: 0.5rem;
        text-align: left;
      }
      
      .route-table th {
        background-color: #f5f5f5;
      }
      
      .total {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: #f5f5f5;
        border-top: 1px solid #ccc;
      }
      
      `}
    </style>
    
      <h2>Kamurupitiya Route</h2>
      <input
        type="text"
        placeholder="Search by ''LXB number''  "
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>LXB number</th>
            <th>State name</th>
            <th>Last collection date</th>
            <th>Collection Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.lxbNumber}</td>
              <td>{route.stateName}</td>
              <td>{route.lastCollectionDate}</td>
              <td>{calculateDaysAgo(route.lastCollectionDate)} days ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lastcollection;
