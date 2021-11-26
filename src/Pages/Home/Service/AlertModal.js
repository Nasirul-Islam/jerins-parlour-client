import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlertModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Please Login First
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    We want you to login first then take our service.
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/login">
                        <Button variant="danger" onClick={props.onHide}>Close</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AlertModal;