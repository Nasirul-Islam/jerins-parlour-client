import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';

const Booking = ({ status, orderId, id }) => {
    const { services } = useServices();
    const orders = services?.filter(service => service?._id === orderId)
    // console.log(orders[0]);
    const orderCancel = (id) => {
        console.log(id)
        fetch(`https://blooming-woodland-11571.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount) {
                    alert("Delete Successfully");
                    window.location.reload();
                }
            })
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={orders[0]?.url} />
                    <Card.Body>
                        <Card.Title>{orders[0]?.title}</Card.Title>
                        <Card.Text>
                            {orders[0]?.description}
                        </Card.Text>
                        <h6>Price: ${orders[0]?.price}</h6>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <h5 className="text-warning">{status}</h5>
                        <Button onClick={() => orderCancel(id)}
                            className="w-50 banner_button border-0">
                            Cancel
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Booking;