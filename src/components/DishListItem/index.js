import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DishDetails from "../screens/DishDetails";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("DishDetails", { dish: dish })}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}> {dish.name}</Text>
        <Text style={styles.subtitle}> {dish.description}</Text>
        <Text style={styles.price}> {dish.price}</Text>
      </View>

      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    paddingBottom: 5,
  },
  subtitle: {
    paddingBottom: 5,
    color: "gray",
  },
  price: {
    color: "gray",
  },
  image: {
    height: 75,
    aspectRatio: 1,
    alignSelf: "center",
  },
});
