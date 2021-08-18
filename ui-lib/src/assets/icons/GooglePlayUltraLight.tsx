import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function GooglePlayUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3921 21.288L13.7281 12L4.3921 2.712C3.8641 3 3.6001 3.408 3.6001 3.984V20.04C3.6001 20.616 3.8641 21.024 4.3921 21.288ZM6.5521 20.856L16.6321 15.024L14.4721 12.816L6.5521 20.856ZM6.5521 3.168L14.4721 11.208L16.6321 9.048L6.5521 3.168ZM15.3121 12L17.6641 14.352L19.8001 13.128C20.1841 12.912 20.4001 12.456 20.4001 12.024C20.4001 11.592 20.1841 11.136 19.8001 10.944L17.6641 9.696L15.3121 12Z"
        fill={color}
      />
    </svg>
  );
}

export default GooglePlayUltraLight;