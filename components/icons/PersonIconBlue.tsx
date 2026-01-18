import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const PersonIconBlue = () => {
  return (
    <Svg width="99" height="96" viewBox="0 0 99 96" fill="none">
      <Path
        d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z"
        fill="#B8CFF3"
      />
      <Rect
        x="39"
        y="27"
        width="18"
        height="18"
        rx="9"
        stroke="#2B70DB"
        strokeWidth={3.2}
      />
      <Path
        d="M67.864 63.1449C69.0976 66.2204 66.3166 69 63.0029 69C59.1912 69 53.8776 69 48 69C42.1224 69 36.8088 69 32.9971 69C29.6834 69 26.9024 66.2204 28.136 63.1449C30.9706 56.0782 38.7934 51 48 51C57.2066 51 65.0294 56.0782 67.864 63.1449Z"
        stroke="#2B70DB"
        strokeWidth={3.2}
      />
      <Path
        d="M75 84C75 77.3726 80.3726 72 87 72C93.6274 72 99 77.3726 99 84C99 90.6274 93.6274 96 87 96C80.3726 96 75 90.6274 75 84Z"
        fill="#FAFAFA"
      />
      <Path
        d="M80 84H94"
        stroke="#414141"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M87 91L87 77"
        stroke="#414141"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PersonIconBlue;

const styles = StyleSheet.create({});
