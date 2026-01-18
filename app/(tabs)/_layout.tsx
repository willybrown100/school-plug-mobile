import HomeIcon from "@/components/icons/HomeIcon";
import MoreIcon from "@/components/icons/MoreIcon";
import NotificationBell from "@/components/icons/NotificationBell";
import SearchIcon from "@/components/icons/SearchIcon";
import Wallet from "@/components/icons/Wallet";
import { TabBarProvider, useTabBar } from "@/context/TabBarContext";
import { Tabs } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedTabs = () => {
  const { translateY } = useTabBar();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2B70DB",
          tabBarInactiveTintColor: "#565656",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Inter-Regular",
            fontWeight: "600",
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            shadowOffset: { height: 0, width: 0 },
            shadowRadius: 0,
            height: 60 + insets.bottom,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
        // We use a custom wrapper to animate the tab bar
        tabBar={(props) => (
          <Animated.View
            style={[
              styles.tabBarContainer,
              animatedStyle,
              { height: 60 + insets.bottom, paddingBottom: insets.bottom },
            ]}
          >
            {props.state.routes.map((route, index) => {
              const { options } = props.descriptors[route.key];
              const label =
                options.title !== undefined ? options.title : route.name;
              const isFocused = props.state.index === index;

              const onPress = () => {
                const event = props.navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  props.navigation.navigate(route.name);
                }
              };

              const color = isFocused ? "#2B70DB" : "#565656";

              const Icon = () => {
                if (route.name === "home")
                  return <HomeIcon focused={isFocused} color={color} />;
                if (route.name === "search")
                  return <SearchIcon focused={isFocused} color={color} />;
                if (route.name === "wallet")
                  return <Wallet focused={isFocused} color={color} />;
                if (route.name === "notification")
                  return <NotificationBell focused={isFocused} color={color} />;
                if (route.name === "more")
                  return <MoreIcon focused={isFocused} color={color} />;
                return null;
              };

              return (
                <Pressable
                  key={route.key}
                  onPress={onPress}
                  style={styles.tabItem}
                >
                  <Icon />
                  <Text
                    style={[
                      styles.tabLabel,
                      { color, fontWeight: isFocused ? "700" : "600" },
                    ]}
                  >
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </Animated.View>
        )}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Wallet",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name=" more"
          options={{
            title: "More",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "Notification",
            headerShown: false,
          }}
        />
      </Tabs>
    </View>
  );
};

const Layout = () => {
  return (
    <TabBarProvider>
      <AnimatedTabs />
    </TabBarProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    fontFamily: "Inter-Regular",
  },
});
