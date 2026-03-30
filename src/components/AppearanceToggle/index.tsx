import useThemeMode from "../../hooks/useThemeMode";
import IconDarkTheme from "../icons/IconDarkTheme";
import IconLightTheme from "../icons/IconLightTheme";

import "./style.css";

const AppearanceToggle = () => {
  const { isDarkMode, setDarkMode } = useThemeMode();

  return (
    <div className="appearance-toggle">
      <button
        onClick={() => setDarkMode(false)}
        className={`toggle-light ${isDarkMode ? "" : "active"}`}
      >
        <IconLightTheme variant={isDarkMode ? "dark" : "light"} />
      </button>
      <button
        onClick={() => setDarkMode(true)}
        className={`toggle-dark ${isDarkMode ? "active" : ""}`}
      >
        <IconDarkTheme variant={isDarkMode ? "dark" : "light"} />
      </button>
    </div>
  );
};

export default AppearanceToggle;
