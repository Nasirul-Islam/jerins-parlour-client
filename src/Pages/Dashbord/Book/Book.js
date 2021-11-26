import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
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