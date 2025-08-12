import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute: React.FC<PropsWithChildren> = ({ children }) => {
  // const authMethod = useAuthContext();
  const isAuthenticated = false; // Replace with actual authentication logic
  return isAuthenticated || false ? (
    <Navigate to="/" />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;