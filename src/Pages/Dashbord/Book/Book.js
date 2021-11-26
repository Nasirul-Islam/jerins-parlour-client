import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Book</p>
                <p>{user?.displayName}</p>
            </div>
            <div className="d-flex justify-content-center">
                <h1>Payment system comming soon</h1>
            </div>
        </>
    );
};

export default Book;