import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "./Positions.css"

const Positions = () => {
    return (    
        <div className="positions-group">
        <Accordion defaultActiveKey="0">
          <Card border="info">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Associate Software Developer - Aptera Software
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Develop software on enterprise-level software projects.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card border="info">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Business Analyst - Aptera Software
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lead discoveries, requirements gathering initatives, and backlog
                management on enterprise-level software projects.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card border="info">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Business Analyst/Content Manager - DisrupDev, LLC
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Freelancer/Co-Owner of digital marketing company. Acted as
                business analyst, project manager, and content manager on
                WordPress and Shopify projects.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        <Card border="info">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                IT Business Analyst - Genuine Parts Company
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Created requirements documents and system diagrams for business
                intelligence, ERP, and website projects. Member of Project
                Management Office.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
    )}

    export default Positions;