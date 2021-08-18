import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function MobileThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.44014 22.32H16.5601C17.5441 22.32 18.3601 21.504 18.3601 20.52V3.47999C18.3601 2.49599 17.5441 1.67999 16.5601 1.67999H7.44014C6.45614 1.67999 5.64014 2.49599 5.64014 3.47999V20.52C5.64014 21.504 6.45614 22.32 7.44014 22.32ZM6.12014 20.52V3.47999C6.12014 2.68799 6.64814 2.15999 7.44014 2.15999H16.5601C17.3521 2.15999 17.8801 2.68799 17.8801 3.47999V20.52C17.8801 21.312 17.3521 21.84 16.5601 21.84H7.44014C6.64814 21.84 6.12014 21.312 6.12014 20.52ZM10.7281 19.488C10.7281 20.16 11.2801 20.76 12.0001 20.76C12.6961 20.76 13.2481 20.16 13.2481 19.488C13.2481 18.792 12.6961 18.24 12.0001 18.24C11.2801 18.24 10.7281 18.792 10.7281 19.488ZM11.2081 19.488C11.2081 19.056 11.5441 18.72 12.0001 18.72C12.4321 18.72 12.7681 19.056 12.7681 19.488C12.7681 19.92 12.4321 20.28 12.0001 20.28C11.5441 20.28 11.2081 19.92 11.2081 19.488Z"
        fill={color}
      />
    </svg>
  );
}

export default MobileThin;