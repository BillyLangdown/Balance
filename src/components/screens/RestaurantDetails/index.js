import { View, FlatList } from "react-native";
import restaurants from "../../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../DishListItem";
import Header from "./Header";
const restaurant = restaurants[0];
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function RestaurantDetailsPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params.id;

  return (
    <View style={styles.page}>
      {/* Here is where I can implement conditional logic to only render recommended dishes based on diet */}
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
}
