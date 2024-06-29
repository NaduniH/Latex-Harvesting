import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUpPage.css";
import SignUpImg from "../../assets/images/loginImg.jpg";
import { AuthContext } from './../../components/AuthContext'; // Adjust the import path as necessary

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [error, setEmailError] = useState("");
  // const { login } = useContext(AuthContext);

  const validateName = (name) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(String(name));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^0[0-9]{9}$/; // Starts with 0, followed by 9 digits
    return re.test(String(phone));
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-letter characters except spaces

    setName(onlyLettersAndSpaces);

    if (!validateName(onlyLettersAndSpaces)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name should only contain letters and spaces",
      }));
    } else {
      setErrors((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    const onlyAllowedCharacters = input.replace(/[^a-z0-9.@]/g, ""); // Allow simple letters, "@" symbol, ".", and numbers
    setEmail(onlyAllowedCharacters);

    if (!validateEmail(onlyAllowedCharacters)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/\D/g, ""); // Remove non-digit characters

    setPhone(onlyNumbers);

    if (!validatePhone(onlyNumbers)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number should start with 0 and contain 10 digits",
      }));
    } else {
      setErrors((prevErrors) => {
        const { phone, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    if (!validatePassword(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "input valid pwd",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validatePassword = (password) => {
    return password.length === 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!name || !validateName(name))
      validationErrors.name =
        "Name is required and should only contain letters";
    if (!email || !validateEmail(email))
      validationErrors.email = "Valid email is required";
    if (!phone || !validatePhone(phone))
      validationErrors.phone =
        "Valid phone number is required and should start with 0 and contain 10 digits";
    if (!password || !validatePassword(password))
      validationErrors.password =
        "Password is required and must be exactly 8 characters long";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      setEmailError("Email already exists.");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        phone,
        password,
      });
      // alert(response.data);
      // login(data.token);
      navigate("/login");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/check-email",
        {
          params: { email },
        }
      );
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={4} className="p-0">
          <div className="image-container">
            <Image src={SignUpImg} alt="SignUp" />
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75 form-background" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">
              <b>Welcome to Sign Up Page</b>
            </h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                onChange={handleNameChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleEmailChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formPhoneNumber">
              <Form.Control
                type="tel"
                placeholder="Phone number"
                value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                onChange={handlePhoneChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlePasswordChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>
            <div className="text-center mt-3">
              <p>
                You already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
