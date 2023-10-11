import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const loginUsers = useSelector(state => state.loginUsers);
  const isLoading = useSelector(state => state.isLoading);

  if (loginUsers.length > 0 || isLoading) {
    return <Outlet />;
  } else {
    return <Navigate to="login"/>;
  }
}