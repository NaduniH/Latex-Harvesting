import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const DriverDetails = () => {
  const [drivers, setDrivers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editDriver, setEditDriver] = useState(null);
  const [newDriver, setNewDriver] = useState({
    emp_No: "",
    name: "",
    licenseNumber: "",
    contactNumber: "",
    email: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 10; // Adjust as needed

  // Fetch all drivers from backend on component mount
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/drivers");
        setDrivers(response.data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };

    fetchDrivers();
  }, []);

  // Handle input change in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editDriver) {
      setEditDriver({ ...editDriver, [name]: value });
    } else {
      setNewDriver({ ...newDriver, [name]: value });
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
    if (showForm) setEditDriver(null);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editDriver) {
      await handleUpdate();
    } else {
      await handleAddNew();
    }
  };

  // Handle edit button click to populate the form with driver data
  const handleEditClick = (driver) => {
    setEditDriver(driver);
    setNewDriver(driver); // Populate the form with driver data
    setShowForm(true);
  };

  // Handle update driver
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/drivers/${editDriver.id}`, editDriver);
      const updatedDrivers = drivers.map((d) => (d.id === editDriver.id ? editDriver : d));
      setDrivers(updatedDrivers);
      setShowForm(false);
      setEditDriver(null);
    } catch (error) {
      console.error("There was an error updating the driver!", error);
    }
  };

  // Handle add new driver
  const handleAddNew = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/drivers", newDriver);
      setDrivers([...drivers, response.data]);
      setShowForm(false);
      setNewDriver({
        emp_No: "",
        name: "",
        licenseNumber: "",
        contactNumber: "",
        email: "",
      });
    } catch (error) {
      console.error("There was an error adding the new driver!", error);
    }
  };

  // Handle delete driver
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/drivers/${id}`);
      setDrivers(drivers.filter((d) => d.id !== id));
    } catch (error) {
      console.error("Error deleting driver!", error);
    }
  };

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current drivers for pagination
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  return (
    <div>
      <NavigationBar />
      <Container className="table-container my-2">
        <Row>
          <Col>
            <h2>Driver Details</h2>
          </Col>
          <Col className="btn1">
            <Button variant="primary" onClick={toggleForm}>
              {showForm ? "Cancel" : "Add"}
            </Button>
          </Col>
        </Row>
        {showForm && (
          <Row>
            <Col>
              <Container className="form-container my-2">
                <Row>
                  <Col>
                    <h2>{editDriver ? "Edit Driver" : "Add New Driver"}</h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formEmpNo">
                        <Form.Label>Employee Number</Form.Label>
                        <Form.Control
                          type="number"
                          name="emp_No"
                          value={editDriver ? editDriver.emp_No : newDriver.emp_No}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={editDriver ? editDriver.name : newDriver.name}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formLicenseNumber">
                        <Form.Label>License Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="licenseNumber"
                          value={editDriver ? editDriver.licenseNumber : newDriver.licenseNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formContactNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="contactNumber"
                          value={editDriver ? editDriver.contactNumber : newDriver.contactNumber}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={editDriver ? editDriver.email : newDriver.email}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Button variant="success" type="submit">
                        {editDriver ? "Update Driver" : "Add Driver"}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Table striped bordered hover className="data-table">
              <thead>
                <tr>
                  <th>Emp No</th>
                  <th>Name</th>
                  <th>License Number</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentDrivers.length > 0 ? (
                  currentDrivers.map((driver) => (
                    <tr key={driver.id}>
                      <td>{driver.emp_No}</td>
                      <td>{driver.name}</td>
                      <td>{driver.licenseNumber}</td>
                      <td>{driver.contactNumber}</td>
                      <td>{driver.email}</td>
                      <td>
                      <Button variant="success" className="edit-button">Edit </Button>
                      </td>
                      <td>
                        <Button variant="danger" onClick={() => handleDelete(driver.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No drivers found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        
      </Container>
      <Footer />
    </div>
  );
};

export default DriverDetails;
