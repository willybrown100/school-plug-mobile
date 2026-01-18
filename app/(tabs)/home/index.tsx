import FloatingActionButton from "@/components/FloatingActionButton";
import Header from "@/components/Header";
import Typography from "@/components/Typography";
import AppTabs from "@/components/ui/AppTabs";
import Wrapper from "@/components/Wrapper";
import { useTabBarScroll } from "@/hooks/useTabBarScroll";
import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

const DATA = [...Array(40)].map((_, i) => ({
  id: i.toString(),
  title: `Post #${i + 1}`,
}));
const tabList = [
  { label: "Nnamdi Azikiwe University Awka", value: 0 },
  { label: "Trends", value: 1 },
  { label: "Announcement", value: 2 },
];
const Home = () => {
  const scrollProps = useTabBarScroll();
  const TypedFlashList = FlashList as any;
  const [visible, setVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  // Filter or switch data based on selectedTab
  const getFilteredData = () => {
    switch (selectedTab) {
      case 0:
        return DATA.map((item) => ({
          ...item,
          title: `Unizik Post #${item.id}`,
        }));
      case 1:
        return DATA.slice(0, 10).map((item) => ({
          ...item,
          title: `Trending Topic #${item.id}`,
        }));
      case 2:
        return DATA.slice(0, 5).map((item) => ({
          ...item,
          title: `Announcement #${item.id}`,
        }));
      default:
        return DATA;
    }
  };

  const filteredData = getFilteredData();

  return (
    <Wrapper paddingH={0}>
      <View style={{ marginBottom: 24 }}>
        <Header />
      </View>

      <AppTabs
        tabList={tabList}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TypedFlashList
        data={filteredData}
        onScroll={scrollProps.onScroll}
        scrollEventThrottle={scrollProps.scrollEventThrottle}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Typography weight="600">{item.title}</Typography>
            <Typography size={14} color="#666" style={{ marginTop: 8 }}>
              Content for {tabList[selectedTab].label}. This updates dynamically
              when you switch tabs!
            </Typography>
          </View>
        )}
        keyExtractor={(item: any) => item.id}
        estimatedItemSize={120}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={() => (
          <Typography
            color="#333"
            size={32}
            weight="700"
            style={{ marginTop: 24, marginBottom: 10 }}
          >
            {tabList[selectedTab].label}
          </Typography>
        )}
      />
      <FloatingActionButton onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.absoluteFill}
            onPress={() => setVisible(false)}
          />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Typography weight="700" size={22} color="#1A1A1A">
                New Announcement
              </Typography>
            </View>

            <Typography
              style={{ marginTop: 16, textAlign: "center", lineHeight: 22 }}
              color="#666"
            >
              This is a custom designed modal with a semi-transparent overlay.
              You can tap outside this box or use the button below to close it.
            </Typography>

            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Typography color="#fff" weight="600">
                Got it!
              </Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Wrapper>
  );
};

export default Home;

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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalHeader: {
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: "#1288FC",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 24,
    width: "100%",
    alignItems: "center",
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
});
