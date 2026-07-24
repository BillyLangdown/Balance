import { Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../theme";

const BalanceHeader = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>balance</Text>
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>nutrition made easy</Text>
      </View>
    </View>
  );
};
export default BalanceHeader;

const styles = StyleSheet.create({
  page: {
    marginBottom: spacing.xl,
    paddingTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
  },
  title: {
    ...typography.display,
    fontSize: 56,
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
  },
  subtitleBox: {
    backgroundColor: colors.accentDim,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
  },
});
