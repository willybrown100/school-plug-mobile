import React from "react";
import Svg, { Path } from "react-native-svg";

interface TrophyIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const TrophyIcon: React.FC<TrophyIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const strokeColor = color || (focused ? "#007AFF" : "#565656");

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15C15.866 15 19 11.866 19 8V5H5V8C5 11.866 8.13401 15 12 15Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15V19"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 19H16"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 8H20C21.1046 8 22 7.10457 22 6V5C22 5 21 5 20 5H19"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8H4C2.89543 8 2 7.10457 2 6V5C2 5 3 5 4 5H5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TrophyIcon;
