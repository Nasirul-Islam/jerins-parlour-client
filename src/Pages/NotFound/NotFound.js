import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <>
            <Navigation />
            <Container>
                <h1>Page NotFound 404</h1>
            </Container>
            <Footer />
        </>
    );
};

export default NotFound;