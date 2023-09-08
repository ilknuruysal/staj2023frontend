import React, { Component } from 'react';
import logo from '../images/shopping_basket.jpeg';
import { Col, Row, Placeholder, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; // Hash veya Browser router olmasını etkilemez

export default class WelcomePage extends Component
{
  render()
  {
    return(
      <div className ='container' style = {{marginTop : '50px'}}>
        <Row>
          <Col xs ='3'>
            <img src = {logo} alt =''/> { /*SEO açısıdan alt kelimesini yazmak gerekir*/ }
          </Col>
          <Col xs ='3'/>
          <Col xs ='6'>
            <Placeholder color ='info' xs = {12} size ='lg'/>

            <p style = {{ color : '#FF00FF', fontSize : '3.0rem', textAlign : 'center'}}>August 2023 Internship</p>
            <p style = {{ color : '#BA55D3', fontSize : '5.0rem', textAlign : 'center'}}>Store Tracking System</p>

            <Placeholder color ='info' xs = {12} size ='lg'/>
          </Col>
        </Row>

        <Row style = {{marginTop : '30px', marginLeft : '70px'}}>
          <Col/>
          <Col>
            <i className ='pi pi-user' style = {{color : '#FF00FF', fontSize : '3.0rem', marginLeft : '50px'}}/>
            <br/><br/>
            <Link to ="/signup">
              <Button color ='info' size ='lg' style = {{marginLeft : '20px'}}>Sign Up</Button>
            </Link>
            <br/><br/>
            <Link to ="/login">
              <Button color ='info' size='lg' style={{marginLeft : '30px'}}>Login</Button>
            </Link>
          </Col>
          <Col/>
        </Row>
      </div>
    );
  }
}