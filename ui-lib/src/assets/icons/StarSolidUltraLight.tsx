import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function StarSolidUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 2.18399L9.62418 9.55199H1.68018L8.06418 14.256L5.64018 21.816L12.0002 17.16L18.3602 21.816L15.9122 14.256L22.3202 9.55199H14.3762L12.0002 2.18399Z"
        fill={color}
      />
    </svg>
  );
}

export default StarSolidUltraLight;