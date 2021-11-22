import React from 'react';
import Banner from '../Banner/Banner';
import Professional from '../Professional/Professional';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Professional />
            <Testimonials />
            <Project />
        </div>
    );
};

export default Home;