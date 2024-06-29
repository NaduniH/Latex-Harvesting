import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/AuthContext.jsx'; // Adjust the path as necessary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
  </React.StrictMode>
);
