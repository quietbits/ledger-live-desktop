import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function LinuxRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8039 22.3201C16.6679 22.3201 17.4839 21.7921 17.9879 21.1201C18.5879 20.3521 20.5799 19.9921 20.5799 19.0081C20.5799 18.5281 20.1959 18.1921 19.9319 17.8081C19.5719 17.3761 19.7399 16.6081 19.2119 16.1521C19.1159 16.0561 18.9719 15.9841 18.8759 15.9121C18.9719 15.5281 19.0439 15.0961 19.0439 14.6881C19.0439 11.1121 15.4919 9.52805 15.4919 6.93605V6.16805C15.4919 3.98405 15.1319 1.68005 12.4199 1.68005C10.0679 1.68005 9.20392 3.00005 9.20392 5.20805C9.20392 5.83205 9.29992 6.43205 9.29992 7.03205C9.29992 10.0321 5.36392 11.9521 5.77192 15.6241C5.53192 15.8881 5.33992 16.2001 5.09992 16.4641C4.61992 16.9441 3.51592 16.7281 3.51592 17.9521C3.51592 18.2881 3.65992 18.6241 3.65992 18.9841C3.65992 19.3441 3.41992 19.7041 3.41992 20.1121C3.41992 20.6161 3.73192 20.9521 4.21192 21.0721C5.05192 21.3121 5.93992 21.1921 6.75592 21.6001C7.33192 21.8881 7.90792 22.0801 8.53192 22.0801C9.13192 22.0801 10.0199 21.7921 10.1879 21.1201C10.8359 21.0481 11.4359 20.8321 12.0839 20.8321C12.7559 20.8321 13.4279 21.0481 14.1239 21.0001C14.3639 21.8161 14.9399 22.3201 15.8039 22.3201ZM3.92392 20.0881C3.92392 19.7041 4.11592 19.3921 4.11592 18.9841C4.11592 18.6241 3.99592 18.2881 3.99592 17.9281C3.99592 17.8081 4.01992 17.7121 4.06792 17.6161C4.33192 17.1361 5.05192 17.1841 5.43592 16.8001C5.60392 16.6321 5.74792 16.3921 5.91592 16.2001C6.08392 16.0081 6.15592 15.8881 6.44392 15.8401C6.92392 15.8401 7.16392 16.0321 7.45192 16.4401C7.76392 16.8721 7.97992 17.3761 8.21992 17.8321C8.41192 18.1921 8.67592 18.5281 8.91592 18.8401C9.22792 19.2961 9.85192 19.9201 9.85192 20.4961C9.85192 21.1921 9.25192 21.6001 8.57992 21.6001C8.02792 21.6001 7.49992 21.4321 6.97192 21.1921C6.41992 20.9041 5.77192 20.8081 5.14792 20.7361C4.83592 20.6881 4.16392 20.6641 3.97192 20.3761C3.92392 20.2801 3.92392 20.1841 3.92392 20.0881ZM7.09192 14.2321C7.09192 13.1761 7.71592 11.9761 8.26792 11.0881C7.97992 12.1201 7.33192 12.6241 7.33192 13.8481C7.33192 14.3521 7.49992 14.8321 7.78792 15.2161C7.85992 12.7201 9.70792 10.7761 9.89992 8.30405C10.3079 8.68805 10.9319 9.16805 11.5319 9.16805C12.0839 9.16805 13.5239 8.37605 13.9319 7.96805C14.2679 9.26405 14.7719 10.5841 15.3959 11.7601C15.8279 12.5761 16.1639 13.4401 16.3319 14.3521C16.4999 14.3281 16.6199 14.3761 16.7639 14.4001C16.8839 14.1121 16.9319 13.8001 16.9319 13.5121C16.9319 12.1201 15.7319 10.8241 15.7319 10.7761C15.7319 10.7761 15.7079 10.7521 15.7319 10.7281C16.5479 11.4481 17.2199 12.7201 17.2199 13.8241C17.2199 14.0641 17.2199 14.2801 17.1479 14.5201C17.5799 14.6161 18.4439 15.2161 18.4439 15.7201L18.4199 15.8401L18.2519 15.8161L18.2759 15.7201C18.2759 15.1201 16.8839 14.6641 16.3799 14.6641C16.0439 14.6641 15.8519 14.9761 15.8039 15.2641L15.5639 15.3841H15.5399C14.6759 15.8641 14.6999 17.1841 14.6519 18.0721C14.6279 18.3841 14.4599 19.0081 14.3399 19.3441C13.5959 19.8001 12.7319 20.1361 11.8439 20.1361C11.2199 20.1361 10.5959 19.9681 10.0679 19.6321C9.87592 19.3201 9.70792 19.0081 9.44392 18.7441C9.75592 18.6721 10.0199 18.5521 10.0199 18.1921C10.0199 16.5841 7.09192 16.2721 7.09192 14.2321ZM9.65992 5.76005C9.65992 5.35205 9.87592 4.75205 10.3319 4.75205C10.8839 4.75205 11.1239 5.49605 11.1239 5.92805V6.02405C10.9559 6.04805 10.8119 6.12005 10.6919 6.19205C10.6919 6.00005 10.6199 5.49605 10.3079 5.49605C10.1159 5.49605 10.0199 5.83205 10.0199 6.00005C10.0199 6.19205 10.0679 6.43205 10.2119 6.60005C10.1639 6.62405 10.0199 6.74405 9.94792 6.79205C9.70792 6.50405 9.65992 6.12005 9.65992 5.76005ZM9.68392 7.51205C9.68392 7.24805 10.3799 6.79205 10.4279 6.81605C10.6919 6.52805 11.0279 6.26405 11.5079 6.26405C11.8919 6.26405 13.8359 7.00805 13.8359 7.39205C13.8359 7.89605 13.3319 8.13605 12.9239 8.28005C12.3719 8.49605 12.1799 8.88005 11.5079 8.88005C11.0519 8.88005 9.68392 7.96805 9.68392 7.51205ZM9.85192 7.58405C10.3559 7.84805 10.8599 8.37605 11.3879 8.37605C12.2279 8.37605 13.1879 7.51205 13.4999 7.51205L13.4759 7.34405C13.0439 7.34405 12.2519 8.18405 11.3639 8.18405C10.9319 8.18405 10.4039 7.63205 9.85192 7.36805V7.58405ZM11.8679 6.00005C11.8679 5.40005 12.1079 4.53605 12.8519 4.53605C13.4999 4.53605 13.9079 5.23205 13.9079 5.80805C13.9079 6.14405 13.8119 6.48005 13.6199 6.74405C13.4519 6.72005 13.2839 6.60005 13.1159 6.55205C13.2119 6.38405 13.2359 6.16805 13.2359 5.97605C13.2359 5.71205 13.1159 5.32805 12.7799 5.32805C12.3719 5.32805 12.3239 5.88005 12.3239 6.19205C12.1559 6.09605 12.0119 6.02405 11.8679 6.00005ZM14.5559 20.6161C14.5559 19.7761 15.0839 18.9601 15.1319 18.0721C15.1319 17.4241 15.1799 16.4881 15.5639 15.9361C15.6599 15.8881 15.7319 15.8401 15.7799 15.7921C15.9239 16.2961 16.0919 16.8721 16.7399 16.8721C17.1479 16.8721 17.6999 16.6081 17.9639 16.3201H18.1799C18.3479 16.3201 18.5399 16.3201 18.7079 16.3921C18.7799 16.3921 18.8519 16.4401 18.8999 16.4881C19.2839 16.7521 19.1879 17.7121 19.5719 18.1441C19.7879 18.3841 20.0999 18.6961 20.0999 19.0321C20.0999 19.4161 18.1319 20.2081 17.6039 20.8561C17.1719 21.3841 16.5479 21.8401 15.8279 21.8401C15.1319 21.8401 14.5559 21.3361 14.5559 20.6161Z"
        fill={color}
      />
    </svg>
  );
}

export default LinuxRegular;