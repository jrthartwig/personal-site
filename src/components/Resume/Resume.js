import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Associate Software Developer - Aptera Software, Inc.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Develop software on enterprise-level software projects.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Business Analyst - Aptera Software, Inc.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lead discoveries, requirements gathering initatives, and backlog
                management on enterprise-level software projects.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
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
          <Card>
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
      <div>
        <label for="html">HTML: </label>
        <meter
          className="meter"
          id="html"
          min="0"
          max="100"
          low="25"
          high="65"
          optimum="80"
          value="65"
        ></meter>
        <div>
          <label for="html">CSS: </label>
          <meter
            className="meter"
            id="html"
            min="0"
            max="100"
            low="25"
            high="65"
            optimum="80"
            value="65"
          ></meter>
        </div>
        <div>
          <label for="html">JavaScript: </label>
          <meter
            className="meter"
            id="html"
            min="0"
            max="100"
            low="25"
            high="50"
            optimum="80"
            value="60"
          ></meter>
        </div>
        <label for="html">C#: </label>
        <meter
          className="meter"
          id="html"
          min="0"
          max="100"
          low="25"
          high="65"
          optimum="50"
          value="50"
        ></meter>
      </div>
      <div>
        <label for="html">React JS: </label>
        <meter
          className="meter"
          id="html"
          min="0"
          max="100"
          low="25"
          high="65"
          optimum="80"
          value="65"
        ></meter>
      </div>
      <div>
        <div>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
