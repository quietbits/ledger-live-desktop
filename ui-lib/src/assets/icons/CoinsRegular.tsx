import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CoinsRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.63612 21.348C13.5001 21.348 16.5241 20.076 16.5241 17.94V16.356C19.2601 15.996 21.2761 14.844 21.2761 13.092V6.03598C21.2761 3.89998 18.3481 2.65198 14.3641 2.65198C10.5481 2.65198 7.45212 3.87598 7.45212 6.03598V7.64398C4.69212 8.02798 2.72412 9.15598 2.72412 10.86V17.94C2.72412 20.076 5.67612 21.348 9.63612 21.348ZM4.09212 17.94V16.572C5.29212 17.388 7.28412 17.82 9.63612 17.82C11.9401 17.82 13.9561 17.364 15.1561 16.548V17.94C15.1561 19.068 13.0921 19.956 9.63612 19.956C6.08412 19.956 4.09212 19.092 4.09212 17.94ZM4.09212 14.436V12.996C5.29212 13.812 7.28412 14.244 9.63612 14.244C11.9401 14.244 13.9561 13.788 15.1561 12.972V14.436C15.1561 15.564 13.0921 16.452 9.63612 16.452C6.08412 16.452 4.09212 15.564 4.09212 14.436ZM4.09212 10.86C4.09212 9.75598 6.15612 8.86798 9.63612 8.86798C13.1881 8.86798 15.1561 9.73198 15.1561 10.86C15.1561 11.988 13.0921 12.876 9.63612 12.876C6.08412 12.876 4.09212 11.988 4.09212 10.86ZM8.84412 6.03598C8.84412 4.90798 10.9081 4.04398 14.3641 4.04398C17.9401 4.04398 19.8841 4.88398 19.8841 6.03598C19.8841 7.16398 17.4601 8.24398 13.6441 8.02798C12.7321 7.73998 11.6521 7.57198 10.4761 7.52398C9.39612 7.16398 8.84412 6.63598 8.84412 6.03598ZM15.8281 9.34798C17.5321 9.20398 18.9721 8.79598 19.8841 8.14798V9.61198C19.8841 10.476 18.7081 11.172 16.5241 11.46V10.86C16.5241 10.284 16.2841 9.77998 15.8281 9.34798ZM16.5241 14.964V12.852C17.9161 12.66 19.0921 12.276 19.8841 11.724V13.092C19.8841 13.956 18.7081 14.676 16.5241 14.964Z"
        fill={color}
      />
    </svg>
  );
}

export default CoinsRegular;