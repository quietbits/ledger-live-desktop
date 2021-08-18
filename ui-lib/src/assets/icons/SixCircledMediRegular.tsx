import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SixCircledMediRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.952 16.704C13.872 16.704 15.192 15.384 15.192 13.608C15.192 11.832 13.848 10.536 12.192 10.536C11.328 10.536 10.536 10.92 10.128 11.592H9.91201C9.91201 9.79201 10.44 8.71201 12 8.71201C12.984 8.71201 13.608 9.12001 13.728 9.98401H15.168C14.928 8.37601 13.728 7.34401 12 7.34401C9.69601 7.34401 8.37601 9.21601 8.40001 12.144C8.42401 15 9.72001 16.704 11.952 16.704ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001ZM10.152 13.872V13.272C10.152 12.336 10.704 11.832 11.832 11.832H12.024C13.152 11.832 13.68 12.336 13.68 13.272V13.872C13.68 14.808 13.152 15.312 12.024 15.312H11.832C10.68 15.312 10.152 14.784 10.152 13.872Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledMediRegular;