import { View, Text, StyleSheet, Image } from "react-native";
import balance from "../../../../assets/balance.png";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> balance </Text>
      <Text style={styles.subtitle}>nutrition made easy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    marginTop: 60,
    alignItems: "center",
    marginRight: 90,
  },
  image: {
    width: "100%",
    height: 150,

    aspectRatio: 5 / 3,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    color: "orange",
    marginRight: 100,
  },
});

export default HomeHeader;
