import React, { Component } from 'react';
import {Container,Card,Row,Col,Form,Button,Image} from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  constructor(){
    super();
    this.state={
      qrVisisble:false
    };
  }
  render() {
    return (
      <Container fluid="true" style={{backgroundColor:'#f6f6f6'}}>
        <Header />
        
        <Card style={{ marginLeft:150,marginRight:150 ,marginTop:60}}>
          <Card.Body>
            <Card.Title>Security</Card.Title>
            <hr/>
            <Card.Text style={{color:"#666666",paddingTop:20,paddingBottom:20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </Card.Text>
            <Row style={{marginTop:20}} >
              <Col xs={4}>
                <Card.Title>Change Password </Card.Title>
                <hr/>
                <div style={{paddingBottom:20,paddingTop:20}}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{fontSize:15}}>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{fontSize:15}}>New Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{fontSize:15}}>Retype New Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>
                  <Button style={{backgroundColor:'#ffc200',borderColor:'#ffc200',color:'#000',paddingLeft:40,paddingRight:40}}>SUBMIT</Button>
                </div>
                
              </Col>
              <Col>
              <Card.Title>Two - Factor Authentications </Card.Title>
              <hr/>
                <Row style={{marginTop:20}} >
                  <Col>
                  <div style={{paddingBottom:20,paddingTop:20}}>
                    <Row>
                      <Col>
                        <a href="#" style={{color:'#ffc200'}} onClick={()=>this.setState({
                          qrVisisble:!this.state.qrVisisble
                        })}>Show QR Code</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      {
                        this.state.qrVisisble &&
                        <Image src={require('./../src/images/qr.png')}/>
                      }
                      </Col>
                    </Row>
                    
                    
                  </div>
                  </Col>
                  <Col>
                    <div style={{paddingBottom:20,paddingTop:20}}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Secret Code</Form.Label>
                        <Form.Control type="text" placeholder="JDINEI983R3" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Code</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Button style={{backgroundColor:'#ffc200',borderColor:'#ffc200',color:'#000',paddingLeft:40,paddingRight:40}}>ENABLE</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{marginTop:20,paddingBottom:20}}>
              <Col>
                <Card.Title>Notifications Alert </Card.Title>
                <hr/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:20,paddingBottom:20}}>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Login" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Change Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Profile Update" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Contact Us" />
                  </Form.Group>
                </div>
                <Button style={{backgroundColor:'#ffc200',borderColor:'#ffc200',color:'#000',paddingLeft:40,paddingRight:40}}>SUBMIT</Button>
              </Col>
              <Col></Col>
              

            </Row>
          </Card.Body>
        </Card>
        <Footer />
      </Container>
    );
  }
}

export default App;
