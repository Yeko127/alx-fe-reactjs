import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ Children }) => {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }
    return Children;
};

export default ProtectedRoute;