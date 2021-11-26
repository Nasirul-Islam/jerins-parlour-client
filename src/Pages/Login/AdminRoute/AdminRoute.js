import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoding, admin } = useAuth();
    let location = useLocation();
    if (isLoding) {
        return <Spinner animation="border" variant="danger" />
    }

    if (!user?.email && !admin) {
        return <Navigate to="/home" state={{ from: location }} />;
    }

    return children;
};

export default AdminRoute;