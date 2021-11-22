import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    return (
        <Container className="my-5">
            <div data-aos="fade-down">
                <h3 className="fw-bold my-5">Our Awesome
                    <span className="services_header">Services</span></h3>
            </div>
            <div data-aos="fade-up">
                <Row>
                    <Service></Service>
                </Row>
            </div>
            <Button className="banner_button border-0 my-3">Explore</Button>
        </Container>
    );
};

export default Services;