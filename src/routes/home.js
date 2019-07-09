import React, { Component } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Badge,
  Image
} from "react-bootstrap";
import Header from "./../components/header";
import Footer from "./../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./../config/constants";
import { styles } from "./../assets/styles";
import JobItem from "./../components/jobItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      jobList: [
        {
          jobId: "J001",
          companyName: "Airbnb Inc",
          role: "UI designer",
          daysAgo: "6 days ago",
          location: "Bengaluru, India",
          application: "6",
          image: "airbnb",
          verified: true
        },
        {
          jobId: "J002",
          companyName: "Google Inc",
          role: "UI Strategy",
          daysAgo: "7 days ago",
          location: "Singapore",
          application: "9",
          image: "google",
          verified: true
        },
        {
          jobId: "J003",
          companyName: "Adobe Systems",
          role: "Full stack developer",
          daysAgo: "9 days ago",
          location: "Utah, US",
          application: "18",
          image: "adobe",
          verified: false
        },
        {
          jobId: "J004",
          companyName: "Airbnb Inc",
          role: "UI designer",
          daysAgo: "6 days ago",
          location: "Bengaluru, India",
          application: "6",
          image: "airbnb",
          verified: true
        },
        {
          jobId: "J005",
          companyName: "Google Inc",
          role: "UI Strategy",
          daysAgo: "7 days ago",
          location: "Singapore",
          application: "9",
          image: "google",
          verified: true
        },
        {
          jobId: "J006",
          companyName: "Adobe Systems",
          role: "Full stack developer",
          daysAgo: "9 days ago",
          location: "Utah, US",
          application: "18",
          image: "adobe",
          verified: false
        }
      ]
    });
  }

  render() {
    return (
      <Container fluid="true" style={{ flex: 1 }}>
        <Header />
        <Row>
          <Col style={{ flex: 1, padding: 30 }} />
          <Col xs={8} style={{ backgroundColor: "#FAFAFA", padding: 30 }}>
            <Form.Control
              style={{
                borderRadius: 20,
                border: 0,
                boxShadow: `1px 1px 1px #ccc`,
                paddingLeft: 40,
                width: 600,
                color: "rgb(156, 155, 171)"
              }}
              type="text"
              placeholder="Search by title, company, keywords..."
            />
            <Row
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 20,
                marginBottom: 10
              }}
            >
              <div style={styles.tagStyle}>UX Design</div>
              <div style={styles.tagStyle}>Interaction Design</div>
              <div style={styles.tagStyle}>Product Design</div>
            </Row>
            <Row
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                overflow: "scroll",
                height: 630
              }}
            >
              {this.state.jobList.map(item => {
                return (
                  <JobItem
                    jobId={item.jobId}
                    companyName={item.companyName}
                    role={item.role}
                    daysAgo={item.daysAgo}
                    location={item.location}
                    application={item.application}
                    logoPath={
                      item.image == "adobe"
                        ? require("./../images/download.png")
                        : item.image == "google"
                        ? require("./../images/google.jpg")
                        : require("./../images/airbnb_sq.jpg")
                    }
                    verified={item.verified}
                  />
                );
              })}
            </Row>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Home;
