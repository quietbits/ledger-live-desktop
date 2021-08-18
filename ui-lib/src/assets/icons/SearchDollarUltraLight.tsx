import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SearchDollarUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3841 15.984L21.1921 21.816L21.8161 21.192L15.9841 15.384C17.2561 13.968 18.0241 12.12 18.0241 10.104C18.0241 5.73601 14.4721 2.18401 10.1041 2.18401C5.73608 2.18401 2.18408 5.73601 2.18408 10.104C2.18408 14.472 5.73608 18.024 10.1041 18.024C12.1201 18.024 13.9681 17.256 15.3841 15.984ZM3.02408 10.104C3.02408 6.19201 6.21608 3.02401 10.1041 3.02401C14.0161 3.02401 17.1841 6.19201 17.1841 10.104C17.1841 13.992 14.0161 17.184 10.1041 17.184C6.21608 17.184 3.02408 13.992 3.02408 10.104ZM7.22408 11.16C7.22408 12.744 8.25608 13.752 9.76808 13.896V14.832H10.4401V13.92C11.9041 13.8 12.9361 12.936 12.9361 11.664C12.9361 10.512 12.1201 9.84001 10.8241 9.67201L10.4401 9.62401V6.84001C11.5441 6.93601 12.0721 7.56001 12.0481 8.68801H12.8161C12.8161 7.27201 11.8561 6.26401 10.4401 6.14401V5.23201H9.76808V6.16801C8.47208 6.31201 7.51208 7.15201 7.51208 8.32801C7.51208 9.40801 8.23208 10.056 9.43208 10.2L9.76808 10.248V13.2C8.59208 13.08 7.96808 12.408 7.96808 11.16H7.22408ZM8.23208 8.28001C8.23208 7.46401 8.80808 6.96001 9.76808 6.86401V9.55201L9.60008 9.52801C8.66408 9.40801 8.23208 9.04801 8.23208 8.28001ZM10.4401 13.224V10.32L10.6561 10.344C11.6881 10.464 12.1921 10.872 12.1921 11.688C12.1921 12.6 11.5681 13.128 10.4401 13.224Z"
        fill={color}
      />
    </svg>
  );
}

export default SearchDollarUltraLight;