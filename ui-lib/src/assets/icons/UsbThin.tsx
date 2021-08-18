import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UsbThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0122 22.32C12.8042 22.32 13.4522 21.672 13.4522 20.88C13.4522 20.16 12.9242 19.584 12.2522 19.464V14.976L16.5962 13.608C17.3642 13.368 17.8442 12.744 17.8442 11.976V8.08799H18.3002V6.64799H16.8602V8.08799H17.3642V11.976C17.3642 12.576 17.0762 12.96 16.4522 13.152L12.2522 14.472V3.59999H13.1642L11.9882 1.67999L10.8362 3.59999H11.7722V16.32L7.6682 14.952C7.0682 14.76 6.7802 14.4 6.7802 13.8V9.93599C7.1162 9.83999 7.3802 9.52799 7.3802 9.14399C7.3802 8.68799 6.9962 8.30399 6.5402 8.30399C6.0842 8.30399 5.7002 8.68799 5.7002 9.14399C5.7002 9.52799 5.9642 9.83999 6.3002 9.93599V13.8C6.3002 14.568 6.7802 15.168 7.5242 15.408L11.7722 16.824V19.464C11.1002 19.584 10.5722 20.16 10.5722 20.88C10.5722 21.672 11.2202 22.32 12.0122 22.32Z"
        fill={color}
      />
    </svg>
  );
}

export default UsbThin;