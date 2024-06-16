import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import LoginImg from "../../assets/images/loginImg.jpg";
import { AuthContext } from "./../../components/AuthContext"; // Adjust the import path as necessary

const LoginPage = () => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      console.log(data);
      if (response.ok) {
        // Assuming response contains a token if login is successful
        localStorage.setItem("authToken", data.token);
        // login(data.token);
        navigate("/dashboard");
      } else {
        // Handle errors based on response status
        alert(
          data.message ||
            "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(
        "An error occurred during login. Please try again. " + error.message
      );
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={4} className="p-0">
          <div className="image-container">
            <Image src={LoginImg} alt="Login" />
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75 form-background" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">
              <b>Welcome to Login Page</b>
            </h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br></br>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
            <br></br>
            <br></br>
            <div className="text-center mt-3">
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
