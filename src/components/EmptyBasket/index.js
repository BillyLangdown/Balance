import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "../../theme";

const EmptyBasket = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="basket-outline" size={48} color={colors.textMuted} />
      <Text style={styles.title}>Your basket is empty</Text>
      <Text style={styles.body}>Add dishes from a restaurant to get started.</Text>
    </View>
  );
};

export default EmptyBasket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xxl,
    gap: spacing.sm,
  },
  title: {
    ...typography.h3,
    marginTop: spacing.sm,
  },
  body: {
    ...typography.bodyMuted,
    textAlign: "center",
  },
});
