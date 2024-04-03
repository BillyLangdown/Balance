import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BasketHeader = () => {
  const navigator = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigator.navigate("Basket");
      }}
      style={styles.basketContainer}
    >
      <FontAwesome6 name="basket-shopping" size={20} color="black" />
    </Pressable>
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
