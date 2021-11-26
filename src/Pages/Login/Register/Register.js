import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import google from '../../../Image_Icon/Icon/Group 573.png';
import fb from '../../../Image_Icon/Icon/fblogo.png';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { createAccountWithEmail, loginWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        createAccountWithEmail(data.email, data.password, data.firstName + ' ' + data.lastName, location, navigate);
        reset();
    };
    return (
        <>
            <Navigation />
            <Container>
                <div
                    className="my-5 d-flex justify-content-center">
                    <div data-aos="fade-right"
                        className="register border border-secondary w-50">
                        <h2 className="my-5">Create an account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                placeholder="First Name" required {...register("firstName")} />
                            <br />
                            <br />
                            <input
                                placeholder="Last Name" required {...register("lastName")} />
                            <br />
                            <br />
                            <input
                                placeholder="Email" required {...register("email")} />
                            <br />
                            <br />
                            <input type="password"
                                placeholder="Password" required {...register("password")} />
                            <br />
                            <br />
                            <input type="password"
                                placeholder="Confirm Password" required {...register("confirmPassword")} />
                            <br />
                            <input type="submit" value="Create an account" className="banner_button border-0 my-5" />
                        </form>
                        <p className="fw-bold">Already have an
                            account <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
                <div className="my-3">
                    <h2>--------------or-------------</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <div
                            className="border border-secondary rounded-pill  p-2 d-flex align-items-center">
                            <img width="30px" height="30px" src={google} alt="" />
                            <Button
                                onClick={() => loginWithGoogle(location, navigate)}
                                variant="light" className="flex-grow-1">Continue With Google</Button>
                        </div>
                        <div
                            className="border border-secondary rounded-pill  p-2 d-flex align-items-center mt-3 mb-5">
                            <img width="35px" height="35px" src={fb} alt="" />
                            <Button variant="light" className="flex-grow-1">Continue With Facebook</Button>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Register;