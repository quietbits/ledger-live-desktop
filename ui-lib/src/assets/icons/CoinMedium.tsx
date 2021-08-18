import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CoinMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4401 22.3199H13.6321C17.7121 22.3199 20.6401 17.5439 20.6401 11.9999C20.6401 6.45593 17.7121 1.67993 13.6321 1.67993H10.4401C6.26411 1.67993 3.36011 6.52793 3.36011 11.9999C3.36011 17.4719 6.26411 22.3199 10.4401 22.3199ZM5.28011 11.9999C5.28011 7.36793 7.58411 3.59993 10.4401 3.59993C13.2241 3.59993 15.5761 7.36793 15.5761 11.9999C15.5761 16.6319 13.2241 20.3999 10.4401 20.3999C7.58411 20.3999 5.28011 16.6319 5.28011 11.9999ZM14.1121 20.3519C15.9601 18.5759 17.1361 15.4559 17.1361 11.9999C17.1361 8.54393 15.9601 5.42393 14.1121 3.64793C16.6801 4.03193 18.7201 7.63193 18.7201 11.9999C18.7201 16.3679 16.6801 19.9679 14.1121 20.3519Z"
        fill={color}
      />
    </svg>
  );
}

export default CoinMedium;