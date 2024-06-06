import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";
import "./EmployeeDetails.css";

const SupervisorDetails = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [editId, setEditId] = useState(null);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/supervisors/${editId}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/supervisors", formData);
      }
      setFormData({ name: "", email: "", phone: "", password: "" });
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
          <Col>
            <Button variant="success" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Add Supervisor"}
            </Button>
            <br></br>
            <br></br>
            {showForm && (
              <Form className="w-75 form-background" onSubmit={handleSubmit}>
                {/* <Form.Group controlId="formEmpNo">
                  <Form.Control
                    type="text"
                    name="empNo"
                    value={formData.empNo}
                    onChange={handleInputChange}
                    placeholder="Enter Employee Number"
                  />
                  <br></br>
                </Form.Group> */}
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                  />
                  <br></br>
                </Form.Group>

                {/* <Form.Group controlId="formLocation">
                  <Form.Select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Select location"
        >
                    <option value="">Select location</option>
                      <option value="Amithirigala">Amithirigala</option>
                      <option value="Bulathsinhala">Bulathsinhala</option>
                      <option value="Horana">Horana</option>
                      <option value="Kamburupitiya">Kamburupitiya</option>
                      <option value="Monaragala">Monaragala</option>
                      <option value="Puwakpitiya">Puwakpitiya</option>
                    <option value="Rathnapura">Rathnapura</option>
                    {locations.sort().map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </Form.Select>
      </Form.Group> */}
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                  />
                  <br></br>
                </Form.Group>
                <Button variant="primary" type="submit">
                  {editId ? "Update" : "Register"}
                </Button>
              </Form>
            )}
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Emp.no</th>
                  <th>Supervisor Name</th>
                  <th>Route</th>
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
                    <td>{supervisor.route}</td>
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
