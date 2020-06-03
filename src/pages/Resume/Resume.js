import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Positions from "../../components/Positions/Positions";
import Meters from "../../components/Meters/Meters";
import Credentials from "../../components/Credentials/Credentials";
import "./Resume.css";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";

const Resume = () => {
  return (
    <div className="resume">
      <main>
      <Container>
        <Row>
          <Col>
            <div>
              <ProfileBadge />
            </div>
            <div>
              <Meters />
            </div>
          </Col>
          <Col>
            <div>
              <Positions />
            </div>
            <div>
              <Credentials />
            </div>
          </Col>
        </Row>
      </Container>
      </main>
    </div>
  );
};

export default Resume;
