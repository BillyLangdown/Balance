import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import React, { useState } from "react";
import basketContext from "./src/contexts/basketContext";
Amplify.configure(amplifyconfig);

function App() {
  const [basket, setBasket] = useState([]);
  const resetBasket = () => setBasket([]);

  const basketContextValue = {
    basket,
    setBasket,
  };
  return (
    <basketContext.Provider value={basketContextValue}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </basketContext.Provider>
  );
}

export default withAuthenticator(App);
