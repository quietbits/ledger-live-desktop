import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function HelpLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1839 13.392H12.0959C14.3999 13.392 15.6719 11.808 15.6719 9.912C15.6719 8.01601 14.3999 6.336 12.1439 6.336C10.0319 6.336 8.59188 7.92 8.59188 9.696V9.79201H9.79188V9.552C9.79188 8.208 10.5359 7.488 12.0479 7.488H12.2159C13.7519 7.488 14.4719 8.23201 14.4719 9.624V10.296C14.4719 11.64 13.7519 12.312 12.3119 12.312H11.1839V13.392ZM2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12ZM11.0639 17.04H12.9359V15.168H11.0639V17.04Z"
        fill={color}
      />
    </svg>
  );
}

export default HelpLight;