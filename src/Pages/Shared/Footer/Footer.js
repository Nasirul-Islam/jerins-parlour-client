import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import fb from '../../../Image_Icon/Icon/Vector.png';
import ins from '../../../Image_Icon/Icon/Vector-1.png';
import lin from '../../../Image_Icon/Icon/Vector-2.png';
import yout from '../../../Image_Icon/Icon/Vector-3.png';
import loca from '../../../Image_Icon/Icon/map-pin-2-fill.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div data-aos="fade-up"
                    data-aos-duration="1500">
                    <Row className="text-start">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="d-flex mt-4">
                                <div className="me-4 mt-1">
                                    <img
                                        width="30px"
                                        height="30px"
                                        src={loca} alt="" />
                                </div>
                                <div className="address">
                                    <p>H#000 (0th Floar), Road #00, <br />
                                        New DOSH, Dhaka, Bangladesh.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2}>
                            <h5 className="mb-3">Company</h5>
                            <p><Link to="/">About</Link></p>
                            <p><Link to="/">Project</Link></p>
                            <p><Link to="/">Our Team</Link></p>
                            <p><Link to="/">Teams Conditions</Link></p>
                            <p><Link to="/">Submit Listing</Link></p>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2}>
                            <h5 className="mb-3">Quick Links</h5>
                            <p><Link to="/">Quick Links</Link></p>
                            <p><Link to="/">Rantals</Link></p>
                            <p><Link to="/">Sales</Link></p>
                            <p><Link to="/">Contact</Link></p>
                            <p><Link to="/">Our Blog</Link></p>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="">
                                <h5 className="mb-3">About Us</h5>
                                <p className="lh-base aboutText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse autem, id, laudantium reprehenderit harum odio praesentium ad quis labore beatae distinctio voluptates impedit odit accusamus aperiam! Impedit, aut provident.</p>
                            </div>
                            <div className="">
                                <img
                                    width="30px"
                                    height="30px"
                                    className="me-4"
                                    src={fb} alt="" />
                                <img
                                    width="30px"
                                    height="30px"
                                    className="me-4"
                                    src={ins} alt="" />
                                <img
                                    width="30px"
                                    height="30px"
                                    className="me-4"
                                    src={lin} alt="" />
                                <img
                                    width="30px"
                                    height="30px"
                                    className="me-3"
                                    src={yout} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="my-5"></div>
            </Container>
        </div>
    );
};

export default Footer;