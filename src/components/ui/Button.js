import React from "react";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors, radius, spacing } from "../../theme";

const VARIANTS = {
  primary: {
    container: { backgroundColor: colors.accent },
    text: { color: colors.accentText },
  },
  secondary: {
    container: {
      backgroundColor: colors.surfaceHigh,
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    text: { color: colors.text },
  },
  ghost: {
    container: { backgroundColor: "transparent" },
    text: { color: colors.accent },
  },
  danger: {
    container: { backgroundColor: "transparent", borderWidth: 1, borderColor: colors.danger },
    text: { color: colors.danger },
  },
};

export default function Button({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
  size = "md",
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isSmall = size === "sm";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        isSmall && styles.small,
        v.container,
        disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={v.text.color} />
      ) : (
        <>
          {icon}
          <Text style={[styles.text, isSmall && styles.smallText, v.text, textStyle]}>
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
  },
  small: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.sm,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  smallText: {
    fontSize: 13,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.4,
  },
  pressed: {
    opacity: 0.85,
  },
});
