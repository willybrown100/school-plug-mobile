import FormField from "@/components/FormField";
import GradientPageHeader from "@/components/GradientPageHeader";
import MailIcon from "@/components/icons/MailIcon";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { Link, router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ForgotPassword = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    router.push("/(auth)/createProfile");
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
            subtitle="Enter email address"
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
                placeholder="Johns***@**.com"
                name="email"
                prefixIcon={<MailIcon />}
                label="Email address"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
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
              <Link
                href="/"
                style={{ color: "#174489", fontSize: 14, fontWeight: "600" }}
              >
                Sign in instead
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default ForgotPassword;
