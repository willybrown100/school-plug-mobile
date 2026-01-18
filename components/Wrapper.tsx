import { Colors } from "@/constants/Colors";

import { StatusBar } from "expo-status-bar";

import React, { JSX } from "react";

import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

type WrapperProps = {
  children: JSX.Element | JSX.Element[];

  paddingH?: any;

  paddingT?: any;

  paddingB?: any; // You can still use this for custom values

  useBottomSafeArea?: boolean; // New prop for conditional padding

  useTopSafeArea?: boolean; // New prop for conditional padding
};

const Wrapper = ({
  children,
  paddingH = 16,
  paddingB,
  paddingT,
  useBottomSafeArea = true,
  useTopSafeArea = true,
}: WrapperProps) => {
  const insets = useSafeAreaInsets();

  // Determine the bottom padding value

  const bottomPadding = paddingB ?? (useBottomSafeArea ? insets.bottom : 0);

  const topPadding = paddingT ?? (useTopSafeArea ? insets.top : 0);

  return (
    <View
      style={{
        flex: 1,

        width: "100%",

        minHeight: "100%",

        backgroundColor: Colors.primary.main,

        position: "relative",

        paddingTop: topPadding,

        paddingBottom: bottomPadding, // Use the conditional value

        paddingHorizontal: paddingH,

        zIndex: 1,
      }}
    >
      {children}

      <StatusBar style="light" />
    </View>
  );
};

export default Wrapper;
