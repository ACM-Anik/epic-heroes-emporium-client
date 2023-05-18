import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ClockLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center my-20"><ClockLoader color="#FF0000" /></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;