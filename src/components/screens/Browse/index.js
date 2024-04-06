import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import RestaurantItem from "../../RestaurantItem";

import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import BasketHeader from "../../BasketHeader";
import { generateClient } from "aws-amplify/api";
import { listRestaurants } from "../../../graphql/queries";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

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
    <LinearGradient
      colors={["#3C4142", "#f2f2f2"]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 0.2]}
    >
      <View style={styles.row}>
        <View style={styles.addressBox}>
          <Text style={styles.address}>cra.13 A 28-21</Text>
          <FontAwesome5 name="map-marker-alt" size={17} color="white" />
        </View>
        <BasketHeader />
      </View>
      <View style={styles.page}>
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingBottom: 150,
  },
  input: {
    marginVertical: 20,
  },
  row: {
    marginRight: 30,
    marginTop: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 15,
  },
  addressBox: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    gap: 10,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
});
