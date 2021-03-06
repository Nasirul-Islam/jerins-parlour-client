import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import AlertModal from './AlertModal';

const Service = ({ service }) => {
    const { user } = useAuth();
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
                    {user?.email ?
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            id={_id}
                        />
                        :
                        <AlertModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    }
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;