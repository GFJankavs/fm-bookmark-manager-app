const IconDarkTheme = ({
  variant = "light",
  size = 14,
}: {
  variant?: "light" | "dark";
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clip-path="url(#a)">
      <path
        stroke={variant === "light" ? "#051513" : "#ffffff"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.667"
        d="M18.296 10.797a6.667 6.667 0 1 1-9.092-9.093 8.334 8.334 0 1 0 9.092 9.093"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default IconDarkTheme;
