import React, { Component } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { Constants } from "./../config/constants";

export default class ConfirmModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Applying for : " + this.props.jobTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your Bid</h4>
          <p>Make sure your proposed amount is in sweet spot!</p>
          <InputGroup className="mb-3" style={{ width: 200 }}>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: Constants.BASE_COLOR,
              border: 0
            }}
            onClick={this.props.onHide}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
