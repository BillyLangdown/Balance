import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import RestaurantItem from "../../RestaurantItem";

import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import BasketHeader from "../../BasketHeader";
import { generateClient } from "aws-amplify/api";
import { listRestaurants } from "../../../graphql/queries";
import { useNavigation } from "@react-navigation/native";

export default function Browse() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigator = useNavigation();

  const client = generateClient();

  const fetchRestaurants = async () => {
    const results = await client.graphql({
      query: listRestaurants,
    });
    setRestaurants(results.data.listRestaurants.items);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <Text style={styles.currentLocation}>Current Location</Text>
        <BasketHeader />
      </View>
      <Searchbar
        style={styles.input}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingTop: 80,
    paddingBottom: 150,
  },
  input: {
    margin: 12,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentLocation: {},
});
