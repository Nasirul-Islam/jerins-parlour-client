import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
        <Container className="my-5">
            <div data-aos="fade-down">
                <h3 className="fw-bold my-5">Our
                    Awesome <span className="services_header">Services</span></h3>
            </div>
            <div data-aos="fade-right">
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {
                        services?.slice(0, 3).map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }
                </Row>
            </div>
            <Link to="/allServices">
                <Button className="banner_button border-0 my-5">
                    Explore more
                </Button>
            </Link>
        </Container>
    );
};

export default Services;