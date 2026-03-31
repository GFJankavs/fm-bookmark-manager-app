import classNames from "classnames";
import { Link } from "react-router";
import Button from "../../components/general/Button";
import InputField from "../../components/general/InputField";
import useThemeMode from "../../hooks/useThemeMode";

import "../../styles/views/ResetEmailPassword.css";

const ResetEmailPage = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <main className="reset-wrapper">
      <div className={classNames("reset-container", { dark: isDarkMode })}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}-theme.svg`}
          alt="Logo"
        />
        <header className="reset-header">
          <h1 className="text-preset-1">Forgot your password?</h1>
          <p className="text-preset-4-medium">
            Enter your email address below and we`ll send you a link to reset
            your password.
          </p>
        </header>
        <form className="reset-form">
          <InputField label="Email" required />
          <Button variant="primary">Send reset link</Button>
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

export default ResetEmailPage;
