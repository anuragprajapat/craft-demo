import React, { Component } from 'react';
import {Nav,Container,Image,Card,Row,Col,Form,Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid="true" style={{backgroundColor:'#f6f6f6'}}>
        <Nav
          style={{backgroundColor:'#000',height:60,position:'fixed',zIndex:9999,left:0,right:0,top:0}}
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
          <Nav.Item style={{padding:5}}>
            <Nav.Link href="/home"><Image src={require('./logo-sm.png')} /></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{padding:5}}>
            <Nav.Link eventKey="exchange" style={{color:'#fff'}}><Image src={require('./images/exchange_ic.png')} /> Exchange</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{padding:5}}>
            <Nav.Link eventKey="otc" style={{color:'#fff'}}><Image src={require('./images/otc_ic.png')} /> OTC</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{padding:5}}>
            <Nav.Link eventKey="dashboard" style={{color:'#fff'}}><Image src={require('./images/dashboard_ic.png')} /> Dashbaord</Nav.Link>
          </Nav.Item>
        </Nav>
        
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
                <Row style={{marginTop:20}} >
                  <Col>
                  <div style={{paddingBottom:20,paddingTop:20}}>
                    <a href="#" style={{color:'#ffc200'}}>Show QR Code</a>
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
            <Row style={{marginTop:20}}>
              <Col>
                <Card.Title>Notifications Alert </Card.Title>
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
        <Row style={{backgroundColor:'#000',color:"#fff",paddingRight:100,paddingLeft:100}}>
          <Col>
            <div style={{paddingTop:20,paddingBottom:20}}>PARAMOUNTDAX PVT. LTD.</div>
            <div style={{fontSize:15}}>
                  Paramountdax Pvt. Ltd.<br/>
                  #9, Pilgrim Avenue<br/>
                  Chevy Chase, MD 20815<br/>
                  Melbourne, FL 32904
            </div>
            <div style={{fontSize:15,paddingTop:10}}>
            Landline : 1800 - 123 - 456-789
            </div>
          </Col>
          <Col>
            <div style={{paddingTop:20,paddingBottom:20}}>QUICK LINKS</div>
            <a style={{fontSize:12}}>
              ABOUT US
            </a><br/>
            <a style={{fontSize:12}}>
              TERMS AND CONDITIONS
            </a><br/>
            <a style={{fontSize:12}}>
              PRIVACY POLICY
            </a><br/>
            <a style={{fontSize:12}}>
              FAQ
            </a><br/>
            <a style={{fontSize:12}}>
              CONTACT US
            </a>
          </Col>
          <Col>
            <div style={{paddingTop:20,paddingBottom:20}}>SUPPORT AND SALES</div>
            <div style={{fontSize:15}}>
                  sales@info.com<br/>
                  support@info.com<br/>
            </div>
          </Col>
          <Col>
            <div style={{paddingTop:20,paddingBottom:20}}>CONNECT WITH US</div>
            <div style={{fontSize:15}}>
                  facebook.com<br/>
                  gmail.com<br/>
            </div>
          </Col>
        </Row>
        <Row style={{backgroundColor:'#000',color:"#fff",paddingTop:20,paddingBottom:20,alignItems:'center'}}>
          <Col style={{textAlign:'center'}}>@ Copyright 2018. All Rights Reserved</Col>
          
        </Row>
      </Container>
    );
  }
}

export default App;
