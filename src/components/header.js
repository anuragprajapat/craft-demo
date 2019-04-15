import React, { Component } from 'react';
import {Nav,Image} from 'react-bootstrap';
class Header extends Component {
    render() {
      return (
        <Nav
        style={{backgroundColor:'#000',height:60,position:'fixed',zIndex:9999,left:0,right:0,top:0}}
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <Nav.Item style={{padding:5}}>
          <Nav.Link href="/home"><Image src={require('./../logo-sm.png')} /></Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:5}}>
          <Nav.Link eventKey="exchange" style={{color:'#fff'}}><Image src={require('./../images/exchange_ic.png')} /> Exchange</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:5}}>
          <Nav.Link eventKey="otc" style={{color:'#fff'}}><Image src={require('./../images/otc_ic.png')} /> OTC</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:5}}>
          <Nav.Link eventKey="dashboard" style={{color:'#fff'}}><Image src={require('./../images/dashboard_ic.png')} /> Dashbaord</Nav.Link>
        </Nav.Item>
      </Nav>
      );
    }
}

export default Header;