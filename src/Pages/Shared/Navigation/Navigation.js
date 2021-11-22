import React from 'react';
import logo from '../../../Image_Icon/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="mt-3">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img height="50px" width="150px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className="menubar">Home</Link>
                            <Link to="/" className="menubar">About</Link>
                            <Link to="/" className="menubar">Team</Link>
                            <Link to="/" className="menubar">Contact</Link>
                            <Link to="/dashbord" className="menubar">Dashbord</Link>
                            <Link to="/login" className="menubar">
                                <Button variant="info">
                                    Login
                                </Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;