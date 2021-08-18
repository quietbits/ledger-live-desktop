import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ZeroCircledFinaLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7642 16.704C13.1162 16.704 14.3402 14.856 14.3402 12.024C14.3402 9.168 13.1402 7.34401 10.7642 7.34401C8.43621 7.34401 7.18821 9.19201 7.18821 12.024C7.18821 14.856 8.43621 16.704 10.7642 16.704ZM4.11621 21.12H10.7642C15.8762 21.12 19.8842 16.968 19.8842 12C19.8842 6.888 15.8762 2.88 10.7642 2.88H4.11621V4.08H10.7642C15.2042 4.08 18.6842 7.56 18.6842 12C18.6842 16.32 15.2042 19.92 10.7642 19.92H4.11621V21.12ZM8.43621 12.6V11.472C8.43621 9.288 9.15621 8.376 10.7642 8.376C11.6522 8.376 12.2522 8.64001 12.6362 9.264L8.55621 13.896C8.48421 13.512 8.43621 13.104 8.43621 12.6ZM8.86821 14.784L12.9722 10.152C13.0442 10.512 13.0922 10.968 13.0922 11.472V12.6C13.0922 14.784 12.3722 15.672 10.7642 15.672C9.87621 15.672 9.25221 15.408 8.86821 14.784Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledFinaLight;