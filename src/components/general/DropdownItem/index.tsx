import classNames from "classnames";
import "./style.css";
import useThemeMode from "../../../hooks/useThemeMode";
import CheckmarkIcon from "../../icons/CheckmarkIcon";

const DropdownItem = ({
  icon,
  label,
  checked = false,
  onClick,
}: {
  icon?: React.ReactNode;
  label?: string;
  checked?: boolean;
  onClick?: () => void;
}) => {
  const { isDarkMode } = useThemeMode();

  return (
    <div
      className={classNames("dropdown-item", {
        dark: isDarkMode,
      })}
      onClick={onClick}
    >
      <div className="dropdown-content">
        {icon && <div className="dropdown-icon">{icon}</div>}
        {label && <span className="dropdown-label text-preset-4">{label}</span>}
      </div>
      {checked && <CheckmarkIcon size={16} />}
    </div>
  );
};

export default DropdownItem;
