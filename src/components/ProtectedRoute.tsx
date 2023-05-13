import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "src/firebase";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
