import { FlatList, StyleSheet, View, Text } from "react-native";
import RestaurantItem from "../../RestaurantItem";

import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import BasketHeader from "../../BasketHeader";
import { generateClient } from "aws-amplify/api";
import { listRestaurants } from "../../../graphql/queries";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors, radius, spacing, typography } from "../../../theme";

export default function Browse() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.addressBox}>
          <FontAwesome5 name="map-marker-alt" size={14} color={colors.accent} />
          <Text style={styles.address}>cra.13 A 28-21</Text>
        </View>
        <BasketHeader />
      </View>
      <View style={styles.page}>
        <Text style={typography.h1}>Browse</Text>
        <Searchbar
          style={styles.input}
          inputStyle={styles.inputText}
          placeholderTextColor={colors.textMuted}
          iconColor={colors.textMuted}
          placeholder="Search restaurants"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topBar: {
    paddingTop: 64,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.surfaceHigh,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
  },
  address: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "600",
  },
  page: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  input: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.md,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputText: {
    color: colors.text,
  },
  list: {
    paddingTop: spacing.md,
    paddingBottom: 150,
  },
});
