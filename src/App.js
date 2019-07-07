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
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./config/constants";
import { styles } from "./assets/styles";
import JobItem from "./components/jobItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      qrVisisble: false
    };
  }

  componentWillMount() {
    this.setState({
      jobList: [
        {
          companyName: "Airbnb Inc",
          role: "UI designer",
          daysAgo: "6 days ago",
          location: "Bengaluru, India",
          application: "6",
          image: "airbnb",
          verified: true
        },
        {
          companyName: "Google Inc",
          role: "UI Strategy",
          daysAgo: "7 days ago",
          location: "Singapore",
          application: "9",
          image: "google",
          verified: true
        },
        {
          companyName: "Adobe Systems",
          role: "Full stack developer",
          daysAgo: "9 days ago",
          location: "Utah, US",
          application: "18",
          image: "adobe",
          verified: false
        },
        {
          companyName: "Airbnb Inc",
          role: "UI designer",
          daysAgo: "6 days ago",
          location: "Bengaluru, India",
          application: "6",
          image: "airbnb",
          verified: true
        },
        {
          companyName: "Google Inc",
          role: "UI Strategy",
          daysAgo: "7 days ago",
          location: "Singapore",
          application: "9",
          image: "google",
          verified: true
        },
        {
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
        <Row>
          <Col style={{ flex: 1, padding: 30 }}>
            <FontAwesomeIcon icon={faBars} size="lg" color="#424db0" />
            <Container
              style={{
                marginTop: 50
              }}
            >
              <Button variant="light" style={styles.inactiveLeftMenuItem}>
                Browse
              </Button>
              <Button variant="light" style={styles.inactiveLeftMenuItem}>
                Your Profile
              </Button>
              <Button variant="light" style={styles.activeLeftMenuItem}>
                Jobs
              </Button>
              <Button variant="light" style={styles.inactiveLeftMenuItem}>
                Community
              </Button>
              <Button variant="light" style={styles.inactiveLeftMenuItem}>
                Notifications
              </Button>
            </Container>
          </Col>
          <Col xs={7} style={{ backgroundColor: "#FAFAFA", padding: 30 }}>
            <Form.Control
              style={{
                borderRadius: 20,
                border: 0,
                boxShadow: `1px 1px 1px #ccc`,
                paddingLeft: 40,
                width: 600
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
                height: 650
              }}
            >
              {this.state.jobList.map(item => {
                return (
                  <JobItem
                    companyName={item.companyName}
                    role={item.role}
                    daysAgo={item.daysAgo}
                    location={item.location}
                    application={item.application}
                    logoPath={
                      item.image == "adobe"
                        ? require("./images/download.png")
                        : item.image == "google"
                        ? require("./images/google.jpg")
                        : require("./images/airbnb_sq.jpg")
                    }
                    verified={item.verified}
                  />
                );
              })}
            </Row>
          </Col>
          <Col
            xs={3}
            style={{
              padding: 30,
              alignItems: "center"
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                marginLeft: 120
              }}
              src={require("././images/google.jpg")}
            />
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 20
              }}
            >
              UX Design Lead
            </div>
            <div
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}
            >
              Next Billion Users
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 14,
                color: "grey",
                marginTop: 20,
                marginBottom: 20
              }}
            >
              Google, Singapore
            </div>
            <Button
              variant="primary"
              style={{
                backgroundColor: Constants.BASE_COLOR,
                border: 0,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
                marginLeft: 110
              }}
            >
              Apply
            </Button>
            <hr style={{ marginTop: 20, marginBottom: 20 }} />
            <div style={{ fontWeight: "bold", fontSize: 16, marginBottom: 20 }}>
              Minimum Qualification
            </div>
            <div
              style={{
                fontSize: 14,
                color: "grey",
                left: 0
              }}
            >
              <ul>
                <li>
                  BA/BS Degree in design. HCI,CS and related equivalent
                  experience
                </li>
                <li>5 Years of experience in relative field</li>
                <li>
                  Experience implementing visual design systems at scale with
                  vast knowledge in digital design
                </li>
                <li>Experience collaborating with multi disciplinary UX/UI</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
