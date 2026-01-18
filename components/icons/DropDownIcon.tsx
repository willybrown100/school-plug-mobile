import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const DropDownIcon = () => {
  return (
    <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
      <Path
        d="M0.5625 0.5625L5.625 5.625L10.6875 0.5625"
        stroke="#414141"
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DropDownIcon;

const styles = StyleSheet.create({});
