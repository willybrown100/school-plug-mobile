import React from "react";
import Svg, { Path } from "react-native-svg";

interface GraduationCapIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const GraduationCapIcon: React.FC<GraduationCapIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const strokeColor = color || (focused ? "#007AFF" : "#565656");

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15L2 10L12 5L22 10L12 15Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10V16"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 12V17C6 17 7.5 19 12 19C16.5 19 18 17 18 17V12"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GraduationCapIcon;
