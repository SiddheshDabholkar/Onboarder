import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DotsType } from "./Dot.type";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { height } = Dimensions.get("screen");

const Dots: React.FC<DotsType> = ({ translateY, index }) => {
  const inputRange = [
    (index - 1) * height,
    index * height,
    (index + 1) * height,
  ];

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateY.value / height);
  });

  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    const height = interpolate(
      translateY.value,
      inputRange,
      [16, 35, 16],
      Extrapolate.CLAMP
    );
    return {
      backgroundColor: isActive ? "black" : "white",
      height,
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
};

export default Dots;

const styles = StyleSheet.create({
  dot: {
    width: 16,
    margin: 1,
    borderRadius: 8,
    marginHorizontal: 2,
    borderWidth: 1,
  },
});
