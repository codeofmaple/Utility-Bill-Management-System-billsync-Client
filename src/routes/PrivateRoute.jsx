import React from 'react';
import useAuth from '../hooks/useAuth';
import CustomLoading from '../pages/Loader/CustomLoading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <CustomLoading></CustomLoading>
    }

    if (user && user.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login' ></Navigate >
    }
};

export default PrivateRoute;