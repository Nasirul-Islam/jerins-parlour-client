import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import Footer from '../../Pages/Shared/Footer/Footer';
import Service from '../Home/Service/Service';

const AllServices = () => {
    const { services } = useServices();
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5">
                <div data-aos="fade-up">
                    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                        {
                            services?.map(service => <Service
                                key={service._id}
                                service={service}></Service>)
                        }
                    </Row>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllServices;