import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import BasketHeader from "../../BasketHeader";
import DietForm from "./DietForm";
import { LinearGradient } from "expo-linear-gradient";
import DietContext from "../../../contexts/DietContext";
import FitnessGoalContext from "../../../contexts/FitnessGoalContext";

const screenWidth = Dimensions.get("window").width;

const Diet = () => {
  const [mealEaten] = useState({
    calories: 800,
    carbs: 400,
    protein: 240,
    fat: 160,
  });
  const { diet, setDiet } = useContext(DietContext);
  const { fitnessGoal, setFitnessGoal } = useContext(FitnessGoalContext);
  const fatGramsEatenToday = mealEaten.fat / 9;
  const carbsGramsEatenToday = mealEaten.carbs / 4;
  const proteinGramsEatenToday = mealEaten.protein / 4;

  const progressData = [
    {
      title: "Calories",
      grams: 660,
      goal: diet.totalCalories,
      color: "#3399FF",
    },
    { title: "Fat", grams: fatGramsEatenToday, goal: 25, color: "#FF6347" },
    {
      title: "Carbs",
      grams: carbsGramsEatenToday,
      goal: 100,
      color: "#32CD32",
    },
    {
      title: "Protein",
      grams: proteinGramsEatenToday,
      goal: 75,
      color: "#6495ED",
    },
  ];

  const CurrentDietInfo = () => {
    return (
      <View style={styles.DietInfoContainer}>
        <Text style={styles.infoTextMealPlan}> Meal Plan: {fitnessGoal}</Text>
        <Text style={styles.infoText}>
          Calories: {diet.totalCalories} | Fat: {diet.fatGrams.toFixed(0)}g |
          Protein:
          {diet.proteinGrams.toFixed(0)}g | Carbs:
          {diet.carbGrams.toFixed(0)}g
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.macroItem}>
      <Text style={styles.macroTitle}>{item.title}</Text>
      <View style={styles.progressBackground}>
        <ProgressCircle
          percent={(item.grams / item.goal) * 100}
          radius={screenWidth / 2.5}
          borderWidth={60}
          color={item.color}
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text>{`${item.grams.toFixed(1)}g / ${item.goal}g`}</Text>
        </ProgressCircle>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#3C4142", "#f2f2f2"]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 0.4]}
    >
      <View style={styles.page}>
        <View style={styles.row}>
          <View style={styles.headerContainer}>
            <View style={styles.orangeBackground}>
              <Text style={styles.subtitle}>Tracking: Lunch</Text>
            </View>
          </View>
          <View style={styles.basket}>
            <BasketHeader />
          </View>
        </View>

        {!diet ? (
          <Text style={styles.noDietSet}> No diet set</Text>
        ) : (
          <View style={styles.flatListContainer}>
            <CurrentDietInfo />
            <FlatList
              data={progressData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        )}

        <DietForm />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    paddingTop: 65,
  },
  headerContainer: {
    marginLeft: 10,
    margin: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 38,
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: "center",
  },
  macroItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  macroTitle: {
    color: "#3C4142",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  basket: {
    marginRight: 40,
    marginTop: 10,
  },
  progressBackground: {
    alignItems: "center",
    justifyContent: "center",
  },
  orangeBackground: {
    backgroundColor: "orange",
    paddingLeft: 40,
    paddingRight: 15,
    marginRight: 210,
    paddingVertical: 5,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  DietInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  infoText: {
    fontSize: 15,
    fontWeight: "500",
  },
  infoTextMealPlan: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
  },
  noDietSet: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "600",
    marginVertical: 220,
  },
});

export default Diet;
