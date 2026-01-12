import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PressablesConfig } from "pressto";
import { useEffect } from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as Haptics from "expo-haptics";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Inter-Thin": Inter_100Thin,
    "Inter-ExtraLight": Inter_200ExtraLight,
    "Inter-Light": Inter_300Light,
    "Inter-Regular": Inter_400Regular,
    "Inter-Medium": Inter_500Medium,
    "Inter-SemiBold": Inter_600SemiBold,
    "Inter-Bold": Inter_700Bold,
    "Inter-ExtraBold": Inter_800ExtraBold,
    "Inter-Black": Inter_900Black,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

      // ✅ Apply global font (safely bypassing TS)
      if ((Text as any).defaultProps) {
        (Text as any).defaultProps.style = {
          ...((Text as any).defaultProps.style || {}),
          fontFamily: "Inter-Regular",
        };
      } else {
        (Text as any).defaultProps = {
          style: { fontFamily: "Inter-Regular" },
        };
      }
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <PressablesConfig
      globalHandlers={{
        onPress: () => {
          Haptics.selectionAsync();
        },
      }}
    >
      <AppContent />
    </PressablesConfig>
  );
}

const AppContent = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
        <Stack.Screen options={{ headerShown: false }} name="(auth)" />
        <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
};
