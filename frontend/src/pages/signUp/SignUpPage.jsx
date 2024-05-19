import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUpPage.css"; // Make sure to create and use an appropriate CSS file
import SignUpImg from "../../assets/images/loginImg.jpg";

const SignUpPage = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={4} className="p-0">
          <div className="image-container">
            <Image
              src={SignUpImg}
              alt="SignUp"
              // style={{
              //   width: "100%",
              //   height: "100vh",
              // }}
            />
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75 form-background">
            <h2 className="text-center mb-4"><b>Welcome to Sign up</b></h2>
            <Form.Group controlId="formName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formPhoneNumber">
              {/* <Form.Label>Phone Number</Form.Label> */}
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <br></br>
            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>
            <div className="text-center mt-3">
              <p>You already have an account?<a href="/login"> Login</a></p>
              
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
