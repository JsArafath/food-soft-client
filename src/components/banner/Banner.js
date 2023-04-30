import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import  './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel style={{ backgroundColor: "rgb(225, 224, 224)",height:"500px" }} className="py-5 banner-style">
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                        <div className="text-dark fw-bold">
                            <h3>THE BEST TRUSTED <br></br> FARMS FOR YOU</h3>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-flex mx-auto h-50"
                                src='https://i.ibb.co/sW6d8KD/about-removebg-preview.png'
                                alt="First slide"
                            />
                           
                        </Col>
                       
                    </Row>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="text-dark">
                            <h3>THE BEST TRUSTED <br></br> FARMS FOR YOU</h3>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-flex mx-auto h-50"
                                src="https://i.ibb.co/2WwwxkN/bg1-2-removebg-preview.png"
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                        <div className="text-dark">
                            <h3>THE BEST TRUSTED <br></br> FARMS FOR YOU</h3>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-flex mx-auto h-50"
                                src='https://i.ibb.co/Lrq15Fm/about1.png'
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
            </Carousel>
            <div>
            </div>
        </div>
    );
};

export default Banner;