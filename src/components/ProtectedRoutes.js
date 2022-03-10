import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  return loggedIn ? <Outlet /> : <Navigate to="/"></Navigate>;
};

export default ProtectedRoutes;
