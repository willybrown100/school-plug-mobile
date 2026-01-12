import React, { createContext, ReactNode, useContext } from "react";
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface TabBarContextType {
  translateY: SharedValue<number>;
  fabValue: SharedValue<number>; // 1 for visible, 0 for hidden
  setTabBarVisible: (visible: boolean) => void;
}

const TabBarContext = createContext<TabBarContextType | undefined>(undefined);

export const TabBarProvider = ({ children }: { children: ReactNode }) => {
  const translateY = useSharedValue(0);
  const fabValue = useSharedValue(1);

  const setTabBarVisible = (visible: boolean) => {
    translateY.value = withTiming(visible ? 0 : 100, { duration: 300 });
    fabValue.value = withTiming(visible ? 1 : 0, { duration: 300 });
  };

  return (
    <TabBarContext.Provider value={{ translateY, fabValue, setTabBarVisible }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error("useTabBar must be used within a TabBarProvider");
  }
  return context;
};
