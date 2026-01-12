import React from "react";
import Svg, { Path } from "react-native-svg";

interface CodeIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const CodeIcon: React.FC<CodeIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const strokeColor = color || (focused ? "#007AFF" : "#565656");

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 18L22 12L16 6"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6L2 12L8 18"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CodeIcon;
