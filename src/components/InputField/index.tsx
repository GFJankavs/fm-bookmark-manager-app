import { useRef, type InputHTMLAttributes, type ReactNode } from "react";
import useThemeMode from "../../hooks/useThemeMode";
import SearchIcon from "../icons/SearchIcon";
import "./style.css";
import classNames from "classnames";

const InputField = ({
  placeholder = "Search",
  label,
  icon = <SearchIcon />,
  id,
  hint,
  error,
  required,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & {
  label?: string;
  icon?: ReactNode;
  hint?: string;
  error?: boolean;
}) => {
  const { isDarkMode } = useThemeMode();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={classNames("input-container", {
        dark: isDarkMode,
      })}
    >
      {label && (
        <label className="input-label text-preset-4" htmlFor={id}>
          {label} {required && <span className="label-required">*</span>}
        </label>
      )}
      <div
        className={classNames("input-wrapper", {
          error: error,
        })}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        {icon}
        <input
          ref={inputRef}
          className="input-field"
          type="text"
          id={id}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
      {hint && <p className="input-hint text-preset-4-medium">{hint}</p>}
    </div>
  );
};

export default InputField;
