import * as React from "react";
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/Index";
import AdminLayoutPage from "../pages/AdminLayoutPage/Index";
import RentRoomPage from "../pages/RentRoomPage/Index";
import CustomerManagementPage from "../pages/CustomerManagementPage/Index";
import LoginPage from "../pages/Login/Index";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("Token") ?? null
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (<PrivateRoute><AdminLayoutPage /></PrivateRoute>),
    children: [
      {
        path: "rent",
        element: (<RentRoomPage />),
      },
      {
        path: "customer-management",
        element: (<CustomerManagementPage />),
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;