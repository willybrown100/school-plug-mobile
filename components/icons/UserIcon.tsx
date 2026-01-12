import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface UserIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const UserIcon: React.FC<UserIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const strokeColor = color || (focused ? "#007AFF" : "#565656");

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="8"
        r="4"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 20C5 16.6863 7.68629 14 11 14H13C16.3137 14 19 16.6863 19 20"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default UserIcon;
