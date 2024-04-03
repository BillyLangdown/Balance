import { View, Text, StyleSheet } from "react-native";

export default function BasketDishItem({ basketDish }) {
  console.log(basketDish);
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketDish.quantity}</Text>
      </View>
      <Text style={styles.dishName}>{basketDish.dish.name}</Text>
      <Text style={styles.price}>{basketDish.totalPrice}</Text>
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
    marginTop: 40,
    paddingHorizontal: 10,
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
    fontSize: 20,
    fontWeight: "500",
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
