import React from "react";
import Header from "./components/Header/Header";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const title = "title one";
  return (
    <div className="App">
      <Header />
      <Nav variant ="tabs" className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
