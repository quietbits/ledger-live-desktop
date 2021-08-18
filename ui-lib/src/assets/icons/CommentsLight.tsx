import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CommentsLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63989 4.88398V17.292L6.76789 14.124H17.6399V4.88398C17.6399 3.89998 16.8239 3.08398 15.8399 3.08398H4.43989C3.45589 3.08398 2.63989 3.89998 2.63989 4.88398ZM3.83989 14.916V4.90798C3.83989 4.52398 4.15189 4.21198 4.53589 4.21198H15.7679C16.1279 4.21198 16.4399 4.52398 16.4399 4.90798V12.972H6.35989L3.83989 14.916ZM7.67989 15.924C7.67989 16.908 8.49589 17.724 9.47989 17.724H17.2079L21.3599 20.916V8.72398C21.3599 7.73998 20.5199 6.87598 19.5119 6.87598V8.07598C19.8719 8.07598 20.1599 8.43598 20.1599 8.96398V18.516L17.6399 16.572H9.79189C9.19189 16.572 8.87989 16.284 8.87989 15.924H7.67989Z"
        fill={color}
      />
    </svg>
  );
}

export default CommentsLight;