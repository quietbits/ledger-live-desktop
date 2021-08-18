import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function BuyCryptoAltRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24ZM4.32001 12C4.32001 7.68001 7.70401 4.32001 12 4.32001C16.32 4.32001 19.68 7.68001 19.68 12C19.68 16.176 16.32 19.68 12 19.68C7.70401 19.68 4.32001 16.296 4.32001 12ZM8.28001 13.416C8.25601 15.264 9.55201 16.584 11.448 16.8V17.976H12.576V16.8C14.4 16.584 15.696 15.408 15.696 13.848C15.696 12.408 14.664 11.592 13.032 11.352L11.472 11.136C10.44 11.016 10.008 10.68 10.008 9.86401C10.008 8.83201 10.728 8.44801 12.024 8.44801C13.464 8.44801 13.992 8.95201 13.992 10.272H15.48C15.48 8.66401 14.256 7.39201 12.576 7.17601V5.97601H11.448V7.15201C9.76801 7.36801 8.56801 8.49601 8.56801 9.96001C8.56801 11.352 9.45601 12.168 10.968 12.384L12.528 12.576C13.704 12.744 14.16 13.08 14.16 13.968C14.16 15.072 13.488 15.48 12.024 15.48C10.344 15.48 9.74401 14.928 9.74401 13.416H8.28001Z"
        fill={color}
      />
    </svg>
  );
}

export default BuyCryptoAltRegular;