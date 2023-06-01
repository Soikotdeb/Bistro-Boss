
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/UseAdmin";

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth()
    const [isAdmin,isAdminLoading]=useAdmin();

    const location = useLocation()

    if(loading || isAdminLoading){
return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;