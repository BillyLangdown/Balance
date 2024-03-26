import { View, Text, Image } from "react-native";
import orders from "../../../../assets/data/orders.json";
import styles from "./styles";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your orders </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;
