import React from 'react';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
import './Gallary.css';
import { Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gallary = () => {
    
    return (
      <div className='services'>
        <div className='container'>
          <h1 className='fw-bold text-center mb-3'>Our Services</h1>
                  <CardGroup className='mb-3'>
  <Card className='me-2 card'>
    <Card.Img variant="top" src="https://i.ibb.co/s1tpfWD/s5.png" className='img-fluid w-25 d-flex mx-auto' />
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
    <Card.Img variant="top" src="https://i.ibb.co/T2vPTz9/s4.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Organic Fish</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://i.ibb.co/b72Tb8s/s2-1.png" className='img-fluid w-25 d-flex mx-auto' />
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
    <Card.Img variant="top" src="https://i.ibb.co/w6XDM6Q/s1-1.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Natural Foods</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://i.ibb.co/0fYGxHF/s6.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Meat</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://i.ibb.co/b2h41B2/s3.png" className='img-fluid w-25 d-flex mx-auto' />
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