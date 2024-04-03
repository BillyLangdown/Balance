import { StyleSheet, Text, View } from "react-native";

const EmptyBasket = () => {
  return (
    <View>
      <Text style={styles.emptyBasketMessage}>Your basket is empty.</Text>
    </View>
  );
};

export default EmptyBasket;

const styles = StyleSheet.create({
  emptyBasketMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
