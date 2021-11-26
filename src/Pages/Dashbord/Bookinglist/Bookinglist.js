import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Booking from './Booking';

const Bookinglist = () => {
    const { user } = useAuth();
    const [userOrders, setuserOrders] = useState([]);
    useEffect(() => {
        fetch(`https://blooming-woodland-11571.herokuapp.com/userOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setuserOrders(data))
    }, [user?.email]);
    // console.log(userOrders);
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Booking List</p>
                <p>{user?.displayName}</p>
            </div>
            <div>
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {
                        userOrders?.map(orders => <Booking
                            key={orders?._id}
                            id={orders?._id}
                            status={orders?.status}
                            orderId={orders?.orderId}></Booking>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Bookinglist;