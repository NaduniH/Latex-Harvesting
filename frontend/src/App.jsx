import LoginPage from "./pages/login/LoginPage";
import NavigationBar from "./components/NavBar";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/navbar" element={<NavigationBar />} />
          <Route path="/dashboard" element={<MainDashBoard />} />

          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
