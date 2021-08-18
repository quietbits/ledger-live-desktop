import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EyeLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 19.332C15.8162 19.332 19.8962 16.188 21.8402 12.012C19.8962 7.81203 15.8162 4.66803 12.0002 4.66803C8.20816 4.66803 4.10416 7.81203 2.16016 12.012C4.10416 16.188 8.20816 19.332 12.0002 19.332ZM3.48016 12.012C5.37616 8.31603 8.76016 5.82003 12.0002 5.82003C15.2402 5.82003 18.6242 8.31603 20.5202 12.012C18.6242 15.708 15.2402 18.204 12.0002 18.204C8.76016 18.204 5.37616 15.708 3.48016 12.012ZM8.64016 12.012C8.64016 13.86 10.1522 15.372 12.0002 15.372C13.8482 15.372 15.3602 13.86 15.3602 12.012C15.3602 10.164 13.8482 8.65203 12.0002 8.65203C10.1522 8.65203 8.64016 10.164 8.64016 12.012ZM9.72016 12.012C9.72016 10.74 10.7522 9.73203 12.0002 9.73203C13.2722 9.73203 14.2802 10.74 14.2802 12.012C14.2802 13.26 13.2722 14.292 12.0002 14.292C10.7522 14.292 9.72016 13.26 9.72016 12.012Z"
        fill={color}
      />
    </svg>
  );
}

export default EyeLight;