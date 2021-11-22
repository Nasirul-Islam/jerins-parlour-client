import React from 'react';
import { Link } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <h2>Dashbord</h2>
            <Link to="/home">Home</Link>
        </div>
    );
};

export default Dashbord;