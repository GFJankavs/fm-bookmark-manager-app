import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "./views/Login";
import DashboardPage from "./views/Dashboard";
import SignupPage from "./views/Signup";
import ResetEmailPage from "./views/Reset/ResetEmail";
import ResetPasswordPage from "./views/Reset/ResetPassword";

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
    path: "/forgot-password",
    element: <ResetEmailPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default router;
