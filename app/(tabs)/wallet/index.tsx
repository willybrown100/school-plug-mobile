import Typography from "@/components/Typography";
import { useTabBarScroll } from "@/hooks/useTabBarScroll";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [...Array(30)].map((_, i) => ({
  id: i.toString(),
  title: `Event #${i + 1}`,
}));

const Events = () => {
  const scrollProps = useTabBarScroll();
  const TypedFlashList = FlashList as any;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TypedFlashList
        data={DATA}
        onScroll={scrollProps.onScroll}
        scrollEventThrottle={scrollProps.scrollEventThrottle}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Typography weight="600">{item.title}</Typography>
            <Typography size={14} color="#666" style={{ marginTop: 8 }}>
              Upcoming school events displayed using FlashList.
            </Typography>
          </View>
        )}
        keyExtractor={(item: any) => item.id}
        estimatedItemSize={100}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        ListHeaderComponent={() => (
          <Typography
            color="#333"
            size={32}
            weight="700"
            style={{ marginTop: 24, marginBottom: 10 }}
          >
            Events
          </Typography>
        )}
      />
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
