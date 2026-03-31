import { useRef, type InputHTMLAttributes, type ReactNode } from "react";
import "./style.css";
import classNames from "classnames";
import useThemeMode from "../../../hooks/useThemeMode";

const InputField = ({
  placeholder,
  label,
  icon,
  id,
  hint,
  error,
  required,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & {
  label: string;
  icon?: ReactNode;
  hint?: string;
  error?: boolean;
}) => {
  const { isDarkMode } = useThemeMode();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <fieldset
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
    </fieldset>
  );
};

export default InputField;
