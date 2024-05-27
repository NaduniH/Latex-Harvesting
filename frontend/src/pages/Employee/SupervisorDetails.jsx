import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./SupervisorDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const SupervisorDetails = () => {
  // Dummy data
  const supervisors = [
    { empNo: 1540, name: 'Mr. Asim', route: 'Kamburupitiya', contact: '0770673448', email: 'aslimnahil@gmail.com' },
    { empNo: 1541, name: 'Mr. Devin', route: 'Rathnapura', contact: '0768053540', email: 'devinnath@gmail.com' },
    { empNo: 1542, name: 'Mr. Nihal', route: 'Monaragala', contact: '0785589750', email: 'nihalfith@gmail.com' }
  ];


  return (
    <div>
      <NavigationBar />

      <Container className="supervisor-details my-4">
        <Row className="mb-2 ">
          <Col>
            <h2>Supervisor's Details</h2>
          </Col>
        </Row>
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
                </tr>
              </thead>
              <tbody>
                {supervisors.map((supervisor, index) => (
                  <tr key={index}>
                    <td>{supervisor.empNo}</td>
                    <td>{supervisor.name}</td>
                    <td>{supervisor.vehicle}</td>
                    <td>{supervisor.route}</td>
                    <td>{supervisor.contact}</td>
                    <td>{supervisor.email}</td>
                    <td>
                      <Button variant="success" className="edit-button">
                        Edit
                      </Button>
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

export default SupervisorDetails;