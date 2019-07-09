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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./../config/constants";
import { styles } from "./../assets/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class JobItem extends Component {
  render() {
    var {
      jobId,
      companyName,
      logoPath,
      daysAgo,
      application,
      role,
      location,
      verified
    } = this.props;
    return (
      <Row style={styles.rowItem}>
        <Col style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            src={logoPath}
          />
        </Col>
        <Col xs={8}>
          <div style={{ color: "#000", font: "bold", fontSize: 20 }}>
            <Link to={{ pathname: "/jobView", search: "?jobId=" + jobId }}>
              {companyName}{" "}
            </Link>
            {verified && (
              <FontAwesomeIcon
                style={{ marginLeft: 10 }}
                icon={faCheckCircle}
                size="sm"
                color="green"
              />
            )}
          </div>
          <div style={{ color: "#9c9bab", font: "bold", fontSize: 18 }}>
            {role}
          </div>
          <div
            style={{
              color: "#9c9bab",
              font: "bold",
              fontSize: 12,
              marginTop: 5
            }}
          >
            {daysAgo} | {application} applied
          </div>
        </Col>
        <Col>
          <div style={{ color: "#9c9bab", font: "bold", fontSize: 12 }}>
            {location}
          </div>
        </Col>
      </Row>
    );
  }
}
