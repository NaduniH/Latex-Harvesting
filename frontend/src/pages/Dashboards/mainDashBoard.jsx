import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import NavigationBar from "../../components/NavBar";
import Admin from "../../assets/images/admin.png";
import Footer from "../../components/Footer/footer";

const Dashboard = () => {
  const cardStyle = {
    border: "none",
    borderRadius: "8px",
    color: "#fff", // White text color
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

      <Container>
        {/* <header className="d-flex justify-content-between align-items-center py-3"> */}
        <Row>
          <Col xs={12} md={10} className="mb-4 mb-md-0 ">
            <h1>
              <b>Welcome to Executive Dashboard</b>
            </h1>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0 ">
            <div className="d-flex align-items-center">
              <Image
                src={Admin}
                alt="Admin"
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
              {/* <span className="ml-2">Admin</span> */}
            </div>
          </Col>
        </Row>
        {/* </header> */}
        <section className="mt-4">
          <h2 className="mb-4">Performance</h2>
          <Row>
            <Col xs={12} md={6} className="mb-4 mb-md-0 p-3">
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
            <Col xs={12} md={6} className="mb-4 mb-md-0 p-3">
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
          </Row>

          <Row>
            <Col xs={12} md={3} className="mb-4 mb-md-0 "></Col>
            <Col xs={12} md={6} className="mb-4 mb-md-0 p-3">
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
            <Col xs={12} md={3} className="mb-4 mb-md-0 "></Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
