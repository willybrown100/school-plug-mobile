import { Redirect } from "expo-router";

export default function Index() {
  // Automatically redirect to the home tab
  return <Redirect href="/(tabs)/home" />;
}
