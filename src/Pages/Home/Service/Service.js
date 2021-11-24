import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { title, description, url, _id } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}...
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button
                        className="w-100 banner_button border-0">Book Now
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;