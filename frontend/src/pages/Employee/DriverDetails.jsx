import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./EmployeeDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";


const DriverDetails = () => {
  // Dummy data
  const driver = [
    {
      empNo: 1500,
      name: "Mr.Kamal",
      route: "Kamburupitiya",
      contact: "0770673448",
      email: "kamal@gmail.com",
    },
    {
      empNo: 1501,
      name: "Mr.Saman",
      route: "Rathnapura",
      contact: "0758963548",
      email: "saman@.com",
    },
    {
      empNo: 1503,
      name: "Mr.Pawan",
      route: "Monaragala",
      contact: "0769854698",
      email: "pawan@gmail.com",
    },
  ];

  return (
    <div>
      <NavigationBar />

      <Container className="employee-details my-2">
        <Row>
          <Col>
            <h2>Driver's Details</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Emp.no</th>
                  <th>Driver Name</th>
                  <th>Route</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {driver.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.empNo}</td>
                    <td>{driver.name}</td>
                    <td>{driver.route}</td>
                    <td>{driver.contact}</td>
                    <td>{driver.email}</td>
                    <td>
                      <Button variant="success" className="edit-button">Edit </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-end">
            <Button variant="success" className="change-arrangement-button">
              Change arrangement
            </Button>
          </Col>
        </Row>
        
      </Container>
  <Footer />
    </div>
  );
};

export default DriverDetails;