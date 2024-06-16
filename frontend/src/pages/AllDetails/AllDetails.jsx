// AllDetails.jsx
import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  Row,
  Col,
  Form,
  Alert,
} from "react-bootstrap";
import "./AllDetails.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const AllDetails = () => {
  // const [details, setDetails] = useState(null);
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    lxb_no: "",
    estate_name: "",
    root: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  const rootOptions = ["Kp", "Ag", "Rp", "Ho", "Mo", "Pp", "Bs"].sort();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/estate/estate-register"
      );
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSeeMoreClick = (detail) => {
    setFormData(detail);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleApproveClick = () => {
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   id: formData.id, // Set id from details.id
    // }));
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
  };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted!");
  //   setShowFormModal(false);
  //   alert("Form data " + formData.id + formData.lxb_no);
  // };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/estate/update/${formData.id}`,
        {
          lxb_no: formData.lxb_no,
          estate_name: formData.estate_name,
          root: formData.root,
        }
      );
      setAlert({
        show: true,
        message: "Update successful",
        variant: "success",
      });
    } catch (error) {
      setAlert({ show: true, message: "Update failed", variant: "danger" });
    } finally {
      setShowFormModal(false);
      setShowModal(false);
      fetchData(); // Refresh data after update
    }
  };

  // if (!details) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <NavigationBar />

      <Container className="vh-100" fluid>
        <h2>Pending Estate Details</h2>

        <table striped bordered hover>
          <thead>
            <tr>
              <th>Owner Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(details) && details.length > 0 ? (
              details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.full_name}</td>
                  <td>{detail.email}</td>
                  <td>{detail.location}</td>

                  <td>
                    <div className="seeMore-button">
                      <Button onClick={() => handleSeeMoreClick(detail)}>
                        See More
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No data available
                </td>
              </tr>
            )}

            {/* <tr>
              <td>{details.full_name}</td>
              <td>{details.email}</td>
              <td>{details.location}</td>
              <td>
                <div className="seeMore-button">
                  <Button onClick={handleSeeMoreClick}>See More</Button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </Container>
      {/* {Array.isArray(details) && details.length > 0 ? ( */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Owner Details</h2>
          <Table>
            <tbody>
              <tr>
                <td>Owner Name:</td>
                <td>{formData.full_name}</td>
              </tr>
              <tr>
                <td>Id No:</td>
                <td>{formData.user_id}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{formData.email}</td>
              </tr>
            </tbody>
          </Table>
          <div className="images">
            <img src={"/images/Nic.jpg"} alt="Nic" />
            <img
              src={`../../assets/images/${formData.user_id_back}`}
              alt="BackNic"
            />
          </div>
          <h2>Land Details</h2>
          <Table>
            <tbody>
              <tr>
                <td>Land Owner Name:</td>
                <td>{formData.land_owner_name}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{formData.location}</td>
              </tr>
              <tr>
                <td>Land Reg No:</td>
                <td>{formData.land_r_no}</td>
              </tr>
            </tbody>
          </Table>
          <div className="images">
            <img
              src={`../../assets/images/${formData.land_r_copy}`}
              alt="Frontland"
            />
            <img
              src={`../../assets/images/${formData.owner_trance_letter}`}
              alt="BackLand"
            />
          </div>
          {/* <img src={/images/${...formData.land_r_copy}} alt="Frontland" />
      <img src={/images/${...formData.owner_trance_letter}} alt="BackLand" /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#ff5555" }}
            onClick={handleApproveClick}
          >
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ) : (
        <tbody>
          <tr>
            <td colSpan="11" className="text-center">
              No data available
            </td>
          </tr>
        </tbody>
      )} */}
      <Modal show={showFormModal} onHide={handleCloseFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Approval Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            {/* <Form.Group  controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                value={formData.id}
                type="text"
                name="id"
                // onChange={handleInputChange}
                placeholder="Enter ID "
                readOnly
              />
            </Form.Group> */}
            <Form.Group controlId="formLxbNumber">
              <Form.Label>LXB Number</Form.Label>
              <Form.Control
                value={formData.lxb_no}
                type="text"
                name="lxb_no"
                onChange={handleInputChange}
                placeholder="Enter LXB Number"
                required
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estate</Form.Label>
              <Form.Control
                value={formData.estate_name}
                type="text"
                name="estate_name"
                onChange={handleInputChange}
                placeholder="Enter Estate"
                required
              />
            </Form.Group>
            <Form.Group controlId="formRoot">
              <Form.Label>Root</Form.Label>
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
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
};

export default AllDetails;
