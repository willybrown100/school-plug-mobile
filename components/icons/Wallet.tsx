import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const Wallet = ({ focused, color }: any) => {
  const iconColor = color || (focused ? "#2B70DB" : "#565656");
  const detailColor = focused ? "#fff" : "#565656";
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Rect width="18" height="18" fill="white" />
      <Path
        d="M13.3136 5.28748C13.1336 5.25748 12.9461 5.24999 12.7511 5.24999H5.25105C5.04105 5.24999 4.83855 5.26498 4.64355 5.29498C4.74855 5.08498 4.89855 4.89001 5.07855 4.71001L7.51606 2.265C8.54356 1.245 10.2086 1.245 11.2361 2.265L12.5486 3.59247C13.0286 4.06497 13.2836 4.66498 13.3136 5.28748Z"
        stroke={iconColor}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.75 14.25C6.75 14.8125 6.5925 15.345 6.315 15.795C5.7975 16.665 4.845 17.25 3.75 17.25C2.655 17.25 1.7025 16.665 1.185 15.795C0.9075 15.345 0.75 14.8125 0.75 14.25C0.75 12.5925 2.0925 11.25 3.75 11.25C5.4075 11.25 6.75 12.5925 6.75 14.25Z"
        stroke={iconColor}
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.86879 14.2346H2.63379"
        stroke={detailColor}
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.75 13.1396V15.3821"
        stroke={detailColor}
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5 9V12.75C16.5 15 15 16.5 12.75 16.5H5.7225C5.955 16.305 6.1575 16.065 6.315 15.795C6.5925 15.345 6.75 14.8125 6.75 14.25C6.75 12.5925 5.4075 11.25 3.75 11.25C2.85 11.25 2.0475 11.6475 1.5 12.27V9C1.5 6.96 2.73 5.535 4.6425 5.295C4.8375 5.265 5.04 5.25 5.25 5.25H12.75C12.945 5.25 13.1325 5.25749 13.3125 5.28749C15.2475 5.51249 16.5 6.945 16.5 9Z"
        stroke={iconColor}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5 9.375H14.25C13.425 9.375 12.75 10.05 12.75 10.875C12.75 11.7 13.425 12.375 14.25 12.375H16.5"
        stroke={detailColor}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
