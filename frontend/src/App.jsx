import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavBar";
import DriverDetails from "./pages/Employee/DriverDetails";
import VFADetails from "./pages/ChartDetails/VFA";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import HelperDetails from "./pages/Employee/HelperDetails";
import EstateDetailsPage from "./pages/Estate/EstateDetails";
// import VfaDetails from "./pages/VfaDetails";
import Footer from "./components/Footer/footer";
import RootArrangement from "./pages/Root/RootArrangement";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/navbar" element={<NavigationBar />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route path="/helper" element={<HelperDetails />} />
        <Route path="/root" element={<RootArrangement />} /> 
        <Route path="/estate" element={<EstateDetailsPage />} />
        <Route path="/driver" element={<DriverDetails />} />
        <Route path="/vfa" element={<VFADetails />} />
        {/* <Route path="/vfa" element={<VfaDetails />} /> */}
        <Route path="/footer" element={<Footer />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
