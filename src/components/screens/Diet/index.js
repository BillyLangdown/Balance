import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import BasketHeader from "../../BasketHeader";

const Diet = () => {
  const calorieGoal = 727;
  const fatCaloriesEatenToday = 660 * 0.2;
  const carbsCaloriesEatenToday = 660 * 0.65;
  const proteinCaloriesEatenToday = 660 * 0.15;

  // Convert calories to grams
  const fatGramsEatenToday = fatCaloriesEatenToday / 9;
  const carbsGramsEatenToday = carbsCaloriesEatenToday / 4;
  const proteinGramsEatenToday = proteinCaloriesEatenToday / 4;

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Diet Tracker</Text>
          <Text style={styles.subtitle}>Tracking: Lunch</Text>
        </View>
        <View style={styles.basket}>
          <BasketHeader />
        </View>
      </View>

      <View style={styles.calorieContainer}>
        <Text style={styles.calorieTitle}>Calories</Text>
        <View style={styles.progressBackground}>
          <ProgressCircle
            percent={(660 / calorieGoal) * 100}
            radius={80}
            borderWidth={22}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={styles.progressText}>{"660 / 827"}</Text>
          </ProgressCircle>
        </View>
      </View>

      <View style={styles.macroContainer}>
        <View style={styles.macroItem}>
          <Text style={styles.macroTitle}>Fat</Text>
          <View style={styles.progressBackground}>
            <ProgressCircle
              percent={(fatGramsEatenToday / 25) * 100} // Assuming 25g as fat goal
              radius={50}
              borderWidth={18}
              color="#FF6347"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text>{`${fatGramsEatenToday.toFixed(1)}g / 25g`}</Text>
            </ProgressCircle>
          </View>
        </View>

        <View style={styles.macroItem}>
          <Text style={styles.macroTitle}>Carbs</Text>
          <View style={styles.progressBackground}>
            <ProgressCircle
              percent={(carbsGramsEatenToday / 100) * 100} // Assuming 100g as carbs goal
              radius={50}
              borderWidth={18}
              color="#32CD32"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text>{`${carbsGramsEatenToday.toFixed(1)}g / 100g`}</Text>
            </ProgressCircle>
          </View>
        </View>

        <View style={styles.macroItem}>
          <Text style={styles.macroTitle}>Protein</Text>
          <View style={styles.progressBackground}>
            <ProgressCircle
              percent={(proteinGramsEatenToday / 75) * 100} // Assuming 75g as protein goal
              radius={50}
              borderWidth={18}
              color="#6495ED"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text>{`${proteinGramsEatenToday.toFixed(1)}g / 75g`}</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
      <View>
        <Text>Goals changed?</Text>
        <Button title="Set Diet"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 65,
  },
  headerContainer: {
    marginLeft: "auto",
    margin: 10,
    marginBottom: 40,
  },
  header: {
    fontSize: 38,
    fontWeight: "bold",
  },
  calorieContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 80,
  },
  calorieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  macroContainer: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 15,
    justifyContent: "space-around",
    width: "100%",
    padding: 15,
    margin: 20,
    marginBottom: 40,
  },
  macroItem: {
    alignItems: "center",
  },
  macroTitle: {
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
    gap: 45,
  },
  basket: {
    marginTop: 20,
    marginLeft: 30,
  },
});

export default Diet;
