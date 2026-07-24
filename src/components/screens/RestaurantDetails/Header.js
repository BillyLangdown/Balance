import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
import { Pill } from "../../ui";
import { spacing } from "../../../theme";

export default function RestaurantHeader({ restaurant }) {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}> {restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliverytime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
        {restaurant.tags?.length ? (
          <View style={localStyles.tagRow}>
            {restaurant.tags.map((tag) => (
              <Pill key={tag} label={tag} variant="accent" />
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  tagRow: {
    flexDirection: "row",
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
});
