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
import Header from "./components/header";
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./config/constants";
import { styles } from "./assets/styles";
import JobItem from "./components/jobItem";
import Home from "./routes/home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signup from "./routes/signup";
import Login from "./routes/login";
import PostJob from "./routes/postJob";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={PostJob} />
        </Switch>
      </Router>
    );
  }
}

export default App;
