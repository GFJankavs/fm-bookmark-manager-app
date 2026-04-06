const CloseIcon = ({
    size = 20,
}: {
    size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M15 5 5 15M5 5l10 10"
    />
  </svg>
);

export default CloseIcon;
