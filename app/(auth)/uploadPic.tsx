import GradientPageHeader from "@/components/GradientPageHeader";
import GalleryIcon from "@/components/icons/GalleryIcon";
import PersonIconBlue from "@/components/icons/PersonIconBlue";
import AppButton from "@/components/ui/AppButton";
import Wrapper from "@/components/Wrapper";
import { Image } from "expo-image";
import { router } from "expo-router";
import { PressableScale } from "pressto";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import showToast, { globalProfileImage } from "../../utils";

const UploadPic = () => {
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelect = async (mode: "gallery" | "camera") => {
    console.log("[handleSelect] Tapped mode:", mode);
    try {
      const result = await globalProfileImage(mode);
      console.log("[handleSelect] Result received:", !!result);

      if (
        result &&
        !result.canceled &&
        result.assets &&
        result.assets.length > 0
      ) {
        const selectedUri = result.assets[0].uri;
        console.log("[handleSelect] Image URI:", selectedUri);
        setImageUri(selectedUri);

        try {
          setLoading(true);
          // Future: upload logic
        } catch (err: any) {
          console.error("[handleSelect] Upload error:", err);
          showToast("error", err.message || "Failed to upload image");
        } finally {
          setLoading(false);
        }
      } else {
        console.log("[handleSelect] Cancelled or no result");
      }
    } catch (err: any) {
      console.error("[handleSelect] Caught error:", err);
      showToast("error", err.message || "Failed to select image");
      setLoading(false);
    }
  };

  const onContinue = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <Wrapper>
      <GradientPageHeader
        icon={<GalleryIcon />}
        style={{ marginTop: 0 }}
        subtitle="Add a photo to look unique"
      />

      <View
        style={{ flex: 1, justifyContent: "space-between", paddingBottom: 20 }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <PressableScale
            onPress={() => handleSelect("gallery")}
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              borderWidth: 1,
              borderColor: "#B8CFF3",
              borderStyle: "dashed",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#B8CFF3",
              //   overflow: "hidden",
            }}
          >
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <PersonIconBlue />
            )}
          </PressableScale>
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
          <AppButton title="Continue" onPress={onContinue} width={191} />
        </View>
      </View>
    </Wrapper>
  );
};

export default UploadPic;

const styles = StyleSheet.create({});
