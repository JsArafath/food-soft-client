import React  from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './Farmers.css';

const Farmers = () => {


    return (
        <div className='farmers pb-5 pt-5'>
            <img src='https://i.ibb.co/xJbHRWD/icon5.png' className='d-flex mx-auto'></img>
            <h1 className='fw-bold text-center'>Our Farmers</h1>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
            <Container>
  <Row>
    <Col sm={12} md={12} lg={3}>
        <img src='https://i.ibb.co/t3HCyH3/team4.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://i.ibb.co/hR42jDv/team3.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://i.ibb.co/rwzz0P5/team2.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://i.ibb.co/kDbrLH1/team1.jpg' className='img-fluid'></img>
    </Col>
   
    
  </Row>
  
</Container>
            
  </div>
    )}     


export default Farmers;