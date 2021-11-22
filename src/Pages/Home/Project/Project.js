import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Project.css';

const Project = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="text-center professional project">
            <Container className="py-5">
                <div data-aos="fade-up-right">
                    <h2 className="fw-bold lh-base mb-5">Let us handle your <br /> project,
                        <span
                            className="services_header"> Professionally
                        </span>
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="First Name" required {...register("firstName")} />
                    <input
                        placeholder="Last Name" required {...register("lastName")} />
                    <br />
                    <br />
                    <input
                        placeholder="Email Address" required {...register("email")} />
                    <input
                        placeholder="Phone Number" required {...register("phone")} />
                    <br />
                    <br />
                    <textarea
                        placeholder="Your Message"
                        {...register("message")} />
                    <br />
                    <br />
                    <input type="submit" value="Send Message" className="banner_button border-0 my-3" />
                </form>

            </Container>
        </div>
    );
};

export default Project;