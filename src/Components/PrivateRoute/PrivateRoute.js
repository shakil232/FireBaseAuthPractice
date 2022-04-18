// import React, { useContext } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import { userContext } from '../../App';

const PrivateRoute = () => {
    const location = useLocation();
    // const [user] = useContext(userContext);
    const {user} = useAuth();


    return (

        user?.name ?
            <Outlet />
            :
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />

    );
};

export default PrivateRoute;