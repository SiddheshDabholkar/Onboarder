import Animated from "react-native-reanimated";
import type { dataType } from "./../../data";

export type PageType = {
  data: dataType;
  index: number;
  translateY: Animated.SharedValue<number>;
};
