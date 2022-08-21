import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import type { PageType } from "./Page.type";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const Page: React.FC<PageType> = ({ data, translateY, index }) => {
  const inputRange = [
    (index - 1) * height,
    index * height,
    (index + 1) * height,
  ];

  const rImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const height = interpolate(
      translateY.value,
      inputRange,
      [150, 400, 150],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      height,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.Image
          source={data.img}
          resizeMode="contain"
          style={[rImageStyle]}
        />
      </Animated.View>
      <Animated.Text style={[styles.Text, rTextStyle]}>
        {data.name}
      </Animated.Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    top: "65%",
    position: "absolute",
    color: "darkblue",
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center",
  },
});
