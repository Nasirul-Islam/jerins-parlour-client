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
                <p>{user?.email}</p>
            </div>
            <div className="d-flex justify-content-center">
                <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-center">
                        <label
                            className="form-label fw-bold">Service title
                        </label>
                        <input type="text"
                            className="form-control" placeholder="title"
                            required {...register("title")} />
                    </div>
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
                    <input type="submit" value="Submit" className="banner_button border-0 rounded my-3 w-75" />
                </form>
            </div>
        </>
    );
};

export default Book;