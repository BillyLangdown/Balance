import { View, Text, Image, FlatList } from "react-native";
import restaurants from "../../../../assets/data/restaurants.json";
import styles from "./styles";
import OrderDetailsHeader from "./OrderDetailsHeader";
import BasketDishItem from "../../BasketDishItem";

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
