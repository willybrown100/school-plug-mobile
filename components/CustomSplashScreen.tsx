import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import WhiteLogo from "./icons/WhiteLogo";

const CustomSplashScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  if (isDark) {
    // Dark mode: Use gradient
    return (
      <LinearGradient colors={["#1A1A1A", "#174489"]} style={styles.container}>
        <WhiteLogo />
      </LinearGradient>
    );
  }

  // Light mode: Solid blue background
  return (
    <View style={[styles.container, { backgroundColor: "#174489" }]}>
      <WhiteLogo />
    </View>
  );
};

export default CustomSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
