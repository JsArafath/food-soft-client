import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
// import './Articles.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
    
    return (
      <div className='services'>
<img src='https://i.ibb.co/tJYPJZ6/icon7.png' className='img-fluid d-flex mx-auto'></img>
          <h1 className='fw-bold text-center mb-3'>Articles & Tips</h1>
         
<Container>
  <Row>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card mb-2'>
    <Card.Img variant="top" src="https://i.ibb.co/0rYM0SK/blog1-1.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body>
    
  </Card>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card mb-2'>
    <Card.Img variant="top" src="https://i.ibb.co/thPDP8z/blog2-1.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body>
    
  </Card>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card'>
    <Card.Img variant="top" src="https://i.ibb.co/0rYM0SK/blog1-1.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text> 
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body> 
  </Card>
    </Col> 
  </Row>
</Container>
        </div>
    );
};

export default Blogs;