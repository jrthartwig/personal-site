import React from 'react'; 
import Card from "react-bootstrap/Card";
import './Credentials.css';

const Credentials = () => {
    return(
        <div>
        <div className="education">
          <Card border="info">
            <Card.Header>Education</Card.Header>
            <Card.Body>
              <Card.Title>Ball State University</Card.Title>
              <Card.Text>Logistics and Supply Chain Management</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="certifications">
          <Card border="info">
            <Card.Header>Certifications</Card.Header>
            <Card.Body>
              <Card.Title>Udemy</Card.Title>
              <Card.Text>Web Developer Bootcamp</Card.Text>
              <Card.Title>Scrum.org</Card.Title>
              <Card.Text>Professional Scrum Master</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
}

export default Credentials;