import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orderlist = () => {
    const { user } = useAuth();
    const [select, setSelect] = useState('');
    // const handleconfirm = (e) => {
    // }
    // const handledelete = (e) => {
    // }
    console.log(select);
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
                                <td>{index}</td>
                                <td>{user?.email}</td>
                                <td>{index}</td>
                                <td>
                                    <select value="select"
                                        onChange={e => setSelect(e.target.value)}>
                                        <option>select</option>
                                        <option>confirm</option>
                                        <option>delete</option>
                                    </select>
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