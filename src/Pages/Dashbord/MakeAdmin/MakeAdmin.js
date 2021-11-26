import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/adminUsers', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset();
    };
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Make Admin</p>
                <p>{user?.displayName}</p>
            </div>
            <div className="d-flex justify-content-center my-5">
                <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-center">
                        <label
                            className="form-label fw-bold">Email</label>
                        <input type="email"
                            className="form-control" placeholder="Email"
                            required {...register("email")} />
                    </div>

                    <input type="submit" value="Submit" className="banner_button border-0 rounded my-2" />
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;