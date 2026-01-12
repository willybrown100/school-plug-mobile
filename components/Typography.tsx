import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export type TypographyProps = {
  children: any;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  color?: string;
  font?: string;
  size?: number;
  align?: "center" | "justify" | "right" | "left";
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
};

const Typography = ({
  children,
  color,
  weight = "400",
  size,
  align,
  style,
  lineHeight,
  numberOfLines,
  ellipsizeMode,
}: TypographyProps) => {
  const getFontFamily = (weight: TypographyProps["weight"]) => {
    switch (weight) {
      case "100":
        return "Inter-Thin";
      case "200":
        return "Inter-ExtraLight";
      case "300":
        return "Inter-Light";
      case "400":
        return "Inter-Regular";
      case "500":
        return "Inter-Medium";
      case "600":
        return "Inter-SemiBold";
      case "700":
        return "Inter-Bold";
      case "800":
        return "Inter-ExtraBold";
      case "900":
        return "Inter-Black";
      default:
        return "Inter-Regular";
    }
  };
  return (
    <Text
      style={[
        {
          color: color ? color : Colors.white.mediumLight,
          fontWeight: weight,
          fontFamily: getFontFamily(weight),
          fontSize: size,
          textAlign: align,
          lineHeight: lineHeight,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

export default Typography;
