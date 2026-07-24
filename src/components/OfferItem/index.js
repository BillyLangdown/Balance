import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, radius, spacing, shadow } from "../../theme";
import { Pill } from "../ui";

const OfferItem = ({ offer }) => {
  return (
    <Pressable style={({ pressed }) => [styles.offerContainer, pressed && styles.pressed]}>
      <Image source={{ uri: offer.image }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        style={styles.overlay}
      >
        {offer.discount ? (
          <Pill label={offer.discount} variant="accent" style={styles.pill} />
        ) : null}
        <Text style={styles.title} numberOfLines={1}>
          {offer.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {offer.description}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default OfferItem;

const styles = StyleSheet.create({
  offerContainer: {
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
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.md,
  },
  pill: {
    marginBottom: spacing.xs,
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
