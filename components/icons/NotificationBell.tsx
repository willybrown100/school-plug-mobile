import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const NotificationBell = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Rect width="18" height="18" fill="white" />
      <Path
        d="M9 4.83008V7.32758"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M9.015 1.5C6.255 1.5 4.02 3.735 4.02 6.495V8.07C4.02 8.58 3.81 9.345 3.5475 9.78L2.595 11.37C2.01 12.3525 2.415 13.4475 3.495 13.8075C7.08 15 10.9575 15 14.5425 13.8075C15.555 13.47 15.99 12.285 15.4425 11.37L14.49 9.78C14.2275 9.345 14.0175 8.5725 14.0175 8.07V6.495C14.01 3.75 11.76 1.5 9.015 1.5Z"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M11.4975 14.115C11.4975 15.4875 10.3725 16.6125 9 16.6125C8.3175 16.6125 7.6875 16.3275 7.2375 15.8775C6.7875 15.4275 6.5025 14.7975 6.5025 14.115"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-miterlimit="10"
      />
    </Svg>
  );
};

export default NotificationBell;

const styles = StyleSheet.create({});
