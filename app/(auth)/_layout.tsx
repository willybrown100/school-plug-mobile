import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="createProfile" />
      <Stack.Screen options={{ headerShown: false }} name="signIn" />
      <Stack.Screen options={{ headerShown: false }} name="uploadPic" />
      <Stack.Screen options={{ headerShown: false }} name="forgotPassword" />
      <Stack.Screen options={{ headerShown: false }} name="verifyEmail" />
      <Stack.Screen options={{ headerShown: false }} name="createNewPassword" />
      <Stack.Screen
        options={{ headerShown: false }}
        name="passwordSucesssful"
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
