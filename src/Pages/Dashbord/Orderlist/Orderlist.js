import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orderlist = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Order List</p>
                <p>{user?.email}</p>
            </div>
            <div className="">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <tr key={index}>
                                <td>{user?.email}</td>
                                <td>{index}</td>
                                <td>{index}</td>
                                <td>
                                    <Form.Select aria-label="select">
                                        <option value="1">confirm</option>
                                        <option value="2">delete</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Orderlist;