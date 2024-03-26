import { View, Text, Image } from "react-native";
import restaurants from "../../../../assets/data/restaurants.json";
import styles from "./styles";

export default function RestaurantHeader({ restaurant }) {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}> {restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee}0 ​​&#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
}
