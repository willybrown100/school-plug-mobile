import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import AnimatedNavButton from "../AnimatedNavButton";
import Typography from "../Typography";
import ArrowRight from "../icons/ArrowRight";

const AppButton = ({
  title,
  onPress,
  isLoading,
  showIcon = true,
  style,
  width,
}: {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  showIcon?: boolean;
  width?: number;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={[
        {
          backgroundColor: "#174489",
          paddingVertical: 14,
          paddingHorizontal: 32,
          borderRadius: 1000,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 6,
          width,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Typography color="#fff" size={14} weight="600">
        {title}
      </Typography>
      {showIcon && (
        <AnimatedNavButton isActive={isLoading}>
          <ArrowRight />
        </AnimatedNavButton>
      )}
    </Pressable>
  );
};

export default AppButton;
