import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader";

const VerifyGuard = () => {
    // const { store: { status, user }, } = useAuth(null);
    // console.log(user, "user")
    // if (status === "pending") return <Loader />;
    // if (user?.VerifyStatus === "Success") return <Navigate to="/" replace />
    // if (!user?.VerifyStatus) return <Navigate to="/Login" replace />
    // if (!user.token) return <Navigate to="/Login" replace />;

    return <Outlet></Outlet>;
};

export default VerifyGuard;
