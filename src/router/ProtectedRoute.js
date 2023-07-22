import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const ProtectedRoutes = ({ isAutenticated, children }) => {
    if (!isAutenticated) {
        return <Navigate to='/' replace />;
    }

    return children ? <><Layout/>{children}</> : <Outlet />;
};

export default ProtectedRoutes;



