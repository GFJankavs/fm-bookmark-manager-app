import type { ReactNode } from "react";
import Checkbox from "../Checkbox";
import "./style.css";
import classNames from "classnames";
import useThemeMode from "../../../hooks/useThemeMode";

interface NavItemProps {
  checked?: boolean;
  icon?: ReactNode;
  count?: number;
  children: string;
}

const NavItem = ({ checked, icon, count, children }: NavItemProps) => {
  const { isDarkMode } = useThemeMode();

  return (
    <button
      className={classNames("nav-item-wrapper", {
        checked: checked,
        dark: isDarkMode,
      })}
    >
      <div className="nav-item-content">
        {icon && !checked && <>{icon}</>}
        {checked && !icon && <Checkbox checked={checked} />}
        <span className="text-preset-3">{children}</span>
      </div>
      {count && <span className="nav-item-count text-preset-5">{count}</span>}
    </button>
  );
};

export default NavItem;
