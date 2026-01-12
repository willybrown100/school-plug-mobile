import React from "react";
import Svg, { Path } from "react-native-svg";

interface TrendsIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const TrendsIcon: React.FC<TrendsIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const iconColor = color || (focused ? "#2B70DB" : "#565656");
  const detailColor = focused ? "#fff" : "#565656";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        fill={focused ? iconColor : "none"}
        stroke={focused ? "#fff" : iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
        stroke={detailColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M14.5 9.5H16.5V11.5"
        stroke={detailColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export default TrendsIcon;
