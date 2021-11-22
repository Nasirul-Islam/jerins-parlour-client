import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Professional from '../Professional/Professional';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Professional />
            <Testimonials />
            <Project />
            <Footer />
        </div>
    );
};

export default Home;