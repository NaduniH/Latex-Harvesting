import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavBar"; 

import DriverDetails from "./pages/Employee/DriverDetails";
import VFADetails from "./pages/ChartDetails/VFA";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="/driver" element={<DriverDetails />} />
      <Route path="/vfa" element={<VFADetails />} />

      <Route path="/navbar" element={<NavigationBar/>}/>
        <Route path="/footer" element={<Footer />} />

      </Routes>
   </Router>
  );
}

export default App;