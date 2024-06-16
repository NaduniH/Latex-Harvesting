import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstateDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const EstateDetailsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchData("All");
  }, []);

  const fetchData = async (root) => {
    console.log(root + " fetching data");
    try {
      const response = await fetch(`http://localhost:5000/api/root/${root}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        // alert(data);
        setData(Array.isArray(result.results) ? result.results : []);
        setFilteredData(Array.isArray(result.results) ? result.results : []);
      } else {
        // Handle errors based on response status
        alert(data.message || "fetch data failed");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const handleFilter = (root) => {
    fetchData(root);
    setSelectedFilter(root);
  };

  const handleNewStatePending = () => {
    navigate("/alldetails");
  };

  return (
    <div>
      <NavigationBar />
      <h2 className="my-4">Estate's Details</h2>
      <Container fluid className="vh-100">
        <br />
        <Row className="mb-3">
          <Col className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
              <div className="d-flex">
                {["All", "Kp", "Rp", "Mg", "Ho", "Pp", "Bs", "Ag"].map(
                  (filter, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedFilter === filter ? "primary" : "success"
                      }
                      // variant="success"
                      className="mx-3 mb-2"
                      onClick={() => handleFilter(filter)}
                    >
                      {filter}
                    </Button>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={10} className="d-flex justify-content-end">
            <InputGroup
              className="search-bar mb-2"
              style={{ maxWidth: "300px" }}
            >
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={2} className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleNewStatePending}>
              New State Pending
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <div className="scrollable-table">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>LXB Number</th>
                    <th>State Name</th>
                    <th>Owner Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Root</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(filteredData) && filteredData.length > 0 ? (
                    filteredData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.lxb_no}</td>
                        <td>{data.estate_name}</td>
                        <td>{data.full_name}</td>
                        <td>{data.email}</td>
                        <td>{data.location}</td>
                        <td>{data.root}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EstateDetailsPage;
