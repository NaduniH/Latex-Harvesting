// import React from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import Logo from "./../assets/images/logo.jpg";

const NavigationBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#FFFFFF" }}
      bg="light"
      expand="lg"
      collapseOnSelect
      className="bg-body-tertiary"
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            style={{
              marginLeft: "40px",
            }}
            width="70"
            height="50"
            className="d-inline-block align-top"
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="dashboard">Home</Nav.Link>
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="#link1-1">Supervisor</NavDropdown.Item>
              <NavDropdown.Item href="#link1-2">Driver</NavDropdown.Item>
              <NavDropdown.Item href="helper">Helper</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="estate">Estate</Nav.Link>
            <Nav.Link href="#link3">Chemical</Nav.Link>
            <Nav.Link href="#link4">Dry(Kg)</Nav.Link>
            <Nav.Link href="#link4">VFA</Nav.Link>
            <Nav.Link href="#link4">Root Arrange</Nav.Link>
            {/* <Nav.Link href="#link4">Contact</Nav.Link> */}
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">
              {/* <button>Register</button> */}
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
