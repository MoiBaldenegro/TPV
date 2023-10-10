import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const loginUsers = useSelector(state => state.loginUsers);

  if (loginUsers.length > 0) {
    return <Outlet />;
  } else {
    return <Navigate to="login"/>;
  }
}