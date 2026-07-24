import { View, Text, Image } from "react-native";
import orders from "../../../../assets/data/orders.json";
import { Pill } from "../../ui";
import styles from "./styles";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Pill label={`${order.status} • 2 days ago`} variant="accent" />
          <Text style={styles.menuTitle}>Your order</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;
