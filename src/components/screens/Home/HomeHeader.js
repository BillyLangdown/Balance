import { View, Text, StyleSheet, Pressable } from "react-native";
import BasketHeader from "../../BasketHeader";

const HomeHeader = () => {
  return (
    <View style={styles.row}>
      <View style={styles.header}>
        <Text style={styles.title}> balance </Text>
        <Text style={styles.subtitle}>nutrition made easy</Text>
      </View>
      <View style={styles.basketHeaderContainer}>
        <BasketHeader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    marginTop: 60,
    marginBottom: 10,
    alignItems: "center",
    marginRight: 55,
  },
  image: {
    width: "100%",
    height: 150,

    aspectRatio: 5 / 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    color: "orange",
    marginRight: 100,
  },
  basketHeaderContainer: {
    paddingTop: 50,
  },
});

export default HomeHeader;
