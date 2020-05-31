import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Positions from "../../components/Positions/Positions";
import Meters from "../../components/Meters/Meters";
import Credentials from "../../components/Credentials/Credentials";
import "./Resume.css";

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Positions />
          </div>
        </Col>
        <Col>
          <div>
            <Credentials />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <div>
              <Meters />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
