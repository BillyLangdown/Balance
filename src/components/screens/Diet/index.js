import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import BasketHeader from "../../BasketHeader";
import DietForm from "./DietForm";
import DietContext from "../../../contexts/DietContext";
import FitnessGoalContext from "../../../contexts/FitnessGoalContext";
import { Card, Pill, MacroRing } from "../../ui";
import { colors, macroColors, radius, spacing, typography } from "../../../theme";

const screenWidth = Dimensions.get("window").width;
const RING_SIZE = screenWidth / 4.5;

const Diet = () => {
  const [mealEaten] = useState({
    calories: 800,
    carbs: 400,
    protein: 240,
    fat: 160,
  });
  const { diet } = useContext(DietContext);
  const { fitnessGoal } = useContext(FitnessGoalContext);
  const fatGramsEatenToday = mealEaten.fat / 9;
  const carbsGramsEatenToday = mealEaten.carbs / 4;
  const proteinGramsEatenToday = mealEaten.protein / 4;

  const progressData = [
    {
      title: "Calories",
      grams: 660,
      goal: diet.totalCalories,
      color: macroColors.calories,
    },
    {
      title: "Fat",
      grams: fatGramsEatenToday,
      goal: diet.fatGrams,
      color: macroColors.fat,
    },
    {
      title: "Carbs",
      grams: carbsGramsEatenToday,
      goal: diet.carbGrams,
      color: macroColors.carbs,
    },
    {
      title: "Protein",
      grams: proteinGramsEatenToday,
      goal: diet.proteinGrams,
      color: macroColors.protein,
    },
  ];

  const CurrentDietInfo = () => (
    <Card style={styles.infoCard}>
      <Text style={styles.infoTextMealPlan}>Meal Plan: {fitnessGoal}</Text>
      <Text style={styles.infoText}>
        {diet.totalCalories} cal &#8226; {diet.fatGrams}g fat &#8226;{" "}
        {diet.proteinGrams}g protein &#8226; {diet.carbGrams}g carbs
      </Text>
    </Card>
  );

  const renderItem = ({ item }) => (
    <View style={styles.macroItem}>
      <MacroRing
        size={RING_SIZE}
        strokeWidth={8}
        percent={item.goal ? (item.grams / item.goal) * 100 : 0}
        color={item.color}
      >
        <Text style={styles.macroValue}>{`${item.grams.toFixed(0)}g`}</Text>
      </MacroRing>
      <Text style={styles.macroTitle}>{item.title}</Text>
      <Text style={styles.macroGoal}>of {item.goal}g</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={styles.row}>
          <Pill label="Tracking: Lunch" variant="accent" style={styles.trackingPill} />
          <BasketHeader />
        </View>

        {diet.totalCalories === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.noDietTitle}>No diet set yet</Text>
            <Text style={styles.noDietBody}>
              Set your fitness goals to get a personalized macro plan.
            </Text>
          </View>
        ) : (
          <View style={styles.content}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  page: {
    flex: 1,
    paddingTop: 64,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  trackingPill: {
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
  },
  infoCard: {
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
  },
  flatListContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    gap: spacing.lg,
  },
  macroItem: {
    alignItems: "center",
    marginRight: spacing.md,
  },
  macroValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "700",
  },
  macroTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
    marginTop: spacing.sm,
  },
  macroGoal: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  infoText: {
    ...typography.bodyMuted,
  },
  infoTextMealPlan: {
    ...typography.h3,
    marginBottom: spacing.xs,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xxl,
  },
  noDietTitle: {
    ...typography.h1,
    marginBottom: spacing.sm,
  },
  noDietBody: {
    ...typography.bodyMuted,
    textAlign: "center",
  },
});

export default Diet;
