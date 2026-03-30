const CheckmarkIcon = ({
  size = 20,
  color = "#FFFFFF",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M16.666 5 7.5 14.167 3.333 10"
    />
  </svg>
);

export default CheckmarkIcon;
