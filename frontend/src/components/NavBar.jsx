import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Container,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/images/NavImage.png";
<<<<<<< HEAD
import "./NavBar.css"; 
=======
import "./NavBar.css";
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e

const NavigationBar = () => {
  return (
    <Navbar className="main-navbar" expand="lg" collapseOnSelect>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
<<<<<<< HEAD
          <Image
=======
          <img
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
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
<<<<<<< HEAD
              <NavDropdown.Item href="supervisor">Supervisor</NavDropdown.Item>
              <NavDropdown.Item href="driver">Driver</NavDropdown.Item>
              <NavDropdown.Item href="helper">Helper</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="estate">Estate</Nav.Link>
            <Nav.Link href="chemical">Chemical</Nav.Link>
            <Nav.Link href="dry">Dry(Kg)</Nav.Link>
            <Nav.Link href="vfa">VFA</Nav.Link>
            <Nav.Link href="root">Root Arrange</Nav.Link>
            {/* <Nav.Link href="#link4">Contact</Nav.Link> */}
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">
              <Button className="btn">Register</Button>
=======
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
              <Button>Register</Button>
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
<<<<<<< HEAD
export default NavigationBar;
=======

export default NavigationBar;
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
