import Animated from "react-native-reanimated";

export type DotsType = {
  translateY: Animated.SharedValue<number>;
  // activeIndex: Animated.SharedValue<number>;
  index: number;
};
