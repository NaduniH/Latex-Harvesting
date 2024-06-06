import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./../assets/images/NavImage.png";
import "./NavBar.css";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (for example, by checking a token in localStorage)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear user authentication (e.g., remove token from localStorage)
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <Navbar className="main-navbar" expand="lg" collapseOnSelect>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            width="180"
            height="50"
            className="d-inline-block align-top"
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            variant="underline"
            defaultActiveKey="/home"
            className="mr-2 navbar"
          >
            <Nav.Link href="dashboard">Home</Nav.Link>
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="supervisor">Supervisor</NavDropdown.Item>
              <NavDropdown.Item href="#link1-2">Driver</NavDropdown.Item>
              <NavDropdown.Item href="helper">Helper</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="estate">Estate</Nav.Link>
            <Nav.Link href="chemical">Chemical</Nav.Link>
            <Nav.Link href="dry">Dry(Kg)</Nav.Link>
            <Nav.Link href="vfa">VFA</Nav.Link>
            <Nav.Link href="root">Root Arrange</Nav.Link>
            {/* <Nav.Link href="#link4">Contact</Nav.Link> */}
            {!isLoggedIn ? (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
            <Nav.Link href="signup">
              <Button>Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
