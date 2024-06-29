import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Container,
  Row,
  Col,
  Form,
  Alert,
} from "react-bootstrap";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";
import "./EmployeeDetails.css";

const SupervisorDetails = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    emp_no: "",
    name: "",
    root: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  const rootOptions = [
    "Kamburupitiya",
    "Amithirigala",
    "Rathnapura",
    "Horana",
    "Monaragala",
    "Puwakpitiya",
    "Bulathsinhala",
  ].sort();

  useEffect(() => {
    fetchSupervisors();
  }, []);

  const fetchSupervisors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/supervisors");
      setSupervisors(response.data);
    } catch (error) {
      console.error("Error fetching supervisors:", error);
    }
  };

  const validateEmpNo = (emp_no) => /^[a-zA-Z0-9]+$/.test(String(emp_no));
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(String(name));
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  const validatePhone = (phone) => /^0[0-9]{9}$/.test(String(phone));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmpNoChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndNum = input.replace(/[^a-zA-Z0-9]/g, "");
    setFormData({ ...formData, emp_no: onlyLettersAndNum });

    if (!validateEmpNo(onlyLettersAndNum)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Employee Number should only contain letters and Numbers",
      }));
    } else {
      setErrors((prevErrors) => {
        const { emp_no, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: onlyLettersAndSpaces });

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
    const onlyAllowedCharacters = input.replace(/[^a-z0-9.@]/g, "");
    setFormData({ ...formData, email: onlyAllowedCharacters });

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
    const onlyNumbers = input.replace(/\D/g, "");
    setFormData({ ...formData, phone: onlyNumbers });

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { emp_no, name, root, email, phone } = formData;
    const newErrors = {};

    if (!validateEmpNo(emp_no))
      newErrors.emp_no =
        "Employee number should contain only letters and numbers";
    if (!validateName(name))
      newErrors.name = "Name should only contain letters and spaces";
    if (!validateEmail(email)) newErrors.email = "Invalid email format";
    if (!validatePhone(phone))
      newErrors.phone =
        "Phone number should start with 0 and contain 10 digits";
    if (!root) newErrors.root = "Root is required";

    const isEmpNoDuplicate = supervisors.some(
      (supervisor) => supervisor.emp_no === emp_no && supervisor.id !== editId
    );
    if (isEmpNoDuplicate) newErrors.emp_no = "Employee number already exists";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/supervisors/${editId}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/supervisors", formData);
      }
      setFormData({ emp_no: "", name: "", root: "", email: "", phone: "" });
      setShowForm(false);
      setEditId(null);
      fetchSupervisors();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (supervisor) => {
    setFormData(supervisor);
    setEditId(supervisor.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/supervisors/${id}`);
      fetchSupervisors();
    } catch (error) {
      console.error("Error deleting supervisor:", error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <Container className="employee-details my-4" fluid>
        <Row>
          <Col>
            <h2>Supervisor's Details</h2>
          </Col>
        </Row>
        <Row>
          <br></br>
          <br></br>
          {showForm && (
            <Form className="w-50 form-background" onSubmit={handleSubmit}>
              {errors.emp_no && <Alert variant="danger">{errors.emp_no}</Alert>}
              <Form.Group controlId="formEmpNo">
                <Form.Control
                  type="text"
                  name="emp_no"
                  value={formData.emp_no}
                  onChange={handleEmpNoChange}
                  placeholder="Employee Number"
                />
                <br></br>
              </Form.Group>

              {errors.name && <Alert variant="danger">{errors.name}</Alert>}
              <Form.Group controlId="formName">

                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="Enter name"
                />
                <br></br>
              </Form.Group>

              <Form.Group controlId="formRoot">
              {errors.root && <Alert variant="danger">{errors.root}</Alert>}

                <Form.Select
                  name="root"
                  value={formData.root}
                  onChange={handleInputChange}
                >
                  <option value="">Select root</option>
                  {rootOptions.map((root, index) => (
                    <option key={index} value={root}>
                      {root}
                    </option>
                  ))}
                </Form.Select>
                <br></br>
              </Form.Group>

              {errors.email && <Alert variant="danger">{errors.email}</Alert>}
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  placeholder="Enter email"
                />
                <br></br>
              </Form.Group>

              {errors.phone && <Alert variant="danger">{errors.phone}</Alert>}
              <Form.Group controlId="formPhone">
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                />
                <br></br>
              </Form.Group>

              <Button variant="primary" type="submit">
                {editId ? "Update" : "Register"}
              </Button>
            </Form>
          )}
        </Row>
        <br></br>
        <Row>
          <Col md={12} className="d-flex justify-content-end">
            <Button variant="success" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Add Supervisor"}
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Emp No</th>
                  <th>Supervisor Name</th>
                  <th>Root</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {supervisors.map((supervisor, index) => (
                  <tr key={index}>
                    <td>{supervisor.emp_no}</td>
                    <td>{supervisor.name}</td>
                    <td>{supervisor.root}</td>
                    <td>{supervisor.phone}</td>
                    <td>{supervisor.email}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => handleEdit(supervisor)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(supervisor.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SupervisorDetails;
