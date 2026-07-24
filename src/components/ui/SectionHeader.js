import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

export default function SectionHeader({ title, actionLabel, onActionPress, style }) {
  return (
    <View style={[styles.row, style]}>
      <Text style={typography.h2}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onActionPress} hitSlop={8}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  action: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
  },
});
