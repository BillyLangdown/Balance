import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import React, { useState } from "react";
import basketContext from "./src/contexts/basketContext";
import DietContext from "./src/contexts/DietContext";
import FitnessGoalContext from "./src/contexts/FitnessGoalContext";
Amplify.configure(amplifyconfig);

export default function App() {
  const [basket, setBasket] = useState([]);
  const resetBasket = () => setBasket([]);
  const [diet, setDiet] = useState({
    totalCalories: 0,
    proteinGrams: 0,
    carbGrams: 0,
    fatGrams: 0,
    proteinPercentage: 0,
    carbPercentage: 0,
    fatPercentage: 0,
  });
  const [fitnessGoal, setFitnessGoal] = useState("");

  const basketContextValue = {
    basket,
    setBasket,
  };

  const dietContextValue = {
    diet,
    setDiet,
  };

  const FitnessGoalValue = {
    fitnessGoal,
    setFitnessGoal,
  };
  return (
    <FitnessGoalContext.Provider value={FitnessGoalValue}>
      <DietContext.Provider value={dietContextValue}>
        <basketContext.Provider value={basketContextValue}>
          <NavigationContainer>
            <RootNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </basketContext.Provider>
      </DietContext.Provider>
    </FitnessGoalContext.Provider>
  );
}
