import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import "./footer.css";
=======
import "./footer.css"; // Assuming you have a CSS file for additional styling
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
import Logo from "../../assets/images/logo.jpg";
import Seal from "../../assets/images/Seal.png";

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="text-dark py-2">
      <div className="container-fluid">
=======
    <footer className="text-dark py-1"> {/* Reduced padding from py-4 to py-2 */}
      {/* <Container> */}
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center text-md-left">
            <Image
              src={Logo}
              alt="logo"
              style={{
                width: "30%",
                height: "30%",
              }}
            />
          </Col>
<<<<<<< HEAD
          <Col xs={12} md={3} className="text-center">
            <h6 className="mb-2">
              <b>Contact Us</b>
            </h6>
            <address className="mb-2">
=======
          <Col xs={12} md={3} className="text-center"> {/* Reduced margin */}
            <h6 className="mb-2"><b>Contact Us</b></h6> {/* Reduced bottom margin */}
            <address className="mb-2"> {/* Reduced bottom margin */}
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
              No.95B, Zone A, EPZ,
              <br />
              Biyagama, 11672,
              <br />
              Sri Lanka.
            </address>
          </Col>

<<<<<<< HEAD
          <Col xs={12} md={3} className="text-center">
=======
          <Col xs={12} md={3} className="text-center"> {/* Reduced margin */}
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
            <br />
            Tel: <a href="tel:+94114311200">+94 114 311 200</a>
            <br />
            Fax: <a href="fax:+94114311222">+94 114 311 222</a>
            <br />
            Email: <a href="mailto:info@lalangroup.com">info@lalangroup.com</a>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-right">
            <Image
              src={Seal}
              alt="Seal"
              style={{
                width: "40%",
                height: "30%",
              }}
            />
          </Col>
        </Row>
<<<<<<< HEAD
      </div>
=======
      {/* </Container> */}
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 5780184aa617d6836f0baa1c94fa8ae8b620371e
