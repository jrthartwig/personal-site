import React from 'react'; 
import Card from "react-bootstrap/Card";

const Credentials = () => {
    return(
        <div>
        <div>
          <Card>
            <Card.Header>Education</Card.Header>
            <Card.Body>
              <Card.Title>Ball State University</Card.Title>
              <Card.Text>Logistics and Supply Chain Management</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
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