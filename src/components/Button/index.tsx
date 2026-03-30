import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./style.css";
import useThemeMode from "../../hooks/useThemeMode";

type ButtonProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      variant: "primary";
      buttonType?: "default" | "error";
      size?: "sm" | "md";
      iconLeft?: ReactNode;
      iconRight?: ReactNode;
      children: ReactNode;
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      variant: "secondary";
      buttonType?: "default" | "error";
      size?: "sm" | "md";
      iconLeft?: ReactNode;
      iconRight?: ReactNode;
      children: ReactNode;
    })
  | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
      variant: "iconOnly";
      icon: ReactNode;
    });

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  buttonType?: "default" | "error";
  size?: "sm" | "md";
  children: ReactNode;
}

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  buttonType?: "default" | "error";
  size?: "sm" | "md";
  children: ReactNode;
  isDarkMode: boolean;
}

interface ButtonIconOnlyProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  icon: ReactNode;
  isDarkMode: boolean;
}

const ButtonPrimary = ({
  buttonType = "default",
  size = "md",
  className,
  iconLeft,
  iconRight,
  children,
  ...rest
}: ButtonPrimaryProps) => (
  <button
    className={classNames(
      "button primary",
      {
        error: buttonType === "error",
        sm: size === "sm",
        md: size === "md",
      },
      className,
    )}
    {...rest}
  >
    {iconLeft}
    {children}
    {iconRight}
  </button>
);

const ButtonSecondary = ({
  buttonType = "default",
  size = "md",
  className,
  iconLeft,
  iconRight,
  children,
  isDarkMode,
  ...rest
}: ButtonSecondaryProps) => {
  return (
    <button
      className={classNames(
        "button secondary",
        {
          error: buttonType === "error",
          dark: isDarkMode,
          sm: size === "sm",
          md: size === "md",
        },
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

const ButtonIconOnly = ({
  icon,
  className,
  isDarkMode,
  ...rest
}: ButtonIconOnlyProps) => {
  return (
    <button
      className={classNames(
        "button icon-only",
        {
          dark: isDarkMode,
        },
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  );
};

const Button = (props: ButtonProps) => {
  const { isDarkMode } = useThemeMode();

  if ("icon" in props) {
    // iconOnly variant
    const { icon, className, ...rest } = props;
    return (
      <ButtonIconOnly
        icon={icon}
        className={className}
        isDarkMode={isDarkMode}
        {...rest}
      />
    );
  }

  // primary or secondary variant
  const {
    variant = "primary",
    buttonType = "default",
    size = "md",
    className,
    children,
    iconLeft,
    iconRight,
    ...rest
  } = props as
    | (ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: "primary" | "secondary";
        buttonType?: "default" | "error";
        size?: "sm" | "md";
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        children: ReactNode;
      });

  if (variant === "secondary") {
    return (
      <ButtonSecondary
        buttonType={buttonType}
        size={size}
        className={className}
        iconLeft={iconLeft}
        iconRight={iconRight}
        isDarkMode={isDarkMode}
        {...rest}
      >
        {children}
      </ButtonSecondary>
    );
  }

  return (
    <ButtonPrimary
      buttonType={buttonType}
      size={size}
      className={className}
      iconLeft={iconLeft}
      iconRight={iconRight}
      {...rest}
    >
      {children}
    </ButtonPrimary>
  );
};

export default Button;
