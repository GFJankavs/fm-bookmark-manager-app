import classNames from "classnames";
import { Link } from "react-router";
import Button from "../components/general/Button";
import InputField from "../components/general/InputField";
import useThemeMode from "../hooks/useThemeMode";
import "../styles/views/Signup.css";

const SignupPage = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <main className="signup-wrapper">
      <div className={classNames("signup-container", { dark: isDarkMode })}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}-theme.svg`}
          alt="Logo"
        />
        <header className="signup-header">
          <h1 className="text-preset-1">Create your account</h1>
          <p className="text-preset-4-medium">
            Join us and start saving your favorite links — organized,
            searchable, and always within reach.
          </p>
        </header>
        <form className="signup-form">
          <InputField label="Full name" required />
          <InputField label="Email address" required />
          <InputField label="Password" type="password" required />
          <Button variant="primary">Create account</Button>
        </form>
        <footer className="signup-footer">
          <p className="text-preset-4-medium">
            Already have an account?{" "}
            <Link to="/login" className="signup-login">
              Log in
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default SignupPage;
