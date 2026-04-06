import classNames from "classnames";
import { useRef, useState, useEffect, type RefObject, useCallback } from "react";
import { createPortal } from "react-dom";
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

const ProfileMenuContent = ({
  isOpen = false,
  menuRef,
  position,
}: {
  isOpen?: boolean;
  menuRef?: RefObject<HTMLDivElement | null>;
  position?: { top: number; right: number };
}) => {
  const { isDarkMode } = useThemeMode();

  return isOpen
    ? createPortal(
        <div
          ref={menuRef}
          className={classNames("profile-menu", { dark: isDarkMode })}
          style={{
            position: "absolute",
            top: `${position?.top ?? 0}px`,
            right: `${position?.right ?? 0}px`,
          }}
        >
          <ProfileMenuUser />
          <Divider />
          <ProfileMenuTheme />
          <Divider />
          <ProfileMenuLogout />
        </div>,
        document.body
      )
    : null;
};

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; right: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const calculatePosition = useCallback( () => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const top = buttonRect.bottom + 12;
    const right = Math.min(window.innerWidth - buttonRect.right, position?.right ?? 0);

    setPosition({ top, right });
  }, [position]);

  useEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      calculatePosition();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [calculatePosition, isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="profile-menu-button"
      >
        <img src="/images/image-avatar.webp" alt="User avatar button" />
      </button>

      <ProfileMenuContent isOpen={isOpen} menuRef={menuRef} position={position ?? undefined} />
    </>
  );
}



export default ProfileMenu;
