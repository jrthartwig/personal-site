import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Positions from "../../components/Positions/Positions";
import Meters from "../../components/Meters/Meters";
import Credentials from "../../components/Credentials/Credentials";
import "./Resume.css";
import SocialChannels from "../../components/SocialChannels/SocialChannels";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ProfileBadge />
          </div>
          <div>
            <Meters />
          </div>
          <div>
            <SocialChannels />
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
  );
};

export default Resume;
