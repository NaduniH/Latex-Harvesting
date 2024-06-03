import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

import NavigationBar from "./components/NavBar"; 

import DriverDetails from "./pages/Employee/DriverDetails";
import VFADetails from "./pages/ChartDetails/VFA";
=======
import LoginPage from "./pages/login/LoginPage";
import NavigationBar from "./components/NavBar";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import HelperDetails from "./pages/Employee/HelperDetails";
import EstateDetailsPage from "./pages/Estate/EstateDetails";
// import VfaDetails from "./pages/VfaDetails";
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      
      <Route path="/driver" element={<DriverDetails />} />
      <Route path="/vfa" element={<VFADetails />} />

      <Route path="/navbar" element={<NavigationBar/>}/>
        <Route path="/footer" element={<Footer />} />

      </Routes>
   </Router>
=======
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/navbar" element={<NavigationBar />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route path="/helper" element={<HelperDetails />} />
        <Route path="/estate" element={<EstateDetailsPage />} />
        {/* <Route path="/vfa" element={<VfaDetails />} /> */}
        <Route path="/footer" element={<Footer />} />

        {/* Add other routes here */}
      </Routes>
    </Router>

>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
  );
}

export default App;