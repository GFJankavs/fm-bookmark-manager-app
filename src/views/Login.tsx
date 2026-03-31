import { Link } from "react-router";
import Button from "../components/general/Button";
import InputField from "../components/general/InputField";
import useThemeMode from "../hooks/useThemeMode";
import "../styles/views/Login.css";
import classNames from "classnames";

const LoginPage = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <main className="login-wrapper">
      <div className={classNames("login-container", { dark: isDarkMode })}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}-theme.svg`}
          alt="Logo"
        />
        <header className="login-header">
          <h1 className="text-preset-1">Log in to your account</h1>
          <p className="text-preset-4-medium">
            Welcome back! Please enter your details.
          </p>
        </header>
        <form className="login-form">
          <InputField label="Email" />
          <InputField label="Password" type="password" />
          <Button variant="primary">Log in</Button>
        </form>
        <footer className="login-footer">
          <p className="text-preset-4-medium">
            Forgot password?{" "}
            <Link to="/forgot-password" className="login-reset">
              Reset it
            </Link>
          </p>
          <p className="text-preset-4-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="login-register">
              Sign up
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default LoginPage;
