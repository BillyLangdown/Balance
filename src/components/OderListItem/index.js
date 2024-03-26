import { View, Text, StyleSheet, Image } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.row}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.orderTitle}>{order.Restaurant.name}</Text>
        <Text style={styles.orderBody}>3 items $32.40</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  orderTitle: {
    fontWeight: "600",
    fontSize: 16,
  },
  orderBody: {
    marginVertical: 5,
  },
});

export default OrderListItem;
