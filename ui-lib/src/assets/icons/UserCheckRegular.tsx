import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UserCheckRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.14404 19.4279V21.2999H18.048V17.9159L16.392 19.548V19.836H4.77604V18.54C4.77604 16.404 5.88004 15.396 8.08804 15.396H10.56L8.90404 13.74H8.42404C6.62404 13.74 5.23204 14.484 4.22404 15.7559C3.50404 16.6919 3.14404 17.844 3.14404 19.4279ZM5.88004 7.30795C5.88004 9.87595 8.01604 11.916 10.584 11.916C13.152 11.916 15.288 9.87595 15.288 7.30795C15.288 4.73995 13.152 2.69995 10.584 2.69995C8.01604 2.69995 5.88004 4.73995 5.88004 7.30795ZM7.44004 7.30795C7.44004 5.55595 8.83204 4.16395 10.584 4.16395C12.336 4.16395 13.728 5.55595 13.728 7.30795C13.728 9.05995 12.336 10.452 10.584 10.452C8.83204 10.452 7.44004 9.05995 7.44004 7.30795ZM11.952 14.268L15.24 17.58L20.856 11.94L19.752 10.86L15.24 15.3479L13.032 13.164L11.952 14.268Z"
        fill={color}
      />
    </svg>
  );
}

export default UserCheckRegular;