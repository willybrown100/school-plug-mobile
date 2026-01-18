import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker";
import { Alert, Linking } from "react-native";
import Toast from "react-native-toast-message";

export const globalProfileImage = async (mode: "gallery" | "camera") => {
  let result: ImagePickerResult;

  try {
    console.log(`[globalProfileImage] Started in ${mode} mode`);

    if (mode === "gallery") {
      console.log("[globalProfileImage] Checking gallery permissions...");
      const { status: currentStatus } =
        await ImagePicker.getMediaLibraryPermissionsAsync();
      console.log("[globalProfileImage] Current gallery status:", currentStatus);

      let finalStatus = currentStatus;

      if (currentStatus !== "granted") {
        console.log("[globalProfileImage] Requesting gallery permissions...");
        const { status: requestedStatus } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        finalStatus = requestedStatus;
        console.log("[globalProfileImage] Requested gallery status:", finalStatus);
      }

      if (finalStatus !== "granted") {
        console.warn("[globalProfileImage] Gallery permission denied");
        Alert.alert(
          "Permission Required",
          "Gallery permission is required to select images. Please enable it in your device settings.",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Open Settings",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
        return null;
      }

      console.log("[globalProfileImage] Launching library...");
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });
      console.log("[globalProfileImage] Library launched, result received");
    } else {
      console.log("[globalProfileImage] Checking camera permissions...");
      const { status: currentStatus } =
        await ImagePicker.getCameraPermissionsAsync();
      console.log("[globalProfileImage] Current camera status:", currentStatus);

      let finalStatus = currentStatus;

      if (currentStatus !== "granted") {
        console.log("[globalProfileImage] Requesting camera permissions...");
        const { status: requestedStatus } =
          await ImagePicker.requestCameraPermissionsAsync();
        finalStatus = requestedStatus;
        console.log("[globalProfileImage] Requested camera status:", finalStatus);
      }

      if (finalStatus !== "granted") {
        console.warn("[globalProfileImage] Camera permission denied");
        Alert.alert(
          "Permission Required",
          "Camera permission is required to take photos. Please enable it in your device settings.",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Open Settings",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
        return null;
      }

      console.log("[globalProfileImage] Launching camera...");
      result = await ImagePicker.launchCameraAsync({
        cameraType: "front" as any,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });
      console.log("[globalProfileImage] Camera launched, result received");
    }

    if (result.canceled) {
      console.log("[globalProfileImage] User cancelled");
      return null;
    }

    console.log("[globalProfileImage] Image successfully selected");
    return result;
  } catch (error: any) {
    console.error("[globalProfileImage] CRITICAL ERROR:", error);
    Alert.alert(
      "Error",
      "Failed to access image library. Please try again.",
      [{ text: "OK" }]
    );
    return null;
  }
};

type ToastType = "success" | "error";
export const showToast = (type: ToastType, message: string, title?: string) => {
  Toast.show({
    type: type,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 50,
    text1: title || message,
    text2: title ? message : undefined,
  });
};

export default showToast;
export const truncateText = (text: string, maxLength: number) => {
	if (text?.length <= maxLength) {
		return text;
	}

	return text?.substring(0, maxLength) + "...";
};
