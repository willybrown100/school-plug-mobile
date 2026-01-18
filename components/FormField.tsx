import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Typography from "./Typography";
import DoneIcon from "./icons/DoneIcon";
import Eye from "./icons/Eye";
// Define the component's props to ensure type safety.
// These props allow the component to be flexible and reusable.
interface FormFieldProps extends TextInputProps {
  control?: Control<any>;
  name: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  onDispatch?: (value: string) => void;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  otherStyles?: any;
  trigger?: (name: string) => void;
  keyboardType?: KeyboardType;
  maxLength?: number;
  viewStyle?: any;
  type?: "password" | "text";
  textIcon?: React.ReactNode;
  disable?: boolean;
  surfixText?: React.ReactNode;
  onPress?: () => void;
  prefixIcon?: React.ReactNode;
  prefixText?: React.ReactNode;
  backgroundColor?: string;
  placeholderTextColor?: string;
  rules?: RegisterOptions;
  showDoneIcon?: boolean;
}

const FormField = ({
  control,
  name,
  label,
  type,
  disable,
  prefixIcon,
  trigger,
  placeholder,
  showDoneIcon = false,
  secureTextEntry,
  otherStyles,
  keyboardType,
  maxLength,
  onDispatch,
  onPress,
  viewStyle,
  surfixText,
  prefixText,
  autoCapitalize,
  backgroundColor = "transparent",
  placeholderTextColor = "#939393",
  rules,
  textIcon,
  ...rest
}: FormFieldProps) => {
  const [customError, setCustomError] = React.useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";

  return (
    <View style={[{}, viewStyle]}>
      {/* Container for the optional label and icon at the top of the field. */}
      <View
        className="flex-row gap-x-2 items-center"
        style={{ marginBottom: 5, paddingLeft: 10 }}
      >
        {textIcon && textIcon}
        {label && (
          <Typography size={12} weight="400" color={Colors.black.dark}>
            {label}
          </Typography>
        )}
      </View>

      {/* Controller from react-hook-form, which connects the input to the form state. */}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => {
          const maxLengthRule = rules?.maxLength;
          const maxLengthValue =
            typeof maxLengthRule === "object"
              ? maxLengthRule.value
              : maxLengthRule;

          return (
            <>
              {/* Main input container with styling for the text input. */}
              <View
                style={[
                  styles.inputContainer,
                  {
                    backgroundColor,
                    borderColor: "#939393",
                  },
                ]}
              >
                {prefixText && (
                  <Typography
                    size={20}
                    weight="500"
                    color={Colors.gray.medium}
                    style={{ marginRight: 10 }}
                  >
                    {prefixText}
                  </Typography>
                )}
                {prefixIcon && (
                  <View style={{ marginRight: 10 }}>{prefixIcon}</View>
                )}
                <TextInput
                  placeholder={placeholder}
                  autoCapitalize={autoCapitalize}
                  placeholderTextColor={placeholderTextColor}
                  secureTextEntry={isPassword ? !showPassword : secureTextEntry}
                  style={[styles.input, otherStyles]}
                  value={value}
                  editable={!disable}
                  selectionColor="#fff"
                  onPress={onPress}
                  onChangeText={(text) => {
                    // Check if the input exceeds the max length
                    if (maxLengthValue && text.length > maxLengthValue) {
                      // 4. Set the custom error message
                      setCustomError(
                        (rules?.maxLength as any)?.message ||
                          "Maximum length exceeded."
                      );
                      // Do not update the form's value
                      return;
                    } else {
                      // Clear the custom error if the input is valid again
                      setCustomError(null);
                      // Update the form's value
                      onChange(text);
                      onDispatch?.(text);
                    }
                  }}
                  // onBlur={onBlur}
                  onBlur={() => {
                    onBlur();
                    // Also trigger validation on blur
                    if (trigger) {
                      trigger(name);
                    }
                  }}
                  keyboardType={keyboardType || "default"}
                  {...rest}
                />
                {surfixText && (
                  <Typography size={16} weight="500" color={Colors.gray.medium}>
                    {surfixText}
                  </Typography>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  {showDoneIcon && (
                    <DoneIcon
                      stroke={value && !error ? "#07B64A" : "#939393"}
                    />
                  )}
                  {isPassword && (
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={24}
                          color="gray"
                        />
                      ) : (
                        <Eye />
                      )}
                    </Pressable>
                  )}
                </View>
              </View>

              {/* Display the validation error message if an error exists. */}
              {error && (
                <Typography
                  color="#F04438"
                  size={16}
                  weight="500"
                  style={styles.errorMessage}
                >
                  {error.message}
                </Typography>
              )}

              {customError && (
                <Typography
                  color="#F04438"
                  size={16}
                  weight="500"
                  style={styles.errorMessage}
                >
                  {customError}
                </Typography>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 16,
    borderColor: "red",
    borderWidth: 1,

    // paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    color: Colors.black.main,
    fontWeight: "400",
    flex: 1,
    height: 48,
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  errorMessage: {
    marginTop: 5,
  },
});

export default FormField;
