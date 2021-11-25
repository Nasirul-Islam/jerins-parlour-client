import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Service = ({ service }) => {
    const { title, description, url, _id, price } = service;
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}...
                    </Card.Text>
                    <h6>Price: ${price}</h6>
                </Card.Body>
                <Card.Footer>
                    <Button
                        onClick={() => setModalShow(true)}
                        className="w-100 banner_button border-0">Book Now
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        id={_id}
                    />
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;