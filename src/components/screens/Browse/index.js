import { FlatList, StyleSheet, View } from "react-native";
import RestaurantItem from "../../RestaurantItem";
import Restaurants from "../../../../assets/data/restaurants.json";
import { useState } from "react";
import { Searchbar } from "react-native-paper";

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.page}>
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
    padding: 20,
  },
  input: {
    margin: 12,
    marginVertical: 20,
  },
});
