import { ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

export type dataType = {
  id: number;
  name: string;
  img: Animated.Node<ImageSourcePropType> | ImageSourcePropType;
};

export const data: dataType[] = [
  { id: 1, name: "Attack on Titan", img: require("../../assets/levi.png") },
  {
    id: 1,
    name: "Love, Chunibyo & Other Delusions",
    img: require("../../assets/love.png"),
  },
  { id: 1, name: "Jujutsu Kaisen", img: require("../../assets/Nobara.png") },
  { id: 1, name: "Naruto", img: require("../../assets/sasuke.png") },
  {
    id: 1,
    name: "Demon Slayer: Kimetsu no Yaiba",
    img: require("../../assets/shinobu.png"),
  },
];
