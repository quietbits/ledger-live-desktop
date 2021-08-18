import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function DevicesAltLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.65604 19.92H12.072V18.84H9.67204L10.296 15.84H12.072V14.688H3.93604C3.52804 14.688 3.24004 14.424 3.24004 14.016V4.944C3.24004 4.536 3.52804 4.248 3.93604 4.248H18.888C19.296 4.248 19.56 4.536 19.56 4.944V6.12H20.76V4.92C20.76 3.936 19.944 3.12 18.96 3.12H3.84004C2.85604 3.12 2.04004 3.936 2.04004 4.92V14.04C2.04004 15.024 2.85604 15.84 3.84004 15.84H9.24004L8.61604 18.84H6.24004C5.52004 18.84 4.89604 19.296 4.65604 19.92ZM13.68 19.08C13.68 20.064 14.496 20.88 15.48 20.88H20.16C21.144 20.88 21.96 20.064 21.96 19.08V9.6C21.96 8.616 21.144 7.8 20.16 7.8H15.48C14.496 7.8 13.68 8.616 13.68 9.6V19.08ZM14.832 19.104V9.552C14.832 9.144 15.096 8.88 15.504 8.88H20.136C20.544 8.88 20.832 9.144 20.832 9.552V19.104C20.832 19.512 20.544 19.8 20.136 19.8H15.504C15.096 19.8 14.832 19.512 14.832 19.104ZM17.04 18.096C17.04 18.528 17.376 18.888 17.832 18.888C18.264 18.888 18.6 18.528 18.6 18.096C18.6 17.664 18.264 17.328 17.832 17.328C17.376 17.328 17.04 17.664 17.04 18.096Z"
        fill={color}
      />
    </svg>
  );
}

export default DevicesAltLight;