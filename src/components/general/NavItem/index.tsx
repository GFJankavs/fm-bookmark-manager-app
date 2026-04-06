import type { ReactNode } from "react";
import Checkbox from "../Checkbox";
import "./style.css";
import classNames from "classnames";
import useThemeMode from "../../../hooks/useThemeMode";

interface NavItemProps {
  checked?: boolean;
  withCheckbox?: boolean;
  icon?: ReactNode;
  count?: number;
  children: string;
  onClick?: () => void;
}

const NavItem = ({ withCheckbox, checked, icon, count, children, onClick }: NavItemProps) => {
  const { isDarkMode } = useThemeMode();

  return (
    <button
      className={classNames("nav-item-wrapper", {
        checked: checked,
        dark: isDarkMode,
      })}
      onClick={onClick}
    >
      <div className="nav-item-content">
        {icon && !checked && <>{icon}</>}
        {withCheckbox && !icon && <Checkbox checked={checked} />}
        <span className="text-preset-3">{children}</span>
      </div>
      {count && <span className="nav-item-count text-preset-5">{count}</span>}
    </button>
  );
};

export default NavItem;
