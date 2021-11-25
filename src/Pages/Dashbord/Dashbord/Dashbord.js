import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashbord.css';
import logo from '../../../Image_Icon/logo.png';
import { useParams } from 'react-router';

const Dashbord = () => {
    const { id } = useParams();
    return (
        <div className="dashbord">
            <Row>
                <Col sm={2} md={3} className="dashbordDrawer border">
                    <div className="dashbordHeader">
                        <img width="150px" height="50px" src={logo} alt="logo" />
                    </div>
                    <div className="text-start ms-5 dashbordLink">
                        {/* for User */}
                        <Link to="/home">Home</Link>
                        <br />
                        <Link to={`/dashbord/book/${id}`}>Book</Link>
                        <br />
                        <Link to="/dashbord/bookinglist">Booking list</Link>
                        <br />
                        <Link to="/dashbord/addReview">Review</Link>
                        <br />
                        {/* for Admin */}
                        <Link to="/dashbord/orderlist">Order list</Link>
                        <br />
                        <Link to="/dashbord/addServices">Add Services</Link>
                        <br />
                        <Link to="/dashbord/manageServices">Manage Services</Link>
                        <br />
                        <Link to="/dashbord/makeAdmin">Make Admin</Link>
                    </div>
                </Col>
                <Col sm={10} md={9}>
                    <div className="">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashbord;