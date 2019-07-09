import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ButtonToolbar,
  Modal,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Header from "./../components/header";
import ConfirmModal from "./../components/ConfirmModal";
// import Footer from "./../components/footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./../config/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { styles } from "./../assets/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getJobInfo } from "../helpers/apiUtils";
import renderHTML from "react-render-html";

class JobView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      jobId: "",
      companyName: "",
      role: "",
      expires: "",
      location: "",
      application: "",
      image: "",
      amount: "",
      verified: false,
      modalShow: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentWillMount() {
    let params = new URLSearchParams(window.location.search);
    const jobId = params.get("jobId");
    //look up jobId in api
    let jobResponse = await getJobInfo(jobId);
    let jobResJSON = await jobResponse.json();
    console.log(jobResJSON);
    this.setState({
      jobId: jobResJSON[0].jobId,
      description: jobResJSON[0].description,
      companyName: jobResJSON[0].companyName,
      role: jobResJSON[0].role,
      expires: jobResJSON[0].expires,
      location: jobResJSON[0].location,
      application: jobResJSON[0].application,
      image: jobResJSON[0].image,
      verified: jobResJSON[0].verified,
      amount: jobResJSON[0].amount
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Container fluid="true" style={{ flex: 1, border: 0 }}>
        <Header />
        <Row>
          <Col />
          <Col xs={8} style={{}}>
            <Card>
              <Card.Body>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: Constants.BASE_COLOR
                  }}
                >
                  {this.state.role}
                  <p
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      fontWeight: "normal",
                      color: "#0a0a0a"
                    }}
                  >
                    {this.state.location +
                      " | Applications: " +
                      this.state.application}
                  </p>
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Work Type : One Time Project
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: this.state.description }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    <p>{"Buyer Budget : $" + this.state.amount}</p>
                    <br />
                    <ButtonToolbar>
                      <Button
                        style={{
                          backgroundColor: Constants.BASE_COLOR,
                          border: 0
                        }}
                        onClick={() => this.setState({ modalShow: true })}
                      >
                        Place Bid
                      </Button>
                    </ButtonToolbar>
                  </div>
                  <div style={{ fontWeight: "bold" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      style={{ height: 50, width: 50, borderRadius: 50 }}
                      src={
                        this.state.image == "adobe"
                          ? require("./../images/download.png")
                          : this.state.image == "google"
                          ? require("./../images/google.jpg")
                          : require("./../images/airbnb_sq.jpg")
                      }
                    />
                    <div style={{ color: "blue" }}>
                      {this.state.companyName}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
        <ConfirmModal
          jobTitle={this.state.role}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </Container>
    );
  }
}

export default JobView;
