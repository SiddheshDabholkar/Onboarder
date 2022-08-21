import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { OnboardingScreenType } from "./Onboarding.type";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from "react-native-reanimated";
import Page from "./components/Page";
import { data } from "./data";
import Dot from "./components/Dots/Dot";

const { width } = Dimensions.get("screen");

const Onboarding: React.FC<OnboardingScreenType> = () => {
  const translateY = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler(
    (e) => (translateY.value = e.contentOffset.y)
  );

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateY.value / width);
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal={false}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={ScrollHandler}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((d, i) => (
          <Page data={d} translateY={translateY} index={i} />
        ))}
      </Animated.ScrollView>
      <View style={styles.dots}>
        {data.map((d, i) => (
          <Dot index={i} translateY={translateY} activeIndex={activeIndex} />
        ))}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  dots: {
    position: "absolute",
    left: 20,
    bottom: 50,
  },
});
