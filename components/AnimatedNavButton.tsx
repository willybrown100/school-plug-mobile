/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type AnimatedNavButtonProps = {
  children: React.ReactNode;
  otherStyles?: string;
  isActive?: boolean;
};

export default function AnimatedNavButton({
  children,
  isActive = true,
}: AnimatedNavButtonProps) {
  const translateX = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      translateX.value = withRepeat(
        withSequence(
          withTiming(-2, { duration: 1500 }),
          withTiming(2, { duration: 1500 })
        ),
        -1,
        true
      );
    } else {
      cancelAnimation(translateX);
      translateX.value = withTiming(0, { duration: 300 }); // Return to center
    }
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return <Animated.View style={[animatedStyle]}>{children}</Animated.View>;
}
