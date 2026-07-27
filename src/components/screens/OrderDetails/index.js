import { FlatList } from "react-native";
import restaurants from "../../../../assets/data/restaurants.json";
import OrderDetailsHeader from "./OrderDetailsHeader";
import BasketDishItem from "../../BasketDishItem";
import styles from "./styles";

const OrderDetails = () => {
  return (
    <FlatList
      style={styles.page}
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
