import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Header from "./../components/header";
// import Footer from "./../components/footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./../config/constants";
// import { styles } from "./../assets/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <Container fluid="true" style={{ flex: 1 }}>
        <Header />
        <Row>
          <Col />
          <Col xs={6} style={{}}>
            <Card>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  SIGN UP
                </Card.Title>

                <Form style={{ alignItems: "center", width: "100%" }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Retype Password"
                    />
                  </Form.Group>
                  <div
                    style={{
                      justifyContent: "space-around",
                      display: "flex"
                    }}
                  >
                    <Link to="/">
                      <Button
                        style={{
                          backgroundColor: Constants.BASE_COLOR,
                          border: 0
                        }}
                        type="submit"
                      >
                        SIGNUP AS BUYER
                      </Button>
                    </Link>

                    <Link to="/">
                      <Button
                        style={{
                          backgroundColor: Constants.BASE_COLOR,
                          border: 0
                        }}
                        type="submit"
                      >
                        SIGNUP AS SELLER
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Signup;
