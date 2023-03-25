// import React from 'react';
// import {Container, Row, Col, Carousel} from 'react-bootstrap';
// import './Gallary.css';
// const Gallary = () => {
//     return (
//         <div className='bg-dark text-white gallary'>
//           <Container>
//   <Row>

//   <Carousel>
  
//   <Carousel.Item>

//   <Container className='h-50'>
//   <Row className='mb-4 h-50'>
//     <Col sm={12} md={12} lg={4} className=' h-50'>
//     <img src='https://i.ibb.co/NLZD5Rx/photo-2023-03-25-18-40-10.jpg' className=' me-5 mx-5 h-50'></img>
//     <img src='https://i.ibb.co/7RMq4kV/photo-2023-03-25-18-40-10-2.jpg' className=' me-5 h-50'></img>
//     <img src='https://i.ibb.co/MGncrwv/photo-2023-03-25-18-40-09.jpg' className='img-fluid h-50'></img>
    
   
    
//     </Col>
    
//   </Row>
//   <Row>
//     <Col sm={12} md={12} lg={4} className=''>
//     <img src='https://i.ibb.co/9qtyS6t/photo-2023-03-25-18-40-08.jpg' className='img-fluid me-5 mx-5 h-50'></img>
//     <img src='https://i.ibb.co/3Wbt7TK/photo-2023-03-25-18-40-07.jpg' className='img-fluid me-5 h-50'></img>
//     <img src='https://i.ibb.co/jh1qRLp/photo-2023-03-25-18-40-05.jpg' className='img-fluid h-50'></img>
    
   
    
//     </Col>
    
//   </Row>
 
// </Container>    
//   </Carousel.Item>
//   <Carousel.Item>

//   <Container>
//   <Row className='mb-4'>
//     <Col sm={12} md={12} lg={12} className=''>
//     <img src='https://i.ibb.co/vH5mz1P/photo-2023-03-25-18-40-04.jpg' className='img-fluid me-5 mx-5 h-50' ></img>
//     <img src='https://i.ibb.co/NV03vyt/photo-2023-03-25-18-39-58.jpg' className='img-fluid me-5 h-50'></img>
//     <img src='https://i.ibb.co/g379P0J/photo-2023-03-25-18-39-57.jpg' className='img-fluid h-50'></img>
    
   
    
//     </Col>
    
//   </Row>
//   <Row>
//     <Col sm={12} md={12} lg={12} className=''>
//     <img src='https://i.ibb.co/80gWtYL/photo-2023-03-25-18-39-53.jpg' className='img-fluid me-5 mx-5'></img>
//     <img src='https://i.ibb.co/3dTv1Qc/photo-2023-03-25-18-40-06.jpg' className='img-fluid me-5'></img>
//     <img src='https://i.ibb.co/3dTv1Qc/photo-2023-03-25-18-40-06.jpg' className='img-fluid'></img>
    
   
    
//     </Col>
    
//   </Row>
 
// </Container>    
//   </Carousel.Item>
 
// </Carousel>


   
//   </Row>
  
// </Container>

//         </div>
//     );
// };

// export default Gallary;


















import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Gallary.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gallary = () => {
    
    return (
      <div className='services'>
        <div className='container'>
          <h1 className='fw-bold text-center mb-3'>Our Services</h1>
                  <CardGroup className='mb-3'>
  <Card className='me-2 card'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser1.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Organic Tomato</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <br></br>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser3.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Organic Fish</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser2.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Orange</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        <CardGroup>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser1.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Natural Foods</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser2.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Meat</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser3.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Guava</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        </div>
        </div>
    );
};

export default Gallary;