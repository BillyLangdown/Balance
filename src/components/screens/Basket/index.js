import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../../assets/data/restaurants.json";
const restaurant = restaurants[0];
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../BasketDishItem";

export default function Basket() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name} </Text>
      <Text style={styles.subtitle}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}> Create order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 20,
  },
  price: {
    marginLeft: "auto",
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 2,
    paddingHorizontal: 5,
    marginRight: 10,
  },

  dishName: {
    fontSize: 15,
    fontWeight: "600",
  },
});
