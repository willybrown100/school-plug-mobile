import Congrat from "@/assets/svgs/congrat.svg";
import GradientPageHeader from "@/components/GradientPageHeader";
import Typography from "@/components/Typography";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
const PasswordSucesssful = () => {
  return (
    <Wrapper>
      <GradientPageHeader
        title="Password reset successful"
        height={100}
        subtitle="Password created"
      />
      <View className="flex-1 justify-center items-center">
        <View className=" flex-1 flex justify-center items-center">
          <Congrat />
          <Typography
            align="center"
            size={16}
            style={{ marginTop: 12 }}
            weight="400"
            color={Colors.black.light}
          >
            To always remember your password,
          </Typography>
          <Typography
            align="center"
            size={16}
            weight="400"
            color={Colors.black.light}
          >
            you can write it down and save it.
          </Typography>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <AppButton
            title="Go back to Sign in"
            onPress={() => router.replace("/(auth)/signIn")}
            showIcon={false}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default PasswordSucesssful;

const styles = StyleSheet.create({});
