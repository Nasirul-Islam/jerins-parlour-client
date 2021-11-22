import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Navigation />
            <Container className="my-5 d-flex justify-content-center">
                <div data-aos="fade-right"
                    className="login border border-secondary w-50">
                    <h2 className="my-4">Pleash Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Email" required {...register("email")} />
                        <br />
                        <br />
                        <input
                            placeholder="Password" required {...register("password")} />
                        <br />
                        <input type="submit" value="Send Message" className="banner_button border-0 my-5" />
                    </form>
                    <p className="fw-bold">Don't have an
                        account <Link to="/register">create an account</Link>
                    </p>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Login;