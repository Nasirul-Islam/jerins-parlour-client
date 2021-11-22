import React from 'react';
import logo from '../../../Image_Icon/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

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
                            <Nav.Link className="menubar">Home</Nav.Link>
                            <Nav.Link className="menubar">About</Nav.Link>
                            <Nav.Link className="menubar">Team</Nav.Link>
                            <Nav.Link className="menubar">Contact</Nav.Link>
                            <Nav.Link className="menubar">
                                <Button variant="light">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;