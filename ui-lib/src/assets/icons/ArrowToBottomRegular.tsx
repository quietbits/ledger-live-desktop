import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ArrowToBottomRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 17.1001L17.4961 11.6041L16.5361 10.6441L14.3041 12.8521C13.8001 13.3801 13.2481 13.9321 12.7441 14.4841V3.18005H11.2561V14.4601C10.7521 13.9081 10.2241 13.3561 9.6961 12.8521L7.4881 10.6441L6.5041 11.6041L12.0001 17.1001ZM3.6001 20.8201H20.4001V19.2601H3.6001V20.8201Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowToBottomRegular;