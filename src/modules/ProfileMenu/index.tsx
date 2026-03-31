import classNames from "classnames";
import useThemeMode from "../../hooks/useThemeMode";
import AppearanceToggle from "../../components/general/AppearanceToggle";
import LogoutIcon from "../../components/icons/LogoutIcon";
import ThemeIcon from "../../components/icons/ThemeIcon";
import "./style.css";

const Divider = () => <div className="profile-menu-divider" />;

const ProfileMenuUser = () => (
  <div className="profile-menu-user">
    <img
      src="/images/image-avatar.webp"
      alt="User avatar"
      className="user-avatar"
    />
    <div className="user-info-container">
      <span className="text-preset-4 user-name">Emily Carter</span>
      <span className="text-preset-4-medium user-email">
        emily101@gmail.com
      </span>
    </div>
  </div>
);

const ProfileMenuTheme = () => (
  <div className="profile-menu-theme">
    <div className="theme-info">
      <ThemeIcon size={16} />
      <span className="text-preset-4">Theme</span>
    </div>
    <AppearanceToggle />
  </div>
);

const ProfileMenuLogout = () => (
  <button className="profile-menu-logout">
    <LogoutIcon size={16} />
    <span className="text-preset-4">Logout</span>
  </button>
);

const ProfileMenu = () => {
  const { isDarkMode } = useThemeMode();
  return (
    <div className={classNames("profile-menu", { dark: isDarkMode })}>
      <ProfileMenuUser />
      <Divider />
      <ProfileMenuTheme />
      <Divider />
      <ProfileMenuLogout />
    </div>
  );
};

export default ProfileMenu;
