import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../theme";

const VARIANTS = {
  accent: { bg: colors.accentDim, text: colors.accent },
  neutral: { bg: colors.surfaceHigh, text: colors.textSecondary },
  success: { bg: "rgba(62,207,142,0.16)", text: colors.success },
};

export default function Pill({ label, variant = "neutral", icon, style }) {
  const v = VARIANTS[variant] || VARIANTS.neutral;

  return (
    <View style={[styles.pill, { backgroundColor: v.bg }, style]}>
      {icon}
      <Text style={[styles.text, { color: v.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
});
