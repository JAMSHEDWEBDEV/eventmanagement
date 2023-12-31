import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg text-5xl"></span>
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;