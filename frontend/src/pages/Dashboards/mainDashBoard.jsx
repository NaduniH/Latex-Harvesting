import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import NavigationBar from "../../components/NavBar";
import Admin from "../../assets/images/admin.png";
import Footer from "../../components/Footer/footer";
import "./mainDashBoard.css";

const Dashboard = () => {
  const cardStyle = {
    border: "none",
    borderRadius: "8px",
    color: "#fff", // White text color
    height: "10rem",
    padding: "30px",
  };

  const cardDryStyle = {
    backgroundColor: "#cccccc", // Gray color
  };

  const cardCustomerStyle = {
    backgroundColor: "#b0b0b0", // Slightly darker gray
  };

  const cardRateStyle = {
    backgroundColor: "#a0a0a0", // Darker gray
  };

  return (
    <div>
      <NavigationBar />

      <Container fluid className="dashboard-container">
        {/* <header className="d-flex justify-content-between align-items-center py-3"> */}
        <Row>
          <Col xs={12} md={10} className="mb-4 mb-md-0 ">
            <h2>
              <b>Welcome to Executive Dashboard</b>
            </h2>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0 ">
            <div className="d-flex align-items-center">
              <Image
                src={Admin}
                alt="Admin"
                style={{
                  width: "70%",
                  height: "70%",
                  paddingTop: "20px",
                }}
              />
              {/* <span className="ml-2">Admin</span> */}
            </div>
          </Col>
        </Row>
        {/* </header> */}
        <section className="mt-4">
          <Row>
            <Col md={1}></Col>
            <Col md={4}>
              <h3>Performance</h3>
            </Col>
          </Row>
          {/* <h3 className="mb-4">Performance</h3> */}
          <Row>
            <Col md={2} className="mb-4 mb-md-0 p-3"></Col>
            <Col md={4} className="mb-4 mb-md-0 p-3">
              <Card
                style={{ ...cardStyle, ...cardRateStyle }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Total Dry(Kg) of month</Card.Title>
                  <Card.Text className="card-value">100Kg</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 mb-md-0 p-3">
              <Card
                style={{ ...cardStyle, ...cardRateStyle }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Total Customer</Card.Title>
                  <Card.Text className="card-value">80</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className="mb-4 mb-md-0 p-3"></Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4 mb-md-0 p-3"></Col>
            <Col md={4} className="mb-4 mb-md-0 p-3">
              <Card
                style={{ ...cardStyle, ...cardRateStyle }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Rate</Card.Title>
                  <Card.Text className="card-value">6.5%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 mb-md-0 p-3"></Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
