import React from "react";
import Svg, { Path } from "react-native-svg";

interface EventsIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const EventsIcon: React.FC<EventsIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const iconColor = color || (focused ? "#2B70DB" : "#565656");
  const detailColor = focused ? "#fff" : "#565656";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 2V5"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M16 2V5"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        fill={focused ? iconColor : "none"}
        stroke={focused ? "#fff" : iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.09H20.5"
        stroke={detailColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M15.6947 13.7H15.7037"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M15.6947 16.7H15.7037"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M11.9955 13.7H12.0045"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M11.9955 16.7H12.0045"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M8.29431 13.7H8.30329"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M8.29431 16.7H8.30329"
        stroke={detailColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export default EventsIcon;
