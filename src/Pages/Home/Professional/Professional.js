import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facialSkin from '../../../Image_Icon/Image/facial-skin.png';
import './Professional.css';

const Professional = () => {
    return (
        <div className="professional">
            <Container className="py-5">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div data-aos="flip-left">
                            <img width="100%" src={facialSkin} alt="facialSkin" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div data-aos="flip-right"
                            className="text-start ms-5">
                            <div className="">
                                <h2 className="fw-bold lh-base">Let us handle your <br /> skin
                                    <span
                                        className="services_header"> Professionally
                                    </span>
                                </h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aperiam, temporibus delectus dolorum natus accusamus officia suscipit veritatis. Id amet laudantium fuga consectetur? Ipsa minima laboriosam corporis nesciunt facilis vitae!</p>
                            </div>
                            <div className="d-flex align-items-center mt-5">
                                <div className="me-5">
                                    <h1 className="services_header fw-bold">
                                        500+</h1>
                                    <p>Happy Customer</p>
                                </div>
                                <div className="">
                                    <h1 className="services_header fw-bold">
                                        10+</h1>
                                    <p>Total Services</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Professional;