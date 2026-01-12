import { useTabBar } from "@/context/TabBarContext";
import { LinearGradient } from "expo-linear-gradient";
import { PressableScale } from "pressto";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { PlusIcon } from "./icons/PlusIcon";

type FloatingActionButtonProps = {
  onPress: () => void;
  button?: React.ReactNode;
};

export default function FloatingActionButton({
  onPress,
  button,
}: FloatingActionButtonProps) {
  const { fabValue } = useTabBar();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: (1 - fabValue.value) * 100 },
        { scale: fabValue.value },
      ],
      opacity: fabValue.value,
    };
  });

  return (
    <PressableScale
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.touchable}
    >
      <Animated.View
        style={[styles.container, animatedStyle]}
        pointerEvents="box-none"
      >
        <LinearGradient
          style={styles.gradient}
          colors={["#1288FC", "#0B5297"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0, y: 0.5 }}
          pointerEvents="none"
        >
          {button ?? <PlusIcon width={26.667} height={26.667} />}
        </LinearGradient>
      </Animated.View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  touchable: {
    position: "absolute",
    right: 16,
    bottom: Platform.OS === "ios" ? 130 : 110, // Adjusted to be above the tab bar
    zIndex: 1000,
    elevation: Platform.OS === "android" ? 10 : 0,
  },
  container: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
