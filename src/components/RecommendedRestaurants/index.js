import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const RecommendedRestaurants = ({ restaurant }) => {
  return (
    <Pressable style={styles.offerContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}> {restaurant.name} </Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee}0 ​​&#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RecommendedRestaurants;

const styles = StyleSheet.create({
  offerContainer: {
    width: 200,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  discount: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});
