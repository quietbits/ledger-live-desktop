import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function BatteryHalfLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52002 17.34H19.536V15.18H21.48V8.81997H19.536V6.65997H2.52002V17.34ZM3.72002 16.212V7.81197H18.336V9.97197H20.28V14.052H18.336V16.212H3.72002ZM5.40002 14.532H11.76V9.49197H5.40002V14.532Z"
        fill={color}
      />
    </svg>
  );
}

export default BatteryHalfLight;