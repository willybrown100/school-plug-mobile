import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowRight = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M2.5 8H13.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 3.5L13.5 8L9 12.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRight;

const styles = StyleSheet.create({});
