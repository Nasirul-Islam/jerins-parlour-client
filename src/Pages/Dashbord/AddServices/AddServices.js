import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddServices.css';

const AddServices = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/services", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        reset();
    };
    return (
        <>
            <div className="dashbordHeader d-flex justify-content-between">
                <p className="fs-2 fw-bold">Add Services</p>
                <p>{user?.email}</p>
            </div>
            <div className="d-flex justify-content-center">
                <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-center">
                        <label
                            className="form-label fw-bold">Service title</label>
                        <input type="text"
                            className="form-control" placeholder="title"
                            required {...register("title")} />
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">Description</label>
                        <textarea placeholder="Enter Description" className="form-control" rows="4" required {...register("description")}></textarea>
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">Upload Image</label>
                        <input className="form-control"
                            type="file"
                            {...register("img")} />
                    </div>
                    <h3>or</h3>
                    <div className="mb-3 text-center">
                        <label
                            className="form-label fw-bold">image url</label>
                        <input type="text"
                            className="form-control" placeholder="image url"
                            required {...register("url")} />
                    </div>
                    <div className="mb-3 text-center">
                        <label
                            className="form-label fw-bold">Price</label>
                        <input type="number"
                            className="form-control" placeholder="Price"
                            required {...register("price")} />
                    </div>
                    <br />
                    <input type="submit" value="Add Service" className="banner_button border-0 rounded my-3 w-75" />
                </form>
            </div>
        </>
    );
};

export default AddServices;