import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';

const MyVerticallyCenteredModal = (props) => {
    const { id } = props;
    const { user } = useAuth();
    const { services } = useServices();
    const serviceresult = services?.find(service => service._id === id)
    // console.log(serviceresult);
    // console.log(user);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.orderId = serviceresult?._id
        data.status = "pending"
        // console.log(data);
        fetch('https://blooming-woodland-11571.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    alert("Ordered Successfully");
                }
            })
        reset();
    };
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
                        {serviceresult?.title} {serviceresult?._id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 text-center">
                            <label
                                className="form-label fw-bold">Name</label>
                            <input
                                className="form-control"
                                value={user?.displayName}
                                {...register("name")} />
                        </div>
                        <div className="mb-3 text-center">
                            <label
                                className="form-label fw-bold">Email</label>
                            <input
                                className="form-control"
                                value={user?.email}
                                {...register("email")} />
                        </div>
                        <div className="mb-3 text-center">
                            <label
                                className="form-label fw-bold">Phone</label>
                            <input type="number"
                                className="form-control" placeholder="Phone"
                                required {...register("phone")} />
                        </div>
                        <div className="mb-3 text-center">
                            <label
                                className="form-label fw-bold">Date</label>
                            <input type="date"
                                className="form-control"
                                required {...register("date")} />
                        </div>
                        <br />
                        <input type="submit"
                            value="Submit"
                            className="banner_button border-0 rounded my-3 w-75" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyVerticallyCenteredModal;