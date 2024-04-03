import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Basket from "../Basket";
import basketContext from "../../../contexts/basketContext";

export default function DishDetails({ route }) {
  const { dish } = route.params;
  const { basket, setBasket } = useContext(basketContext);

  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    const total = (dish.price * quantity).toFixed(2);

    return total;
  };

  const onAdd = () => {
    const newItem = {
      dish: dish,
      quantity: quantity,
      totalPrice: getTotal(),
    };

    const newBasket = [...basket, newItem];
    setBasket(newBasket);
    navigation.navigate(Basket);
  };

  return (
    <View style={styles.page}>
      <Image source={{ uri: dish.image }} style={styles.image} />

      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={55}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}> {quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={55}
          color={"black"}
          onPress={onPlus}
        />
      </View>

      <Pressable onPress={() => onAdd()} style={styles.button}>
        <Text style={styles.buttonText}>
          {" "}
          Add {quantity} to basket &#8226; (${getTotal()})
        </Text>
      </Pressable>
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
    fontSize: 30,
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
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  description: {
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: "500",
  },
});
