import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Constants } from "./../config/constants";
import Signup from "./../routes/signup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: Constants.BASE_COLOR,
          width: "100%",
          border: 0
        }}
        variant="dark"
        sticky="top"
      >
        <Link to="/">
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            Remotely
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/post">
            <Button variant="light" style={{ marginRight: 50 }}>
              Post Job
            </Button>
          </Link>

          <Navbar.Text style={{ marginRight: 50 }}>
            <Link to="/login" style={{ fontWeight: "bold", fontSize: 15 }}>
              LOG IN
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/signup" style={{ fontWeight: "bold", fontSize: 15 }}>
              SIGN UP
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
