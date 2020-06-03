import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects/Projects";
import CodeVideo from "./components/CodeVideo/CodeVideo";
import Resume from "./pages/Resume/Resume";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav defaultActiveKey="/">
              <Nav.Link as={Link} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <CodeVideo />
          </Route>
        </Switch>
        </div>
        <footer>This is a footer</footer>
    </Router>
  );
}
