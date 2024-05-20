import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const VFADetails = () => {
  const [dateRange, setDateRange] = useState("DAY");
  const [showVfaRange, setShowVfaRange] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = () => {
    // Simulating data fetch
    setData({
      lxbNumber: "001",
      stateName: "abc",
      root: "KKP",
      dry: "100Kg",
      vfa: 0.037,
      nh3: 0.27,
      date: "2024-05-20",
    });
  };

  const graphData = {
    labels: ["KP", "RP", "MG", "HO", "PP"],
    datasets: [
      {
        label: "VFA",
        data: [0.2, 0.5, 0.8, 0.1, 0.4],
        fill: false,
        backgroundColor: "green",
        borderColor: "lightgreen",
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col>
          <Button variant="success">All</Button>
          <Button variant="success">Kp</Button>
          <Button variant="success">RP</Button>
          <Button variant="success">Mg</Button>
          <Button variant="success">HO</Button>
          <Button variant="success">PP</Button>
          <Button variant="success">Bs</Button>
          <Button variant="success">Ag</Button>
        </Col>
        <Col>
          <Button variant="success" onClick={() => setDateRange("DAY")}>
            DAY
          </Button>
          <Button variant="success" onClick={() => setDateRange("Monthly")}>
            Monthly
          </Button>
          <Button variant="success" onClick={() => setDateRange("Year")}>
            Year
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Line data={graphData} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            variant="danger"
            onClick={() => setShowVfaRange(!showVfaRange)}
          >
            High VFA
          </Button>
          {showVfaRange && (
            <>
              <Form.Control
                type="number"
                placeholder="min"
                className="mx-2"
                style={{ display: "inline", width: "auto" }}
              />
              <Form.Control
                type="number"
                placeholder="max"
                className="mx-2"
                style={{ display: "inline", width: "auto" }}
              />
            </>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search LXB Number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="secondary" onClick={handleSearch}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      {data && (
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>LXB Number</th>
                  <th>State Name</th>
                  <th>Root</th>
                  <th>Dry(kg)</th>
                  <th>VFA</th>
                  <th>NH3</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.lxbNumber}</td>
                  <td>{data.stateName}</td>
                  <td>{data.root}</td>
                  <td>{data.dry}</td>
                  <td>{data.vfa}</td>
                  <td>{data.nh3}</td>
                  <td>{data.date}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default VFADetails;
