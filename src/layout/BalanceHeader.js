import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "@aws-amplify/ui-react-native";

const BalanceHeader = () => {
  const {
    tokens: { space, fontSizes },
  } = useTheme();
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.subtitle}>Nutrition made easy</Text>
    </View>
  );
};
export default BalanceHeader;

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontSize: 90,
    fontWeight: "700",
    color: "#FFA500",
  },
  subtitle: {
    color: "#FFA500",
    marginRight: 80,
    fontWeight: "500",
    fontSize: 20,
  },
});
