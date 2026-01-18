import ClickDropdownSheet from "@/components/bottomSheet/ClickDropdownSheet";
import FormField from "@/components/FormField";
import GradientPageHeader from "@/components/GradientPageHeader";
import DropDownIcon from "@/components/icons/DropDownIcon";
import ThumbsUp from "@/components/icons/ThumbsUp";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CreateProfile = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: any) => {
    router.push("/(auth)/uploadPic");
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
            icon={<ThumbsUp />}
            style={{ marginTop: 0 }}
            subtitle="Now let’s create your profile"
          />
          <View
            style={{ marginTop: 20, flex: 1, justifyContent: "space-between" }}
          >
            <View style={{ rowGap: 14 }}>
              <FormField
                name="fullName"
                placeholder="Full Name"
                control={control}
                label="Full Name"
              />
              <FormField
                name="Username"
                placeholder="Username"
                control={control}
                label="Username"
              />
              <ClickDropdownSheet
                onClick={() => {}}
                title="University/Institution"
                showIcon={true}
                bgColor={"transparent"}
                selectedVal={""}
                placeholder="Select"
                surfixIcon={<DropDownIcon />}
              />{" "}
              <ClickDropdownSheet
                onClick={() => {}}
                title="Faculty"
                showIcon={true}
                bgColor={"transparent"}
                selectedVal={""}
                placeholder="Faculty"
                surfixIcon={<DropDownIcon />}
              />{" "}
              {/* <FormField name="Faculty" control={control} label="Faculty" /> */}
              <FormField
                name="Department"
                placeholder="Department"
                control={control}
                label="Department"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              rowGap: 12,
              paddingBottom: 20,
            }}
          >
            <AppButton
              title="Create account"
              onPress={handleSubmit(onSubmit)}
              width={191}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({});
