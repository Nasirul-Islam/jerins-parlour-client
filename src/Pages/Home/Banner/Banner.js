import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../Image_Icon/Image/beautifulng-woman.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container className="my-5">
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <Row className="gx-5">
                    <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center text-start banner_text">
                        <div>
                            <h1 className="text-uppercase fw-bold">beauty salon <br /> forever women</h1>
                            <p>Your good looks are the best indication of my success. I will make sure that that you walk out of my salon looking great and feeling terrific. Your self-confidence is my measure of success, and my first priority is to ensure that it happens. I love making you beautiful.</p>
                            <Link to="/allServices">
                                <Button className="banner_button border-0">Get An Appointment</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <img width="100%" src={banner} alt="beautifulng-woman" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default Banner;