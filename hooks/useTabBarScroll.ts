import { useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useTabBar } from '../context/TabBarContext';

export const useTabBarScroll = () => {
  const { setTabBarVisible } = useTabBar();
  const lastOffset = useRef(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > lastOffset.current ? 'down' : 'up';

    if (currentOffset <= 0) {
      setTabBarVisible(true);
    } else if (Math.abs(currentOffset - lastOffset.current) > 10) {
      if (direction === 'down') {
        setTabBarVisible(false);
      } else {
        setTabBarVisible(true);
      }
      lastOffset.current = currentOffset;
    }
  };

  return {
    onScroll,
    scrollEventThrottle: 16,
  };
};
