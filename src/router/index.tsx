import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "src/pages/Login";
import SignUp from "src/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default router;
