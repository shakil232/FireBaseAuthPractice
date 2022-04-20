import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = () => {
    const location = useLocation();
    const {user} = useAuth();

    return (

        user?.email ?
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