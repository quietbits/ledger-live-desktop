import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ShoppingCartMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1159 17.6641V15.8641H9.13195L8.77195 13.9921H19.8599L21.8519 4.84806H6.97195L6.53995 2.66406H2.14795V4.46406H4.95595L7.54795 17.6641H19.1159ZM7.21195 20.0641C7.21195 20.7361 7.76395 21.3361 8.48395 21.3361C9.17995 21.3361 9.73195 20.7361 9.73195 20.0641C9.73195 19.3681 9.17995 18.8161 8.48395 18.8161C7.76395 18.8161 7.21195 19.3681 7.21195 20.0641ZM7.33195 6.64806H19.4999L18.2759 12.1921H8.41195L7.33195 6.64806ZM16.9079 20.0641C16.9079 20.7361 17.4599 21.3361 18.1799 21.3361C18.8759 21.3361 19.4279 20.7361 19.4279 20.0641C19.4279 19.3681 18.8759 18.8161 18.1799 18.8161C17.4599 18.8161 16.9079 19.3681 16.9079 20.0641Z"
        fill={color}
      />
    </svg>
  );
}

export default ShoppingCartMedium;