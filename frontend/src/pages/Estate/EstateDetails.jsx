import React from "react";
import { Container, Row, Col, Form, Button, Table, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstateDetails.css"; // Make sure to create and use an appropriate CSS file
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const EstateDetailsPage = () => {
  const dummyData = [
    {
      LXBNumber: "001",
      stateName: "Mr.Niha",
      ownerName: "Mr.sunil",
      ownerContact: "07106126047",
      assistantContact: "07123456789",
      helperContact: "0712657347",
      averageTapping: "350L",
      area: "230area",
      location: "dialuma akurassa",
      root: "kp",
    }
  ];

  return (
    <div>
      <NavigationBar />
  
      <Container fluid className="vh-100">
              <h2 className="my-4">Estate's Details</h2>
              <br></br>
        <Row className="mb-3">
          <Col className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-wrap align-items-center justify-content-start">
              {["All", "Kp", "Rp", "Mg", "Ho", "Pp", "Bs", "Ag"].map((filter, index) => (
                <Button key={index} variant="success" className="mx-3 mb-2">
                  {filter}
                </Button>
              ))}
                          
              <InputGroup className="search-bar mx-1 mb-2 ml-auto">
                <FormControl placeholder="Search" aria-label="Search" />
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
              </Row>
              <Button variant="success" className="mx-1 mb-2 ml-auto">New state pending</Button>
              <br></br>
              <br></br>

        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>LXB Number</th>
                  <th>State Name</th>
                  <th>Owner Name</th>
                  <th>Owner Contact</th>
                  <th>Assistant Contact</th>
                  <th>Helper Contact</th>
                  <th>Average Tapping</th>
                  <th>Area</th>
                  <th>Location</th>
                  <th>Root</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.LXBNumber}</td>
                    <td>{data.stateName}</td>
                    <td>{data.ownerName}</td>
                    <td>{data.ownerContact}</td>
                    <td>{data.assistantContact}</td>
                    <td>{data.helperContact}</td>
                    <td>{data.averageTapping}</td>
                    <td>{data.area}</td>
                    <td>{data.location}</td>
                    <td>{data.root}</td>
                    <td>
                      <Button variant="success">Edit</Button>
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

export default EstateDetailsPage;
