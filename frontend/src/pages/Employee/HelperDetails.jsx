import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import "./EmployeeDetails.css"; // Ensure you have the correct CSS file imported
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const HelperDetails = () => {
  const [helpers, setHelpers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editHelper, setEditHelper] = useState(null);
  const [newHelper, setNewHelper] = useState({
    emp_No: "",
    name: "",
    contactNumber: "",
    email: "",
    nic: "", // Added NIC field
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [helpersPerPage] = useState(5); // Number of helpers per page

  // Fetch all helpers from backend on component mount
  useEffect(() => {
    const fetchHelpers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/helpers");
        setHelpers(response.data);
      } catch (error) {
        console.error("Error fetching helpers:", error);
      }
    };

    fetchHelpers();
  }, []);

  // Handle input change in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editHelper) {
      setEditHelper({ ...editHelper, [name]: value });
    } else {
      setNewHelper({ ...newHelper, [name]: value });
    }
  };

  // Toggle form visibility for adding new or editing helper
  const toggleForm = () => {
    setShowForm(!showForm);
    setEditHelper(null); // Reset editHelper state
    setNewHelper({
      emp_No: "",
      name: "",
      contactNumber: "",
      email: "",
      nic: "", // Reset NIC field
    });
  };

  // Handle edit button click to populate the form with helper data
  const handleEditClick = (helper) => {
    setEditHelper(helper);
    setNewHelper({ ...helper }); // Populate form fields with helper data for editing
    setShowForm(true);
  };

  // Handle form submission for adding or updating helper details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editHelper) {
        // Update existing helper
        await axios.put(
          `http://localhost:5000/api/helpers/${editHelper.id}`,
          editHelper
        ); // Use editHelper directly, as it's already updated
        const updatedHelpers = helpers.map((h) =>
          h.id === editHelper.id ? editHelper : h
        );
        setHelpers(updatedHelpers);
      } else {
        // Add new helper
        const response = await axios.post(
          "http://localhost:5000/api/helpers",
          newHelper
        );
        setHelpers([...helpers, response.data]);
      }
      setShowForm(false); // Hide form after submission
      setEditHelper(null); // Reset editHelper state
      setNewHelper({
        emp_No: "",
        name: "",
        contactNumber: "",
        email: "",
        nic: "", // Reset NIC field
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle delete button click to delete a helper
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/helpers/${id}`);
      setHelpers(helpers.filter((h) => h.id !== id));
    } catch (error) {
      console.error("Error deleting helper:", error);
    }
  };

  // Pagination Logic
  const indexOfLastHelper = currentPage * helpersPerPage;
  const indexOfFirstHelper = indexOfLastHelper - helpersPerPage;
  const currentHelpers = helpers.slice(indexOfFirstHelper, indexOfLastHelper);

  // Function to change current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Dummy data
  // const helpers = [
  //   {
  //     empNo: 1200,
  //     name: "Mr.Nihal",
  //     vehicle: "IF4499",
  //     route: "Kamburupitiya",
  //     contact: "0712857347",
  //     email: "nihal@gmail.com",
  //   },
  //   {
  //     empNo: 1201,
  //     name: "Mr.Sachintha",
  //     vehicle: "IF4498",
  //     route: "Horana",
  //     contact: "0712851416",
  //     email: "sachintha@gmail.com",
  //   },
  //   {
  //     empNo: 1202,
  //     name: "Mr.Kavishka",
  //     vehicle: "IF4497",
  //     route: "Rathnapura",
  //     contact: "0779638565",
  //     email: "kavishka@gmail.com",
  //   },
  // ];

  return (
    <div>
      <NavigationBar />
      <Container className="table-container my-2">
        <Row>
          <Col>
            <h2>Helper Details</h2>
          </Col>
          <Col>
            <Button className="btn1" variant="primary" onClick={toggleForm}>
              {showForm ? "Cancel" : "Add"}
            </Button>
          </Col>
        </Row>
        {showForm && (
          <Row>
            <Col>
              <Container className="form-container my-2">
                <h2>{editHelper ? "Edit Helper" : "Add New Helper"}</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmpNo">
                    <Form.Label>Employee No</Form.Label>
                    <Form.Control
                      type="text"
                      name="emp_No"
                      value={editHelper ? editHelper.emp_No : newHelper.emp_No}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={editHelper ? editHelper.name : newHelper.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formContactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNumber"
                      value={
                        editHelper
                          ? editHelper.contactNumber
                          : newHelper.contactNumber
                      }
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={editHelper ? editHelper.email : newHelper.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formNIC">
                    <Form.Label>NIC</Form.Label>
                    <Form.Control
                      type="text"
                      name="nic"
                      value={editHelper ? editHelper.nic : newHelper.nic}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Button
                    className="controls text-end"
                    variant="success"
                    type="submit"
                  >
                    {editHelper ? "Update Helper" : "Add Helper"}
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Table striped bordered hover className="data-table">
              <thead>
                <tr>
                  <th>Employee No</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>NIC</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentHelpers.length > 0 ? (
                  currentHelpers.map((helper) => (
                    <tr key={helper.id}>
                      <td>{helper.emp_No}</td>
                      <td>{helper.name}</td>
                      <td>{helper.contactNumber}</td>
                      <td>{helper.email}</td>
                      <td>{helper.nic}</td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => handleEditClick(helper)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(helper.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No helpers found
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

export default HelperDetails;
