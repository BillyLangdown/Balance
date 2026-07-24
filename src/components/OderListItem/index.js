import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../ui";
import { colors, radius, spacing } from "../../theme";

const OrderListItem = ({ order }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.textBlock}>
          <Text style={styles.orderTitle}>{order.Restaurant.name}</Text>
          <Text style={styles.orderBody}>3 items &#8226; $32.40</Text>
          <Text style={styles.orderMeta}>2 days ago &#8226; {order.status}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    marginRight: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBlock: {
    flex: 1,
  },
  orderTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: colors.text,
  },
  orderBody: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 13,
  },
  orderMeta: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 12,
  },
});

export default OrderListItem;
