import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function KeyLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.07581 21.24L8.93981 20.328L6.49181 17.904L8.07581 16.32L10.4998 18.768L11.4118 17.856L8.96381 15.432L13.3078 11.088C14.0518 11.64 14.9878 11.976 16.0198 11.976C18.6358 11.976 20.6998 9.91201 20.6998 7.36801C20.6998 4.82401 18.6358 2.76001 16.0198 2.76001C13.4038 2.76001 11.3638 4.82401 11.3638 7.36801C11.3638 8.44801 11.7238 9.45601 12.3718 10.248L3.2998 19.296L4.2118 20.208L5.6038 18.792L8.07581 21.24ZM12.6118 7.36801C12.6118 5.47201 14.1238 3.96001 16.0198 3.96001C17.9158 3.96001 19.4278 5.47201 19.4278 7.36801C19.4278 9.26401 17.9158 10.776 16.0198 10.776C14.1238 10.776 12.6118 9.26401 12.6118 7.36801Z"
        fill={color}
      />
    </svg>
  );
}

export default KeyLight;