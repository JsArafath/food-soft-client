import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className='mt-5 mb-5'>
            <div class="container">
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 ">
      <img src='https://i.ibb.co/tLFM3d4/about1.png' className='img-fluid  about-image mt-4 w-100'></img>
      
    </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <h1 className='fs-1 about-heading pb-3 text-dark mx-4'>The Best Trusted Farms For You</h1>
      <p className='text-secondary mx-4'>Lorem ipsum dolor amet consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
</p>
<Container>
  <Row>
    <Col sm={12} md={12} lg={3}>
<img src='https://i.ibb.co/1mVx6FC/f1.png' className='img-fluid mb-3'></img>

    </Col>
    <Col sm={12} md={12} lg={9}>
      <h3>Natural Foods</h3>
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
  </Row>
  <Row>
    <Col sm={12} md={12} lg={3}>
    <img src='https://i.ibb.co/NxhgQbq/f2-1.png' className='img-fluid mb-3'></img>
    </Col>
    <Col sm={12} md={12} lg={9}>
    <h3>Safe Formalin</h3>
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
   
  </Row>
  <Row>
    <Col sm={12} md={12} lg={3}>
    <img src='https://i.ibb.co/WkXLdVF/f3.png' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={9}>
    <h3>100% Testy Food</h3>
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
  
  </Row>
</Container>

    </div>
    
    
  </div>
 
</div>

        </div>
    );
};

export default About;