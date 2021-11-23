import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageServices = () => {
    const { user } = useAuth();
    const handledelete = () => {
        console.log("select");
    }
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Manage Services</p>
                <p>{user?.email}</p>
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
                        {Array.from({ length: 12 }).map((_, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user?.email}</td>
                                <td>{index}</td>
                                <td>
                                    <Button onClick={handledelete} variant="danger">Delete</Button>
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