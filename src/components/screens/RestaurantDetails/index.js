import { View, FlatList, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { generateClient } from "aws-amplify/api";
import { getDish, getRestaurant, listDishes } from "../../../graphql/queries";

export default function RestaurantDetailsPage() {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const client = generateClient();

  const fetchRestaurantById = async () => {
    try {
      const result = await client.graphql({
        query: getRestaurant,
        variables: { id: id },
      });

      setRestaurant(result.data.getRestaurant);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  const fetchDishesByRestaurantId = async () => {
    try {
      const result = await client.graphql({
        query: listDishes,
        variables: { filter: { restaurantID: { eq: id } } },
      });
      setDishes(result.data.listDishes.items);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  useEffect(() => {
    fetchDishesByRestaurantId();
    fetchRestaurantById();
  }, []);

  if (!restaurant) {
    return (
      <ActivityIndicator style={styles.ActivityIndicator} size={"large"} />
    );
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={styles.iconContainer}
      />
    </View>
  );
}
