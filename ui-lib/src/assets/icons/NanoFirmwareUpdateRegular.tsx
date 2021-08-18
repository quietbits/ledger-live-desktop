import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function NanoFirmwareUpdateRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64014 21.2999H21.3601V14.724H2.66414L2.64014 21.2999ZM4.03214 19.9079V16.116H10.5601C10.1281 16.62 9.88814 17.292 9.86414 18.012C9.88814 18.732 10.1281 19.4039 10.5601 19.9079H4.03214ZM7.63214 8.67595L12.0001 13.02L16.3441 8.67595L15.3601 7.71595L14.1121 8.93995L12.7441 10.38V2.69995H11.2561V10.404C10.8001 9.89995 10.3441 9.41995 9.86414 8.93995L8.61614 7.71595L7.63214 8.67595ZM11.2561 18.012C11.2561 16.9799 12.1201 16.116 13.1041 16.116H19.9921V19.9079H13.1041C12.1201 19.9079 11.2561 19.0439 11.2561 18.012ZM12.2641 18.012C12.2641 18.5879 12.7201 19.0439 13.2961 19.0439C13.8481 19.0439 14.3281 18.5879 14.3281 18.012C14.3281 17.436 13.8481 16.9799 13.2961 16.9799C12.7201 16.9799 12.2641 17.436 12.2641 18.012Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoFirmwareUpdateRegular;