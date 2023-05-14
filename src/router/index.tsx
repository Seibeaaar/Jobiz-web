import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "src/pages/Login";
import SignUp from "src/pages/SignUp";
import ForgotPassword from "src/pages/ForgotPassword";
import ProtectedRoute from "src/components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div>Home</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/restorePassword",
    element: <ForgotPassword />,
  },
]);

export default router;
