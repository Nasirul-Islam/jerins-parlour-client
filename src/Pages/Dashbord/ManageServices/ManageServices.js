import React from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';

const ManageServices = () => {
    const { user } = useAuth();
    const { services } = useServices();
    const handledelete = (id) => {
        console.log("delete", id);
        fetch(`https://blooming-woodland-11571.herokuapp.com/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("deleted successfully")
            })
    }
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Manage Services</p>
                <p>{user?.displayName}</p>
            </div>
            <div className="">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services?.map((service, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{service?.title}</td>
                                <td>{service?._id}</td>
                                <td>
                                    <Button onClick={() => handledelete(service?._id)} variant="danger">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ManageServices;