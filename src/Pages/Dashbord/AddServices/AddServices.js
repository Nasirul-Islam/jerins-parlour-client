import React from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Email" required {...register("email")} />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Password" required {...register("password")} />
                <br />
                <input type="submit" value="Login" className="banner_button border-0 my-5" />
            </form>
        </div>
    );
};

export default AddServices;