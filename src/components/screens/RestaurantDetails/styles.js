import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 15,
  },
  bodyContainer: {
    padding: 15,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});
