import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Header from "./../components/header";
// import Footer from "./../components/footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "./../config/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

// import { styles } from "./../assets/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      editorState: EditorState.createEmpty()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {}

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Container fluid="true" style={{ flex: 1, border: 0 }}>
        <Header />
        <Row>
          <Col />
          <Col xs={8} style={{}}>
            <Card>
              <div
                style={{ backgroundColor: Constants.BASE_COLOR, padding: 20 }}
              >
                <p style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>
                  Tell us what you need done
                </p>
                <p style={{ fontSize: 14, color: "#fff" }}>
                  Contact skilled freelancers within minutes. View profiles,
                  ratings, portfolios and chat with them. Pay the freelancer
                  only when you are 100% satisfied with their work.
                </p>
              </div>
              <Card.Body>
                <Form style={{ alignItems: "center", width: "100%" }}>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Choose a name for your project
                    </Form.Label>
                    <Form.Control type="text" placeholder="Your project name" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Tell us more about your project
                    </Form.Label>
                    <p style={{ fontStyle: "italic", fontSize: 14 }}>
                      Start with a bit about yourself or your business, and
                      include an overview of what you need done.
                    </p>
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorStateChange}
                    />
                  </Form.Group>
                  <p style={{ fontWeight: "bold" }}>Budget</p>
                  <InputGroup className="mb-3" style={{ width: 200 }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>

                  <p style={{ fontWeight: "bold" }}>
                    Expected date of completion
                  </p>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />

                  <div
                    style={{
                      justifyContent: "flex-end",
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
                        POST
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

export default PostJob;
