import classNames from "classnames";
import { Link } from "react-router";
import Button from "../../components/general/Button";
import InputField from "../../components/general/InputField";
import useThemeMode from "../../hooks/useThemeMode";

import "../../styles/views/ResetEmailPassword.css";

const ResetPasswordPage = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <main className="reset-wrapper">
      <div className={classNames("reset-container", { dark: isDarkMode })}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}-theme.svg`}
          alt="Logo"
        />
        <header className="reset-header">
          <h1 className="text-preset-1">Reset Your Password</h1>
          <p className="text-preset-4-medium">
            Enter your new password below. Make sure it’s strong and secure.
          </p>
        </header>
        <form className="reset-form">
          <InputField label="New Password" type="password" required />
          <InputField label="Confirm Password" type="password" required />
          <Button variant="primary">Reset Password</Button>
        </form>
        <footer className="reset-footer">
          <Link to="/login" className="reset-login">
            Back to login
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
