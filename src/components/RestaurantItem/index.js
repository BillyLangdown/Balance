import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing, shadow } from "../../theme";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("RestaurantDetails", { id: restaurant.id });
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.textBlock}>
          <Text style={styles.title} numberOfLines={1}>
            {restaurant.name}
          </Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee.toFixed(2)} &#8226;{" "}
            {restaurant.minDeliverytime}-{restaurant.maxDeliveryTime} min
          </Text>
        </View>
        <View style={styles.rating}>
          <Ionicons name="star" size={12} color={colors.accent} />
          <Text style={styles.ratingText}>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    ...shadow.card,
  },
  pressed: {
    opacity: 0.85,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.surfaceHigh,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: radius.pill,
  },
  ratingText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "600",
  },
});
