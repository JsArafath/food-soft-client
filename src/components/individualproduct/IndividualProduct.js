import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const IndividualProduct = (props) => {
    const {_id, name, rating, description, price, img } = props.foods;
    return (

        <Col className=' rounded coloo card '>
          
                <Card.Img variant="top" className='h-50 w-100' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
   
                    <Card.Text>
                    Season: All Year
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="m-0 p-0">
                   <Link to={`/cars/${_id}`} > <Button  className="w-100  btn-regular">Buy Now</Button></Link>
                </Card.Footer>
          
        </Col>

    );
};

export default IndividualProduct;