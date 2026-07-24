import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { IconButton } from "../ui";
import { colors } from "../../theme";

const BasketHeader = () => {
  const navigator = useNavigation();
  return (
    <IconButton onPress={() => navigator.navigate("Basket")}>
      <FontAwesome6 name="basket-shopping" size={18} color={colors.text} />
    </IconButton>
  );
};

export default BasketHeader;
