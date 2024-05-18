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
import loginImage from "../../assets/images/loginImg.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/dashboard");
  };

  const handleLogin = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      console.log("Email:", email);
      console.log("Password:", password);
      setShowSuccess(true);
      setShowError(false);
      setTimeout(() => {
        setShowSuccess(false);
        handleLoginRedirect();
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
          // height: "100vh",
          margin: "10px",
        }}
      >
        <Row className="justify-content-center">
          <Col md={4}>
            <Image
              src={loginImage}
              alt="Login"
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
                // padding: "30px",
                // marginTop: "100px",
                width: "100%",
                height: "100vh",
              }}
            >
              {showSuccess && (
                <Alert variant="success" className="mt-3">
                  Login successful! Redirecting...
                </Alert>
              )}
              {showError && (
                <Alert variant="danger" className="mt-3">
                  Please enter both email and password.
                </Alert>
              )}
              <Card.Body
                className="text-center"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  padding: "150px",
                  // marginTop: "100px",
                  width: "auto",
                  height: "100vh",
                }}
              >
                <Card.Title
                  className="text-center"
                  style={{ fontSize: "24px", color: "#333" }}
                >
                  Welcome to Sign In
                </Card.Title>
                <hr></hr>
                <Form>
                  <Form.Group className="mb-5">
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
                  <Form.Group className="mb-5">
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
                    onClick={handleLogin}
                    style={{ borderRadius: "10px" }}
                  >
                    Login
                  </Button>
                </Form>
                <p className="mt-3 text-center" style={{ color: "#333" }}>
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
