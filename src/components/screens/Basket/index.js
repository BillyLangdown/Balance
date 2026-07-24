import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import BasketDishItem from "../../BasketDishItem";
import basketContext from "../../../contexts/basketContext";
import EmptyBasket from "../../EmptyBasket";
import { Button } from "../../ui";
import { colors, spacing, typography } from "../../../theme";

export default function Basket() {
  const { basket } = useContext(basketContext);

  return basket.length === 0 ? (
    <View style={styles.container}>
      <EmptyBasket />
    </View>
  ) : (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={<Text style={styles.orders}>Current order</Text>}
        data={basket}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Button label="Create order" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.bg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  button: {
    marginTop: spacing.md,
  },
  orders: {
    ...typography.h2,
    paddingBottom: spacing.md,
  },
});
