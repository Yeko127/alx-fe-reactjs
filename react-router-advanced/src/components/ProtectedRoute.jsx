import { Children } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false;
const ProtectedRoute = ({ Children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }
    return Children;
};

export default ProtectedRoute;