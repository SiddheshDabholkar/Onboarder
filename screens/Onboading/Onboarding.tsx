import React from "react";
import { StyleSheet, View } from "react-native";
import { OnboardingScreenType } from "./Onboarding.type";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import Page from "./components/Page";
import { data } from "./data";

const Onboarding: React.FC<OnboardingScreenType> = () => {
  const translateY = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler(
    (e) => (translateY.value = e.contentOffset.y)
  );

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
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
