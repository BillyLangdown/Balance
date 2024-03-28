import { FlatList, StyleSheet, View, Text } from "react-native";
import RestaurantItem from "../../RestaurantItem";
import Restaurants from "../../../../assets/data/restaurants.json";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import BasketHeader from "../../BasketHeader";

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <Text>Current Location</Text>

        <BasketHeader />
      </View>
      <Searchbar
        style={styles.input}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        on
      />
      <FlatList
        data={Restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingTop: 90,
  },
  input: {
    margin: 12,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
