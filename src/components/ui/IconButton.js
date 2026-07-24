import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors, radius } from "../../theme";

export default function IconButton({
  onPress,
  children,
  size = 44,
  variant = "surface",
  style,
}) {
  const isAccent = variant === "accent";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: radius.pill,
          backgroundColor: isAccent ? colors.accent : colors.surfaceHigh,
          borderWidth: isAccent ? 0 : 1,
          borderColor: colors.border,
        },
        pressed && styles.pressed,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
