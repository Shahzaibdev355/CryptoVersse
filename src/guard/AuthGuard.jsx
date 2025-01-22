import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader";

const AuthGuard = () => {
    // const { store: { status, user }, } = useAuth(null);

    // if (status === "pending") return <Loader />;

    // if (!user.token) return <Navigate to="/Login" replace />;

    return <Outlet></Outlet>;
};

export default AuthGuard;
