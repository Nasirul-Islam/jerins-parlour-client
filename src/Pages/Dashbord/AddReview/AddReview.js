import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://blooming-woodland-11571.herokuapp.com/reviews", {
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
                <p className="fs-2 fw-bold">Add Review</p>
                <p>{user?.displayName}</p>
            </div>
            <div className="d-flex justify-content-center">
                <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">Name</label>
                        <input type="text"
                            className="form-control" placeholder="Name"
                            required {...register("name")} />
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">Description</label>
                        <textarea placeholder="Enter Description" className="form-control" rows="4"
                            {...register("description")} ></textarea>
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">image url</label>
                        <input type="text"
                            className="form-control" placeholder="image url"
                            {...register("url")} />
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label fw-bold">Rating</label>
                        <input type="number"
                            className="form-control" placeholder="rating"
                            {...register("rating", { required: true, min: 0, max: 5 })} />
                    </div>

                    <br />
                    <input type="submit" value="Add Service" className="banner_button border-0 rounded my-3 w-75" />
                </form>
            </div>
        </>
    );
};

export default AddReview;