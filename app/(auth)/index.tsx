import FormField from "@/components/FormField";
import GradientPageHeader from "@/components/GradientPageHeader";
import MailIcon from "@/components/icons/MailIcon";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { Link, router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";

const index = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    router.push("/(auth)/createProfile");
    console.log("Form Data:", data);
  };

  return (
    <Wrapper>
      <GradientPageHeader
        title="Welcome to SchoolPlug"
        subtitle="Sign up to see what other"
        subtitle2="students are enjoying"
      />
      <View
        style={{
          marginTop: 34,
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
          <FormField
            placeholder="Create password"
            name="password"
            type="password"
            viewStyle={{ marginTop: 18 }}
            label="Create password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
                message: "Password must include at least one special character",
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
            title="Create account"
            onPress={handleSubmit(onSubmit)}
            width={191}
          />
          <Link
            href="/(auth)/signIn"
            style={{ color: "#174489", fontSize: 14, fontWeight: "600" }}
          >
            Sign in instead
          </Link>
        </View>
      </View>
    </Wrapper>
  );
};

export default index;
