import { StyleSheet, Text, View } from "react-native";
import { HomeScreenType } from "./Home.type";
import React from "react";

const Home: React.FC<HomeScreenType> = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
