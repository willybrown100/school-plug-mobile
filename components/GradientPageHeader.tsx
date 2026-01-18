import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Typography from "./Typography";

const GradientPageHeader = ({
  title,
  subtitle,
  subtitle2,
  icon,
  style,
  height = 150,
}: {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  height?: number;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <LinearGradient
      colors={["#DCE7F9", "#FAFAFA"]}
      style={{
        height: height,
        borderRadius: 28,

        marginTop: 12,
      }}
    >
      {icon && (
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
      )}
      {title && (
        <Typography
          align="center"
          style={{ paddingTop: 12 }}
          color={Colors.gray.medium}
        >
          {title}
        </Typography>
      )}
      <View style={[{ paddingTop: 16 }, style]}>
        {subtitle && (
          <Typography
            align="center"
            size={20}
            weight="500"
            color={Colors.black.light}
          >
            {subtitle}
          </Typography>
        )}
        {subtitle2 && (
          <Typography
            align="center"
            size={20}
            weight="500"
            color={Colors.black.light}
          >
            {subtitle2}
          </Typography>
        )}
      </View>
    </LinearGradient>
  );
};

export default GradientPageHeader;

const styles = StyleSheet.create({});
