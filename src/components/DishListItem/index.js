import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing } from "../../theme";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("DishDetails", { dish: dish })}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {dish.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {dish.description}
        </Text>
        {dish.totalCalories ? (
          <View style={styles.macroRow}>
            <View style={styles.macroTag}>
              <Ionicons name="flame" size={11} color={colors.accent} />
              <Text style={styles.macroTagText}>{dish.totalCalories} kcal</Text>
            </View>
            <View style={styles.macroTag}>
              <Text style={styles.macroTagText}>{dish.protein}g protein</Text>
            </View>
          </View>
        ) : null}
        <Text style={styles.price}>${dish.price}</Text>
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
    alignItems: "center",
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  pressed: {
    backgroundColor: colors.surfaceHigh,
  },
  textBlock: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    paddingBottom: 4,
  },
  subtitle: {
    paddingBottom: 4,
    color: colors.textSecondary,
    fontSize: 13,
  },
  price: {
    color: colors.accent,
    fontWeight: "700",
  },
  macroRow: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  macroTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.surfaceHigh,
    paddingVertical: 3,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
  },
  macroTagText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: radius.md,
  },
});
