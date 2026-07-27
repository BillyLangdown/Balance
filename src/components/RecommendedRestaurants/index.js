import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, radius, spacing, shadow } from "../../theme";
import { Pill } from "../ui";

const RecommendedRestaurants = ({ restaurant }) => {
  return (
    <Pressable style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Pill label="Fits your goals" variant="accent" style={styles.pill} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        style={styles.overlay}
      >
        <Text style={styles.title} numberOfLines={1}>
          {restaurant.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          ${restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliverytime}-
          {restaurant.maxDeliveryTime} min
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default RecommendedRestaurants;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 150,
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.surface,
    ...shadow.card,
  },
  pressed: {
    opacity: 0.85,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  pill: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    marginTop: 2,
  },
});
