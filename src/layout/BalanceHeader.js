import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "@aws-amplify/ui-react-native";

const BalanceHeader = () => {
  const {
    tokens: { space, fontSizes },
  } = useTheme();
  return (
    <View style={styles.page}>
      <Text style={styles.title}>balance</Text>
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>nutrition made easy</Text>
      </View>
    </View>
  );
};
export default BalanceHeader;

const styles = StyleSheet.create({
  page: {
    marginBottom: 20,
    justifyContent: "center",
  },
  title: {
    marginLeft: 20,
    fontSize: 90,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    color: "black",
    padding: 4,
  },
  subtitleBox: {
    backgroundColor: "orange",
    paddingLeft: 40,
    paddingRight: 5,
    marginRight: 160,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
