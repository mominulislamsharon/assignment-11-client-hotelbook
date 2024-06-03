import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading, openModal} = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if(!loading && !user?.email){
           openModal(); 
        }
    },[])
    
    if(loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user?.email){
        return children;
    }


  
    return null;
};

export default PrivateRoutes;