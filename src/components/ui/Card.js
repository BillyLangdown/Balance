import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { colors, radius, shadow } from "../../theme";

export default function Card({ children, onPress, style, elevated = false }) {
  const content = (
    <View
      style={[
        styles.card,
        elevated && shadow.card,
        elevated && styles.elevated,
        style,
      ]}
    >
      {children}
    </View>
  );

  if (!onPress) return content;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  elevated: {
    backgroundColor: colors.surfaceElevated,
  },
  pressed: {
    opacity: 0.85,
  },
});
