import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const DoneIcon = ({ stroke = "#939393" }: { stroke: string }) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M6.1875 9.5625L7.875 11.25L11.8125 7.3125"
        stroke={stroke}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
        stroke={stroke}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DoneIcon;

const styles = StyleSheet.create({});
