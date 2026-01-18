import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const SearchIcon = ({ focused, color }: any) => {
  const iconColor = color || (focused ? "#2B70DB" : "#565656");
  const detailColor = focused ? "#fff" : "#565656";
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Rect width="18" height="18" fill="white" />
      <Path
        d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
        stroke={iconColor}
        stroke-width="1.13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5 16.5L15 15"
        stroke={detailColor}
        stroke-width="1.13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({});
