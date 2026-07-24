import { View, FlatList, StyleSheet } from "react-native";
import orders from "../../../../assets/data/orders.json";
import OrderListItem from "../../OderListItem";
import { colors, spacing } from "../../../theme";

const Orders = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.bg,
    paddingTop: 64,
  },
  list: {
    paddingHorizontal: spacing.lg,
  },
});
