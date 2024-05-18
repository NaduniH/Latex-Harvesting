import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import signupImage from "../../assets/images/loginImg.jpg"; // Replace with the correct image path
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/dashboard"); // Redirect to the appropriate page after signup
  };

  const handleSignup = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      password.trim() !== ""
    ) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);
      setShowSuccess(true);
      setShowError(false);
      setTimeout(() => {
        setShowSuccess(false);
        handleSignupRedirect();
      }, 3000);
    } else {
      setShowSuccess(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  return (
    <div style={{ backgroundColor: "#e8f4f8", height: "100vh" }}>
      <Container
        className="justify-content-center"
        fluid
        style={{
          width: "100%",
          margin: "10px",
        }}
      >
        <Row className="justify-content-center">
          <Col md={4}>
            <Image
              src={signupImage}
              alt="Signup"
              style={{
                width: "100%",
                height: "100vh",
              }}
            />
          </Col>
          <Col md={8}>
            <Card
              style={{
                borderRadius: "20px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                width: "100%",
                height: "100vh",
              }}
            >
              {showSuccess && (
                <Alert variant="success" className="mt-3">
                  Signup successful! Redirecting...
                </Alert>
              )}
              {showError && (
                <Alert variant="danger" className="mt-3">
                  Please fill in all fields.
                </Alert>
              )}
              <Card.Body
                className="text-center"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  padding: "150px",
                  width: "auto",
                  height: "100vh",
                }}
              >
                <Card.Title
                  className="text-center"
                  style={{ fontSize: "24px", color: "#333" }}
                >
                  Welcome to Sign Up
                </Card.Title>
                <hr></hr>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    className="btn-block"
                    onClick={handleSignup}
                    style={{ borderRadius: "10px" }}
                  >
                    Sign Up
                  </Button>
                </Form>
                <p className="mt-3 text-center" style={{ color: "#333" }}>
                  Already have an account? <a href="/login">Login</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
