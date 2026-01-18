import FormField from "@/components/FormField";
import GradientPageHeader from "@/components/GradientPageHeader";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const VerifyEmail = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    router.push("/(auth)/createNewPassword");
    console.log("Form Data:", data);
  };

  return (
    <Wrapper>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        accessible={false}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <GradientPageHeader
            title="Sorry you forgot your password "
            height={100}
            subtitle="Verify email address"
          />
          <View
            style={{
              marginTop: 64,
              flex: 1,
              justifyContent: "space-between",

              paddingBottom: 20,
            }}
          >
            <View>
              <FormField
                placeholder="Enter code"
                name="email"
                keyboardType="numeric"
                showDoneIcon={true}
                label="Enter 4 digit code sent to email@gmail.com"
                control={control}
                rules={{
                  required: "Verification code is required",
                  pattern: {
                    value: /^[0-9]{4}$/i,
                    message: "Invalid verification code",
                  },
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 12,
              }}
            >
              <AppButton
                title="Continue"
                onPress={handleSubmit(onSubmit)}
                width={191}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default VerifyEmail;
