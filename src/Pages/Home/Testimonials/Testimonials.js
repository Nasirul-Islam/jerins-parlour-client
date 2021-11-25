import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Testimonial from './Testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    // console.log(reviews);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <Container className="my-5">
            <div className="my-5">
                <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
                {reviews?.map(review => <Testimonial
                    key={review._id}
                    review={review}></Testimonial>)}
            </Slider>
        </Container>
    );
};

export default Testimonials;