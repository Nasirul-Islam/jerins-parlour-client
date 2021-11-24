import React from 'react';
import { Button, CardGroup, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
        <Container className="my-5">
            <div data-aos="fade-down">
                <h3 className="fw-bold my-5">Our Awesome
                    <span className="services_header">Services</span></h3>
            </div>
            <div data-aos="fade-up">
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }
                </Row>
            </div>
            <Button className="banner_button border-0 my-5">Explore</Button>
        </Container>
    );
};

export default Services;