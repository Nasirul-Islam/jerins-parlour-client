import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orderlist = () => {
    const { user } = useAuth();
    const [select, setSelect] = useState('');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    console.log(select);
    // const handleconfirm = (e) => {
    // }
    // const handledelete = (e) => {
    // }
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
                            <th>Date</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{order?.email}</td>
                                <td>{order?.date}</td>
                                <td>{order?._id}</td>
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