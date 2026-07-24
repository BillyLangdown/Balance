import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Basket from "../Basket";
import basketContext from "../../../contexts/basketContext";
import { Button, IconButton } from "../../ui";
import { colors, macroColors, radius, spacing, typography } from "../../../theme";

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

      <View style={styles.body}>
        <Text style={typography.h1}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>

        {dish.totalCalories ? (
          <View style={styles.nutritionRow}>
            <View style={styles.nutritionStat}>
              <Text style={[styles.nutritionValue, { color: macroColors.calories }]}>
                {dish.totalCalories}
              </Text>
              <Text style={styles.nutritionLabel}>kcal</Text>
            </View>
            <View style={styles.nutritionStat}>
              <Text style={[styles.nutritionValue, { color: macroColors.protein }]}>
                {dish.protein}g
              </Text>
              <Text style={styles.nutritionLabel}>protein</Text>
            </View>
            <View style={styles.nutritionStat}>
              <Text style={[styles.nutritionValue, { color: macroColors.carbs }]}>
                {dish.carbs}g
              </Text>
              <Text style={styles.nutritionLabel}>carbs</Text>
            </View>
            <View style={styles.nutritionStat}>
              <Text style={[styles.nutritionValue, { color: macroColors.fat }]}>
                {dish.fat}g
              </Text>
              <Text style={styles.nutritionLabel}>fat</Text>
            </View>
          </View>
        ) : null}

        <View style={styles.separator} />
        <View style={styles.row}>
          <IconButton size={56} onPress={onMinus}>
            <AntDesign name="minus" size={22} color={colors.text} />
          </IconButton>
          <Text style={styles.quantity}>{quantity}</Text>
          <IconButton size={56} variant="accent" onPress={onPlus}>
            <AntDesign name="plus" size={22} color={colors.accentText} />
          </IconButton>
        </View>

        <Button
          label={`Add ${quantity} to basket  •  $${getTotal()}`}
          onPress={onAdd}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.bg,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  body: {
    flex: 1,
    padding: spacing.lg,
  },
  description: {
    ...typography.bodyMuted,
    paddingTop: spacing.sm,
  },
  nutritionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  nutritionStat: {
    alignItems: "center",
    flex: 1,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: "800",
  },
  nutritionLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
    textTransform: "uppercase",
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xl,
  },
  quantity: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    minWidth: 32,
    textAlign: "center",
  },
  button: {
    marginTop: "auto",
  },
});
