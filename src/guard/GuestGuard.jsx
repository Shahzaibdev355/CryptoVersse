import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader";

const GuestGuard = () => {
  // const { store: { status, user }, } = useAuth(null);

  // if (status === "pending") return <Loader />;

  // if (user?.token) return <Navigate to="/" replace />;

  return <Outlet></Outlet>;
};

export default GuestGuard;
