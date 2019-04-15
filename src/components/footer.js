import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
class Footer extends Component {
    render() {
      return (
        <div>
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
        </div>
      );
    }
}

export default Footer;