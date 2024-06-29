import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/login/LoginPage";
import NavigationBar from "./components/NavBar";
import DriverDetails from "./pages/Employee/DriverDetails";
import VFADetails from "./pages/ChartDetails/VFA";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import HelperDetails from "./pages/Employee/HelperDetails";
import SupervisorDetails from "./pages/Employee/SupervisorDetails";
import EstateDetailsPage from "./pages/Estate/EstateDetails";
// import VfaDetails from "./pages/VfaDetails"; 

import  Footer from "./components/Footer/footer";
import Cfa from "./pages/SupervisiorPages/Cfa";
import Fillingbill from "./pages/SupervisiorPages/Fillingbill";
import Estatereport from "./pages/SupervisiorPages/Estatereport";
import FormComponent from "./pages/SupervisiorPages/FormComponent";
import Lastcollection from "./pages/SupervisiorPages/Lastcollection";
import Order from "./pages/SupervisiorPages/Order";
import Pfa from "./pages/SupervisiorPages/Pfa";
import Planning from "./pages/SupervisiorPages/planning";
import RouteTable from "./pages/SupervisiorPages/RouteTable";
import Todaytapping from "./pages/SupervisiorPages/Todaytapping";
import DryDetails from "./pages/ChartDetails/Dry(Kg)Details";
import ChemicalDetails from "./pages/ChartDetails/ChemicalDetails";
import VFADetails from "./pages/ChartDetails/VFADetails";
// import RootArrangement from "./pages/RootArrangement/RootArrangement";
import AllDetails from "./pages/AllDetails/AllDetails";
import Footer from "./components/Footer/footer";
import RootArrangement from "./pages/Root/RootArrangement";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./components/AuthContext";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/navbar" element={<NavigationBar />} />
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <MainDashBoard />
            </PrivateRoute>
          }
        /> */}
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route path="/helper" element={<HelperDetails />} />
        <Route path="/root" element={<RootArrangement />} /> 
        <Route path="/driver" element={<DriverDetails />} />
        {/* <Route path="/vfa" element={<VfaDetails />} /> */}
        <Route path="/estate" element={<EstateDetailsPage />} /> 
        <Route path="/FormComponent" element={<FormComponent/>} />
        <Route path="/Cfa" element={<Cfa />} /> 
        <Route path="/fillingbill" element={<Fillingbill />} /> 
        <Route path="/Estatereport" element={<Estatereport/>} /> 
        <Route path="/Lastcollection" element={<Lastcollection/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Pfa" element={<Pfa/>} />
        <Route path="/Planning" element={<Planning/>} />
        <Route path="/RouteTable" element={<RouteTable/>} />
        <Route path="/Todaytapping" element={<Todaytapping/>} />



        <Route path="/supervisor" element={<SupervisorDetails />} />
        <Route path="/dry" element={<DryDetails />} />
        <Route path="/chemical" element={<ChemicalDetails />} />
        <Route path="/vfa" element={<VFADetails/>} />
        {/* <Route path="/root" element={<RootArrangement />} /> */}
        <Route path="/alldetails" element={<AllDetails />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
