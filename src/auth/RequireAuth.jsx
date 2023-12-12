import { Navigate, Outlet, useLocation } from "react-router-dom";
import useContextData from "../hooks/useContextData";

const RequireAuth = () => {
  const { auth } = useContextData();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
