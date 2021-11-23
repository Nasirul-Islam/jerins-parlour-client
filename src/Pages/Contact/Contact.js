import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Contact = () => {
    return (
        <>
            <Navigation />
            <Container>
                <h1>This is Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem, rerum deserunt explicabo placeat aut dolores optio recusandae beatae ipsam magnam necessitatibus nihil aliquid ex esse quod id. Adipisci, iusto.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem, rerum deserunt explicabo placeat aut dolores optio recusandae beatae ipsam magnam necessitatibus nihil aliquid ex esse quod id. Adipisci, iusto.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem, rerum deserunt explicabo placeat aut dolores optio recusandae beatae ipsam magnam necessitatibus nihil aliquid ex esse quod id. Adipisci, iusto.</p>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;