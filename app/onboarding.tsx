import Typography from "@/components/Typography";
import AppButton from "@/components/ui/AppButton";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/onboard.png")}
        style={{ marginHorizontal: "auto", marginTop: 56 }}
      />
      <LinearGradient
        colors={["#B8CFF3", "#FAFAFA"]}
        style={{
          flex: 1,
          marginTop: 76,
          margin: 10,
          flexDirection: "column",
          borderRadius: 28,
          rowGap: 16,
        }}
      >
        <Typography
          color={Colors.black.main}
          weight="500"
          size={24}
          style={{ marginTop: 18 }}
          align="center"
        >
          Welcome to SchoolPlug
        </Typography>
        <View style={{ marginTop: 10, flexDirection: "column", rowGap: 6 }}>
          <Typography
            color={Colors.black.main}
            weight="400"
            size={18}
            align="center"
          >
            Get all school gist, updates and easy
          </Typography>
          <Typography
            color={Colors.black.main}
            weight="400"
            size={18}
            align="center"
          >
            school bill payment all in here.{" "}
          </Typography>
        </View>
        <AppButton
          title="Get Started"
          onPress={() => router.push("/(auth)")}
          width={200}
          style={{
            marginHorizontal: "auto",
            marginTop: 26,
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
