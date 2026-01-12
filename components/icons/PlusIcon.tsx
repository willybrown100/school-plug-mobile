import React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

interface PlusIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export const PlusIcon = ({
  width = 39,
  height = 39,
  color = "#F7F7F7",
  strokeWidth = 1.5,
  ...props
}: PlusIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M7.33295 13.9167H20.6669C20.6836 13.9168 20.7042 13.9237 20.7236 13.9431C20.743 13.9625 20.7499 13.9831 20.7499 13.9998C20.7499 14.0165 20.7431 14.0378 20.7236 14.0574C20.7042 14.0767 20.6836 14.0837 20.6669 14.0837H7.33295C7.3163 14.0837 7.29568 14.0767 7.27631 14.0574C7.25676 14.0378 7.24994 14.0165 7.24994 13.9998C7.25002 13.9831 7.25689 13.9625 7.27631 13.9431C7.29572 13.9237 7.31625 13.9168 7.33295 13.9167Z"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M13.9996 7.25C14.0164 7.25 14.0377 7.25682 14.0573 7.27637C14.0765 7.29574 14.0835 7.31636 14.0836 7.33301V20.667C14.0835 20.6836 14.0765 20.7043 14.0573 20.7236C14.0377 20.7432 14.0164 20.75 13.9996 20.75C13.9829 20.7499 13.9624 20.743 13.943 20.7236C13.9236 20.7042 13.9167 20.6837 13.9166 20.667V7.33301C13.9167 7.31631 13.9236 7.29578 13.943 7.27637C13.9624 7.25695 13.9829 7.25009 13.9996 7.25Z"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};
