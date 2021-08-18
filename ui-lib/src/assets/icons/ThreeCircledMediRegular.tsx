import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ThreeCircledMediRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9998 16.68C13.9678 16.68 15.4318 15.528 15.4318 13.992C15.4318 13.008 14.8078 12.216 13.8718 11.952V11.688C14.6878 11.424 15.1198 10.728 15.1198 9.91201C15.1198 8.44801 13.7518 7.32001 11.9998 7.32001C10.1278 7.32001 8.73577 8.56801 8.73577 10.128V10.296H10.2958C10.2958 9.12001 10.7038 8.68801 11.9758 8.68801C13.1998 8.68801 13.6078 9.07201 13.6078 10.056C13.6078 10.968 13.3438 11.232 12.0958 11.232H11.1838V12.6H12.1198C13.4398 12.6 13.8238 12.936 13.8238 13.92C13.8238 14.952 13.3678 15.288 11.9758 15.288C10.5598 15.288 10.1758 14.904 10.1758 13.56H8.59177V13.68C8.59177 15.408 9.98377 16.68 11.9998 16.68ZM5.75977 21.24H18.2398V19.68H5.75977V21.24ZM5.75977 4.32001H18.2398V2.76001H5.75977V4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default ThreeCircledMediRegular;