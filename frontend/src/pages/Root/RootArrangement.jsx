import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import "./RootArrangement.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const RootArrangement = () => {
  const [rootArrangement, setRootArrangement] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editArrangement, setEditArrangement] = useState(null);
  const [newArrangement, setNewArrangement] = useState({
    date: "",
    route: "",
    vehicleNo: "",
    supervisor: "",
    driver: "",
    helper: "",
    nightDriver: "",
    nightHelper: "",
  });
  const [selectedDate, setSelectedDate] = useState("");

  const routeOptions = [
    "Kamburupitiya",
    "Amithirigala",
    "Rathnapura",
    "Horana",
    "Monaragala",
    "Puwakpitiya",
    "Bulathsinhala"
  ];

  useEffect(() => {
    const fetchArrangements = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/arrangements");
        setRootArrangement(response.data);
      } catch (error) {
        console.error("There was an error fetching the arrangements!", error);
      }
    };

    fetchArrangements();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editArrangement) {
      setEditArrangement({ ...editArrangement, [name]: value });
    } else {
      setNewArrangement({ ...newArrangement, [name]: value });
    }
  };

  const handleEditClick = (arrangement) => {
    if (editArrangement && editArrangement.id === arrangement.id) {
      setShowForm(!showForm);
    } else {
      setEditArrangement(arrangement);
      setShowForm(true);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/arrangements/${editArrangement.id}`, editArrangement);
      const updatedArrangements = rootArrangement.map((arr) =>
        arr.id === editArrangement.id ? editArrangement : arr
      );
      setRootArrangement(updatedArrangements);
      setShowForm(false);
      setEditArrangement(null);
    } catch (error) {
      console.error("There was an error updating the arrangement!", error);
    }
  };

  const handleAddNew = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/arrangements", newArrangement);
      setRootArrangement([...rootArrangement, response.data]);
      setShowForm(false);
      setNewArrangement({
        date: "",
        route: "",
        vehicleNo: "",
        supervisor: "",
        driver: "",
        helper: "",
        nightDriver: "",
        nightHelper: "",
      });
    } catch (error) {
      console.error("There was an error adding the new arrangement!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/arrangements/${id}`);
      setRootArrangement(rootArrangement.filter((arr) => arr.id !== id));
    } catch (error) {
      console.error("There was an error deleting the arrangement!", error);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredArrangements = selectedDate
    ? rootArrangement.filter((arrangement) => arrangement.date === selectedDate)
    : rootArrangement;

  return (
    <div>
      <NavigationBar />
      <Container className="table-container my-2">
        <Row>
          <Col>
            <h2>Root Arrangement</h2>
          </Col>
          <Row>
            <Row className="mt-4">
              <Col className="text-start">
                <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                  {showForm ? "Cancel" : "Add"}
                </Button>
              </Col>
            </Row>
            {showForm && (
              <Container className="form-container my-2">
                <Row>
                  <Col>
                    <h2>{editArrangement ? "Edit Arrangement" : "Add New Arrangement"}</h2>
                    <Form>
                      <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={editArrangement ? editArrangement.date : newArrangement.date}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formRoute">
                        <Form.Label>Route</Form.Label>
                        <Form.Select
                          name="route"
                          value={editArrangement ? editArrangement.route : newArrangement.route}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Route</option>
                          {routeOptions.map((route, index) => (
                            <option key={index} value={route}>
                              {route}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formVehicleNo">
                        <Form.Label>Vehicle No</Form.Label>
                        <Form.Control
                          type="text"
                          name="vehicleNo"
                          value={editArrangement ? editArrangement.vehicleNo : newArrangement.vehicleNo}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formSupervisor">
                        <Form.Label>Supervisor</Form.Label>
                        <Form.Control
                          type="text"
                          name="supervisor"
                          value={editArrangement ? editArrangement.supervisor : newArrangement.supervisor}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formDriver">
                        <Form.Label>Driver</Form.Label>
                        <Form.Control
                          type="text"
                          name="driver"
                          value={editArrangement ? editArrangement.driver : newArrangement.driver}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHelper">
                        <Form.Label>Helper</Form.Label>
                        <Form.Control
                          type="text"
                          name="helper"
                          value={editArrangement ? editArrangement.helper : newArrangement.helper}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formNightDriver">
                        <Form.Label>Night Driver</Form.Label>
                        <Form.Control
                          type="text"
                          name="nightDriver"
                          value={editArrangement ? editArrangement.nightDriver : newArrangement.nightDriver}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formNightHelper">
                        <Form.Label>Night Helper</Form.Label>
                        <Form.Control
                          type="text"
                          name="nightHelper"
                          value={editArrangement ? editArrangement.nightHelper : newArrangement.nightHelper}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Button variant="success" className="UAD" onClick={editArrangement ? handleUpdate : handleAddNew}>
                        {editArrangement ? "Update Arrangement" : "Add Arrangement"}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )}
            <div className="controls">
              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="date" value={selectedDate} onChange={handleDateChange} />
              </Form.Group>
            </div>
          </Row>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Route</th>
                  <th>Vehicle No</th>
                  <th>Supervisor</th>
                  <th>Driver</th>
                  <th>Helper</th>
                  <th>Night Driver</th>
                  <th>Night Helper</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredArrangements.length > 0 ? (
                  filteredArrangements.map((arrangement, index) => (
                    <tr key={index}>
                      <td>{formatDate(arrangement.date)}</td>
                      <td>{arrangement.route}</td>
                      <td>{arrangement.vehicleNo}</td>
                      <td>{arrangement.supervisor}</td>
                      <td>{arrangement.driver}</td>
                      <td>{arrangement.helper}</td>
                      <td>{arrangement.nightDriver}</td>
                      <td>{arrangement.nightHelper}</td>
                      <td>
                        <Button variant="success" className="approve-button" onClick={() => handleEditClick(arrangement)}>
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button variant="danger" className="approve-button" onClick={() => handleDelete(arrangement.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No arrangements found
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

export default RootArrangement;
