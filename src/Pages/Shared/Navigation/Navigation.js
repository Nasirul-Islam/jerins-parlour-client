import React from 'react';
import logo from '../../../Image_Icon/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="mt-3">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img height="50px" width="150px" src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {user?.email}
                            <Link to="/home" className="menubar">Home</Link>
                            <Link to="/about" className="menubar">About</Link>
                            <Link to="/team" className="menubar">Team</Link>
                            <Link to="/contact"
                                className="menubar">Contact</Link>
                            {!user?.email ?
                                <Link to="/login" className="menubar">
                                    <Button variant="info">
                                        LogIn
                                    </Button>
                                </Link>
                                :
                                <>
                                    <Link to="/dashbord"
                                        className="menubar">Dashbord
                                    </Link>
                                    <Link to="/login" className="menubar">
                                        <Button onClick={logOut} variant="info">
                                            LogOut
                                        </Button>
                                    </Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;