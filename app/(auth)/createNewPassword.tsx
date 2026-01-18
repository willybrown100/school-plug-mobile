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

const CreateNewPassword = () => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = () => {
    router.replace("/(auth)/signIn");
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
            title="Create new password"
            height={100}
            subtitle="Now create a new password"
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
                placeholder="New password"
                name="password"
                type="password"
                label="New password"
                control={control}
                showDoneIcon={true}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
                    message:
                      "Password must include at least one special character",
                  },
                }}
              />
              <FormField
                placeholder="Confirm new password"
                name="confirmPassword"
                type="password"
                viewStyle={{ marginTop: 18 }}
                label="Confirm new password"
                control={control}
                showDoneIcon={true}
                rules={{
                  required: "Please confirm your password",
                  validate: (value: string) =>
                    value === password || "The passwords do not match",
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
                title="Reset password"
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

export default CreateNewPassword;
