import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import offers from "../../../../assets/data/offers.json";
import OfferItem from "../../OfferItem";
import HomeHeader from "./HomeHeader";
import RecommendedRestaurants from "../../RecommendedRestaurants";
import { generateClient } from "aws-amplify/api";
import { listDishes } from "../../../graphql/queries"; // Update to the correct query
import { getRestaurant } from "../../../graphql/queries"; // Update to the correct query
import DietContext from "../../../contexts/DietContext";

export default function Home() {
  const { diet, setDiet } = useContext(DietContext);
  const [recommendedRestaurants, setRecommendedRestaurants] = useState([]);

  const client = generateClient();

  const minCalories = diet.totalCalories * 0.2;
  const maxCalories = diet.totalCalories * 1.2;
  const minProtein = diet.proteinGrams * 0.6;
  const minCarbs = diet.carbGrams * 0.6;
  const minFat = diet.fatGrams * 0.6;

  useEffect(() => {
    const fetchRecommendedRestaurants = async () => {
      try {
        const dishesResponse = await client.graphql({
          query: listDishes,
        });
        const allDishes = dishesResponse.data.listDishes.items;

        const filteredDishes = allDishes.filter((dish) => {
          return (
            dish.totalCalories >= minCalories &&
            dish.totalCalories <= maxCalories &&
            dish.protein >= minProtein &&
            dish.carbs >= minCarbs &&
            dish.fat >= minFat
          );
        });

        const uniqueRestaurantIds = [
          ...new Set(filteredDishes.map((dish) => dish.restaurantID)),
        ];

        const recommendedRestaurants = await Promise.all(
          uniqueRestaurantIds.map(async (restaurantId) => {
            const restaurantResponse = await client.graphql({
              query: getRestaurant,
              variables: { id: restaurantId },
            });
            return restaurantResponse.data.getRestaurant;
          })
        );

        setRecommendedRestaurants(recommendedRestaurants);
      } catch (error) {
        console.error("Error fetching recommended restaurants:", error);
      }
    };

    fetchRecommendedRestaurants();
  }, []);

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
            <Text style={styles.subtitle}>
              Restaurants that suit your goals
            </Text>
            <FlatList
              data={recommendedRestaurants}
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
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
  },
});
