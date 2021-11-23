import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Bookinglist = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Booking List</p>
                <p>{user?.email}</p>
            </div>
            <div className="">
                <h2>all booking</h2>
            </div>
        </>
    );
};

export default Bookinglist;