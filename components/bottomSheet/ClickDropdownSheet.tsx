import { Colors } from "@/constants/Colors";
// import FastImage from '@d11/react-native-fast-image';
import { Feather } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "../Typography";

interface ClickDropdownSheetProps {
  title?: string;
  onClick?: () => void;
  selectedVal: any;
  bgColor: any;
  textColor?: any;
  mgTop?: any;
  textIcon?: ReactNode;
  flag?: string | null;
  showIcon?: boolean;
  type?: string;
  surfixIcon?: any;
  bgStyle?: string;
  titleColor?: string;
  placeholder?: string;
}

const ClickDropdownSheet: React.FC<ClickDropdownSheetProps> = ({
  title,
  onClick,
  selectedVal,
  showIcon = true,
  bgColor,
  mgTop,
  titleColor,
  textIcon,
  type,
  flag,
  placeholder = "Select group",
  textColor = "rgba(236, 236, 236, .2)",
  surfixIcon,
}) => {
  const icon = surfixIcon ?? (
    <Feather name="chevron-down" size={24} color={Colors.gray.medium} />
  );
  const isPlaceholder = selectedVal === placeholder;
  return (
    <View style={{ marginTop: mgTop }}>
      <View className="flex-row gap-x-2 pl-2.5">
        {textIcon && textIcon}
        <Typography
          size={12}
          weight="400"
          color={titleColor ? titleColor : Colors.black.dark}
        >
          {title}
        </Typography>
      </View>
      <TouchableOpacity
        onPress={onClick}
        style={{
          backgroundColor: bgColor,
          flexDirection: "row",
          height: 48,
          paddingHorizontal: 20,
          marginTop: 5,
          borderColor: Colors.gray.medium,
          borderWidth: 1,
          borderRadius: 12,
        }}
        className="flex-row justify-between items-center h-16 rounded-full px-5 mt-2"
      >
        <View className="flex-row gap-x-2 items-center">
          {type === "country" && !flag && (
            <View
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: Colors.gray.medium2 }}
            />
          )}
          {flag && (
            <Image
              source={{ uri: flag }}
              style={{ width: 24, height: 24, borderRadius: 12 }}
            />
          )}
          <Typography
            numberOfLines={1}
            color={isPlaceholder ? textColor : "#fff"}
            size={16}
            weight="500"
          >
            {selectedVal != null ? String(selectedVal) : placeholder}
          </Typography>
        </View>
        {showIcon && icon}
      </TouchableOpacity>
    </View>
  );
};

export default ClickDropdownSheet;
