import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';

import TopicBox from '../../components/SupervisiorNav/TopicBox';


const Planning = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes, setRoutes] = useState([
    { id: 1, lxbNumber: 'lxb 109', stateName: 'walahaduwa', todayTapping: '345', todayLiter: '4000', remainSpace: '800L', nh3Stock: '300L', tmtdStock: '1L', collectionDate: '3 days', planningDate: new Date() },
    { id: 2, lxbNumber: 'lxb 201', stateName: 'example', todayTapping: '-', todayLiter: '-', remainSpace: '10000L', nh3Stock: '1000L', tmtdStock: '2L', collectionDate: '6 days', planningDate: new Date() }
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (date, routeId) => {
    setRoutes(prevRoutes =>
      prevRoutes.map(route =>
        route.id === routeId ? { ...route, planningDate: date } : route
      )
    );
  };

  const filteredRoutes = routes.filter(route =>
    route.stateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTodayLiters = filteredRoutes.reduce((total, route) => {
    const todayLiter = parseFloat(route.todayLiter);
    return total + (isNaN(todayLiter) ? 0 : todayLiter);
  }, 0);

  return (
    <div className="route-table">
        <TopicBox/>
      <style>
        {`
        .route-table {
          width: 80%;
          margin: 85px;
          text-align: center;
        }
        
        .route-table h2 {
          margin-bottom: 20px;
        }
        
        .route-table input {
          margin-bottom: 20px;
          padding: 10px;
          width: 50%;
          font-size: 16px;
        }
        
        .route-table table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        
        .route-table th, .route-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }
        
        .route-table th {
          background-color: #f4f4f4;
        }
        
        .total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
        }
        
        .calendar-button {
          display: flex;
          align-items: center;
          background-color: red;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        
        .calendar-button svg {
          margin-left: 5px;
        }
        .calendar-button {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        
        .calendar-button svg {
          margin-left: 5px;
        }
          
        `}
      </style>
      <h2>Kamurupitiya Route</h2>
      <input
        type="text"
        placeholder="Search by State name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>LXB number</th>
            <th>State name</th>
            <th>Today Tapping</th>
            <th>Today Liter</th>
            <th>Remain Space</th>
            <th>NH3 Stock</th>
            <th>T.M.T.D Stock</th>
            <th>Collection Date</th>
            <th>Planning Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.lxbNumber}</td>
              <td>{route.stateName}</td>
              <td>{route.todayTapping}</td>
              <td>{route.todayLiter !== '-' ? `${route.todayLiter}L` : '-'}</td>
              <td>{route.remainSpace}</td>
              <td>{route.nh3Stock}</td>
              <td>{route.tmtdStock}</td>
              <td>{route.collectionDate}</td>
              <td>
                <DatePicker
                  selected={route.planningDate}
                  onChange={(date) => handleDateChange(date, route.id)}
                  customInput={<CalendarButton />}
                  dateFormat="dd/MM/yyyy"
                  showPopperArrow={false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <span>Total Today Liters:</span>
        <span>{totalTodayLiters}L</span>
      </div>
        
    </div>
  );
};

const CalendarButton = React.forwardRef(({ value, onClick }, ref) => (
  <button className="calendar-button" onClick={onClick} ref={ref}>
    {value || 'Calendar'} <FiCalendar />

  </button>

));

export default Planning;
