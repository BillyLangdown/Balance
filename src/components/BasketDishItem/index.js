import { View, Text, StyleSheet } from "react-native";
import { Card } from "../ui";
import { colors, radius, spacing } from "../../theme";

export default function BasketDishItem({ basketDish }) {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{basketDish.quantity}</Text>
        </View>
        <Text style={styles.dishName}>{basketDish.dish.name}</Text>
        <Text style={styles.price}>${basketDish.totalPrice}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    marginRight: spacing.md,
  },
  quantityText: {
    color: colors.text,
    fontWeight: "700",
  },
  dishName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    color: colors.textSecondary,
    fontWeight: "600",
  },
});
