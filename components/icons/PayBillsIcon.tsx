import React from "react";
import Svg, { Path } from "react-native-svg";

interface PayBillsIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const PayBillsIcon: React.FC<PayBillsIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const iconColor = color || (focused ? "#2B70DB" : "#565656");
  const detailColor = focused ? "#fff" : "#565656";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.67188 2.5V14.47C3.67188 15.45 4.13187 16.38 4.92188 16.97L10.1319 20.87C11.2419 21.7 12.7719 21.7 13.8819 20.87L19.0919 16.97C19.8819 16.38 20.3419 15.45 20.3419 14.47V2.5H3.67188Z"
        fill={focused ? iconColor : "none"}
        stroke={focused ? "#fff" : iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M2 2.5H22"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M8 8H16"
        stroke={detailColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M8 13H16"
        stroke={detailColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export default PayBillsIcon;
