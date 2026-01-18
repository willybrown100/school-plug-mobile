import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const MoreIcon = ({ focused, color }: { focused: boolean; color: string }) => {
  const iconColor = focused ? "#2B70DB" : "#414141";
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Rect width="18" height="18" fill="white" />
      <Path
        d="M2.25 5.25H15.75"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <Path
        d="M2.25 9H15.75"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <Path
        d="M2.25 12.75H15.75"
        stroke={focused ? "#2B70DB" : "#414141"}
        stroke-width="1.125"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default MoreIcon;

const styles = StyleSheet.create({});
