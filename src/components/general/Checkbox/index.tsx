import { Checkbox as RadixCheckbox } from "radix-ui";
import "./styles.css";
import classNames from "classnames";
import useThemeMode from "../../../hooks/useThemeMode";
import CheckmarkIcon from "../../icons/CheckmarkIcon";

const Checkbox = ({
  id = "c1",
  checked,
  label,
  onCheckboxClick,
}: {
  id?: string;
  checked?: boolean;
  onCheckboxClick?: () => void;
  label?: string;
}) => {
  const { isDarkMode } = useThemeMode();

  return (
    <div className="checkbox">
      <RadixCheckbox.Root
        className={classNames("checkbox-root", { dark: isDarkMode })}
        checked={checked}
        onClick={onCheckboxClick}
        id={id}
      >
        <RadixCheckbox.Indicator className="checkbox-indicator">
          <CheckmarkIcon size={8} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label ? (
        <label className="checkbox-label text-preset-3" htmlFor={id}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;
