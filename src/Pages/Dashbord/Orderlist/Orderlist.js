import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orderlist = () => {
    const { user } = useAuth();
    const [select, setSelect] = useState('');
    const [id, setid] = useState('');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-woodland-11571.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [select]);
    // console.log(select);
    // console.log(id);
    if (select === "confirm") {
        console.log("confirm api is here")
        fetch(`https://blooming-woodland-11571.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    alert("Approved Successfully");
                }
            })
    }
    else if (select === "delete") {
        fetch(`https://blooming-woodland-11571.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount) {
                    alert("Delete Successfully");
                }
            })
    }
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Order List</p>
                <p>{user?.displayName}</p>
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
                                        onChange={e => {
                                            setSelect(e.target.value);
                                            setid(order?._id);
                                        }}>
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