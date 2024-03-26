import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const OfferItem = ({ offer }) => {
  return (
    <Pressable style={styles.offerContainer}>
      <Image
        source={{
          uri: offer.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}> {offer.name} </Text>
          <Text style={styles.subtitle}>
            {offer.discount}
            {offer.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default OfferItem;

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
