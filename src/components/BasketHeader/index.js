import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const BasketHeader = () => {
  return (
    <View style={styles.basketContainer}>
      <FontAwesome6 name="basket-shopping" size={20} color="black" />
    </View>
  );
};

export default BasketHeader;

const styles = StyleSheet.create({
  basketContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderRadius: 25,
    height: 40,
    width: 40,
    marginLeft: "auto",
  },
});
