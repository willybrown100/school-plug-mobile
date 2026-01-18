import { Colors } from "@/constants/Colors";

import { PressableScale } from "pressto";

import React, { useEffect, useRef } from "react";

import { truncateText } from "@/utils";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Typography from "../Typography";

type props = {
  tabList: { label: string; value: number; image?: string }[];

  selectedTab: number;

  setSelectedTab: (value: number) => void;

  activeBgColor?: string;

  unactiveBgColor?: string;

  otherStyles?: any;

  activeBorderColor?: any;

  isCheck?: boolean;

  contentContainerStyle?: any;

  showCartIconForAll?: boolean;
};

const AppTabs = ({
  tabList,

  selectedTab,

  setSelectedTab,

  activeBgColor = "#DCE7F9",

  unactiveBgColor = "#FFF",

  otherStyles,

  contentContainerStyle,

  isCheck = false,
}: props) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const tabLayouts = useRef<{ x: number; width: number }[]>([]);

  const scrollViewWidth = useRef<number>(Dimensions.get("window").width);

  const hasInitialScrolled = useRef(false);

  const handleTabLayout = (index: number, x: number, width: number) => {
    tabLayouts.current[index] = { x, width };
  };

  const handleScrollViewLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;

    scrollViewWidth.current = width;
  };

  const centerTab = (index: number, animated: boolean = true) => {
    const layout = tabLayouts.current[index];

    if (!layout || !scrollViewRef.current) {
      return;
    }

    // Get the viewport width (ScrollView container width)

    const viewportWidth = scrollViewWidth.current;

    // The x from onLayout is relative to ScrollView content container

    // Calculate the center point of the tab

    const tabCenter = layout.x + layout.width / 2;

    // Calculate the center of the visible viewport

    const viewportCenter = viewportWidth / 2;

    // Calculate scroll position to center the tab

    // We want: tabCenter - scrollPosition = viewportCenter

    // So: scrollPosition = tabCenter - viewportCenter

    let scrollToX = tabCenter - viewportCenter;

    // Ensure we have valid scroll values (can't scroll negative)

    scrollToX = Math.max(0, scrollToX);

    // Scroll to center the tab with smooth animation

    scrollViewRef.current.scrollTo({
      x: scrollToX,

      animated: animated,
    });
  };

  useEffect(() => {
    const selectedIndex = tabList.findIndex(
      (item) => item.value === selectedTab
    );

    if (selectedIndex !== -1) {
      // Function to attempt centering

      const attemptCenter = () => {
        const layout = tabLayouts.current[selectedIndex];

        if (layout?.width && layout?.x !== undefined && scrollViewRef.current) {
          const shouldAnimate = hasInitialScrolled.current;

          centerTab(selectedIndex, shouldAnimate);

          hasInitialScrolled.current = true;

          return true;
        }

        return false;
      };

      // Try immediately if layout is available

      if (attemptCenter()) {
        return;
      }

      // If layout not available, use multiple attempts with increasing delays

      let attempts = 0;

      const maxAttempts = 5;

      const tryCenter = () => {
        attempts++;

        if (attemptCenter() || attempts >= maxAttempts) {
          return;
        }

        // Retry with increasing delays

        setTimeout(tryCenter, 100 * attempts);
      };

      const timeoutId = setTimeout(tryCenter, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedTab, tabList]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      style={[styles.tabContainer, { flexGrow: 0 }]}
      contentContainerStyle={[contentContainerStyle, { flexGrow: 0 }]}
      showsHorizontalScrollIndicator={false}
      onLayout={handleScrollViewLayout}
    >
      {tabList?.map((item, idx) => (
        <View
          key={idx}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;

            handleTabLayout(idx, x, width);

            // Center the selected tab when its layout is measured

            if (item.value === selectedTab) {
              // Use requestAnimationFrame to ensure layout is complete

              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  centerTab(idx, hasInitialScrolled.current);

                  hasInitialScrolled.current = true;
                });
              });
            }
          }}
          collapsable={false}
        >
          <PressableScale
            style={[
              styles.tab,

              otherStyles,
              {
                marginRight: 16,
                paddingVertical: 10,
                paddingHorizontal: 12,
                backgroundColor:
                  item.value === selectedTab ? activeBgColor : unactiveBgColor,
              },
            ]}
            onPress={() => setSelectedTab(item.value)}
          >
            <View
              className="flex-row "
              style={{
                paddingHorizontal: item.label.toLowerCase() === "all" ? 12 : 4,
                gap: item.label.toLowerCase() === "all" ? 6 : 16,
              }}
            >
              {/* {item.label.toLowerCase() === 'all' && showCartIconForAll ? (
								<CartIconFill />
							) : item.image ? (
								<Image

									source={{ uri: item.image }}

									className="h-5 w-5 rounded-full"

									style={{ borderRadius: 9999, overflow: 'hidden' }}

									resizeMode="cover"

								/>
							) : null} */}

              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: Colors.black.dark,
                  textTransform: "capitalize",
                }}
              >
                {truncateText(item.label, 20)}
              </Typography>
            </View>
          </PressableScale>
        </View>
      ))}
    </ScrollView>
  );
};

// Styles

const styles = StyleSheet.create({
  tabContainer: {
    width: "100%",
    height: 44, // Constrain the height!
  },

  tab: {
    borderRadius: 300,
    paddingVertical: 6, // Keep it compact
    paddingHorizontal: 12,
    justifyContent: "center",
  },
});

export default AppTabs;
