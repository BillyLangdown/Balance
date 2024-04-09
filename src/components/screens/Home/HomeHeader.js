import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BasketHeader from "../../BasketHeader";

const HomeHeader = () => {
  return (
    <LinearGradient
      colors={["#3C4142", "#f2f2f2"]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 1]}
    >
      <View style={styles.content}>
        <Text style={styles.title}> balance </Text>
        <View style={styles.subtitleBox}>
          <Text style={styles.subtitle}>nutrition made easy</Text>
        </View>
      </View>
      <View style={styles.basketHeaderContainer}>
        <BasketHeader />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    height: 200,
  },
  content: {
    paddingTop: 60,
    marginEnd: "auto",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FAF9F6",
  },
  subtitle: {
    color: "black",
    padding: 4,
  },
  subtitleBox: {
    backgroundColor: "orange",
    paddingLeft: 40,
    paddingRight: 15,
    marginRight: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  basketHeaderContainer: {
    paddingTop: 100,
    marginRight: 20,
  },
});

export default HomeHeader;
