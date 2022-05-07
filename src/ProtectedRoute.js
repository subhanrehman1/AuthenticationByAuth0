import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user?.email_verified) {
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute;
