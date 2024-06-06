import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import NavigationBar from "./components/NavBar";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import HelperDetails from "./pages/Employee/HelperDetails";
import SupervisorDetails from "./pages/Employee/SupervisorDetails";
import EstateDetailsPage from "./pages/Estate/EstateDetails";
import DryDetails from "./pages/ChartDetails/Dry(Kg)Details";
import ChemicalDetails from "./pages/ChartDetails/ChemicalDetails";
import RootArrangement from "./pages/RootArrangement/RootArrangement";
import AllDetails from "./pages/AllDetails/AllDetails";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/navbar" element={<NavigationBar />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route path="/helper" element={<HelperDetails />} />
        <Route path="/supervisor" element={<SupervisorDetails />} />
        <Route path="/estate" element={<EstateDetailsPage />} />
        <Route path="/dry" element={<DryDetails />} />
        <Route path="/chemical" element={<ChemicalDetails />} />
        <Route path="/root" element={<RootArrangement />} />
        <Route path="/alldetails" element={<AllDetails />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
