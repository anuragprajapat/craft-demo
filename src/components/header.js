import React, { Component } from "react";
import { Nav, Image, Form } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Nav
        style={{
          height: 60,
          position: "fixed",
          zIndex: 9999,
          left: 0,
          right: 0,
          top: 0,
          alignItems: "center",
          paddingLeft: 50
        }}
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link
            href="/home"
            style={{ color: "grey", fontWeight: "bold", fontSize: 20 }}
          >
            Remote.ly
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/home"
            style={{ color: "grey", fontWeight: "bold", fontSize: 16 }}
          >
            FIND WORK
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Form.Group controlId="formBasicEmail" style={{ width: 300 }}>
            <Form.Control type="email" placeholder="Search Job..." />
          </Form.Group>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Header;
