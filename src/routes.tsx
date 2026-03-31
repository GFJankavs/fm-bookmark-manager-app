import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "./views/Login";
import DashboardPage from "./views/Dashboard";
import SignupPage from "./views/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default router;
