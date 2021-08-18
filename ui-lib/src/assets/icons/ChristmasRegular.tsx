import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ChristmasRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1361 21.6H12.8641V18.528H21.2641L17.2081 12.864H19.3441L12.0001 2.40002L4.65608 12.864H6.81608L2.73608 18.528H11.1361V21.6ZM5.61608 17.064L9.69608 11.376H7.51208L12.0001 4.99202L16.4881 11.376H14.3041L18.3841 17.064H5.61608Z"
        fill={color}
      />
    </svg>
  );
}

export default ChristmasRegular;