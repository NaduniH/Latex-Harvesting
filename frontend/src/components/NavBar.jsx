import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import logo from "../../assets/images/logo.jpg";

const NavigationBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#FFFFFF" }}
      bg="light"
      expand="lg"
      className="w-100"
    >
      <Navbar.Brand href="#home">
        {/* <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="dashboard">Home</Nav.Link>
          <NavDropdown title="Employee" id="basic-nav-dropdown">
            <NavDropdown.Item href="#link1-1">Supervisor</NavDropdown.Item>
            <NavDropdown.Item href="#link1-2">Driver</NavDropdown.Item>
            <NavDropdown.Item href="#link1-3">Helper</NavDropdown.Item>
          </NavDropdown>{" "}
          <Nav.Link href="#link2">Estate</Nav.Link>
          <Nav.Link href="#link3">Chemical</Nav.Link>
          <Nav.Link href="#link4">Dry(Kg)</Nav.Link>
          <Nav.Link href="#link4">VFA</Nav.Link>
          <Nav.Link href="#link4">Root Arrange</Nav.Link>
          {/* <Nav.Link href="#link4">Contact</Nav.Link> */}
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="signup">
            <button>Register</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
