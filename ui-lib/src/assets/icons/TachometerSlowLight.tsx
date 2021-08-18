import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function TachometerSlowLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.17608 19.8359H19.8241C21.0481 18.2279 21.8161 16.1639 21.8161 13.9799C21.8161 8.55594 17.4241 4.16394 12.0001 4.16394C10.0321 4.16394 8.20808 4.73994 6.67208 5.74794L7.56008 6.63594C8.83208 5.81994 10.3681 5.36394 12.0001 5.36394C16.7521 5.36394 20.6161 9.22794 20.6161 13.9799C20.6161 15.6839 20.0881 17.2919 19.2241 18.6359H4.80008C3.91208 17.2919 3.38408 15.6839 3.38408 13.9799C3.38408 12.3479 3.86408 10.8119 4.65608 9.51594L3.79208 8.62794C2.78408 10.1639 2.18408 12.0119 2.18408 13.9799C2.18408 16.1639 2.95208 18.2279 4.17608 19.8359ZM4.63208 7.42794L11.5921 14.3879C11.6881 14.5079 11.8321 14.5799 12.0001 14.5799C12.3361 14.5799 12.6001 14.3159 12.6001 13.9799C12.6001 13.8119 12.5521 13.6679 12.4321 13.5479L5.47208 6.58794L4.63208 7.42794Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerSlowLight;