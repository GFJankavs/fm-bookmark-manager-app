import { useRef, type InputHTMLAttributes, type ReactNode } from "react";
import useThemeMode from "../../hooks/useThemeMode";
import SearchIcon from "../icons/SearchIcon";
import "./style.css";
import classNames from "classnames";

const TextAreaField = ({
  placeholder = "Search",
  label,
  icon = <SearchIcon />,
  id,
  hint,
  error,
  required,
  maxLength = 280,
  value,
  ...rest
}: Omit<InputHTMLAttributes<HTMLTextAreaElement>, "ref"> & {
  label?: string;
  icon?: ReactNode;
  hint?: string;
  error?: boolean;
  maxLength?: number;
}) => {
  const { isDarkMode } = useThemeMode();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className={classNames("textarea-container", {
        dark: isDarkMode,
      })}
    >
      {label && (
        <label className="textarea-label text-preset-4" htmlFor={id}>
          {label} {required && <span className="label-required">*</span>}
        </label>
      )}
      <div
        className={classNames("textarea-wrapper", {
          error: error,
        })}
        onClick={() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }}
      >
        {icon}
        <textarea
          ref={textareaRef}
          className="textarea-field"
          id={id}
          value={value}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
      {hint && (
        <div className="hint-container">
          <p className="textarea-hint text-preset-4-medium">{hint}</p>
          <span className="text-preset-5">{`${typeof value === "string" ? value.length : 0}/${maxLength}`}</span>
        </div>
      )}
    </div>
  );
};

export default TextAreaField;
