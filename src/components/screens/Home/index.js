import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import offers from "../../../../assets/data/offers.json";
import OfferItem from "../../OfferItem";
import HomeHeader from "./HomeHeader";
import RecommendedRestaurants from "../../RecommendedRestaurants";
import restaurants from "../../../../assets/data/restaurants.json";

export default function Home() {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <HomeHeader style={styles.header} />
            <Text style={styles.subtitle}>Discounts</Text>
          </>
        )}
        ListFooterComponent={() => (
          <View>
            <Text style={styles.subtitle}>Meals to suit your goals: </Text>
            <FlatList
              data={restaurants}
              renderItem={({ item }) => (
                <RecommendedRestaurants restaurant={item} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
        data={[{ key: "offers", data: offers }]}
        renderItem={({ item }) => (
          <FlatList
            data={item.data}
            renderItem={({ item }) => <OfferItem offer={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    marginTop: 15,
  },
});
