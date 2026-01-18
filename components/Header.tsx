import Avatar from "@/assets/svgs/avatar.svg";
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";
import Message from "./icons/Message";
const Header = () => {
  return (
    <View className="bg-white pb-2 px-4">
      <View className="flex-row items-center justify-between">
        <Avatar />
        <Typography color="#2B70DB" size={18} weight="700">
          SchoolPlug
        </Typography>
        <View>
          <Message />
          <View
            style={{ backgroundColor: Colors.error, borderRadius: 50 }}
            className="rounded-full  absolute right-[2.667px] top-[-7.667px] w-5 h-5 items-center justify-center"
          >
            <Typography color="#fff" size={10} weight="400">
              0
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
