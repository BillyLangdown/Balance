import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import BasketHeader from "../../BasketHeader";

const Diet = () => {
  const [totalCalories, setTotalCalories] = useState(2500);
  const [caloriesEatenToday, setCaloriesEaten] = useState(1500);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);

  useEffect(() => {
    const fatPercentage = 0.3; // 30% of total calories from fat
    const carbsPercentage = 0.5; // 50% of total calories from carbs
    const proteinPercentage = 0.2; // 20% of total calories from protein

    setFat((totalCalories * fatPercentage) / 9); // 1g fat = 9 calories
    setCarbs((totalCalories * carbsPercentage) / 4); // 1g carbs = 4 calories
    setProtein((totalCalories * proteinPercentage) / 4); // 1g protein = 4 calories
  }, [totalCalories]);

  const data = {
    data: [caloriesEatenToday / totalCalories],
  };

  const macroChartData = {
    fat: {
      data: [(fat / totalCalories) * 100], // Calculate percentage
      label: "Fat",
      color: "#FF6347",
    },
    carbs: {
      data: [(carbs / totalCalories) * 100], // Calculate percentage
      label: "Carbs",
      color: "#32CD32",
    },
    protein: {
      data: [(protein / totalCalories) * 100], // Calculate percentage
      label: "Protein",
      color: "#6495ED",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.basketContainer}>
        <BasketHeader />
      </View>

      <Text style={styles.title}>Diet Planner</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.subtitle}>Calories Eaten Today</Text>
        <ProgressChart
          data={data}
          width={200}
          height={200}
          strokeWidth={26}
          radius={62}
          chartConfig={{
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 6,
          }}
          hideLegend={true}
        />
        <Text style={styles.caloriesText}>
          {caloriesEatenToday} / {totalCalories} Calories
        </Text>
      </View>

      <View style={styles.macrosContainer}>
        <Text style={styles.subtitle}>Macros</Text>
        <View style={styles.macroCharts}>
          {Object.keys(macroChartData).map((key) => (
            <MacroChart key={key} data={macroChartData[key]} />
          ))}
        </View>
      </View>

      <Text style={styles.buttonText}>Adjust Your Goals</Text>
      <Button title="Set Goals" onPress={() => {}} />
    </ScrollView>
  );
};

const MacroChart = ({ data }) => {
  return (
    <View style={styles.macroChartContainer}>
      <Text style={styles.macroLabel}>{data.label}</Text>
      <ProgressChart
        data={{ data: [data.data / 100] }}
        width={100}
        height={120}
        strokeWidth={16}
        radius={36}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          color: (opacity = 0) => data.color,
          strokeWidth: 6,
        }}
        hideLegend={true}
      />
      <Text style={styles.macroPercentage}>{Math.round(data.data)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  caloriesText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  macrosContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  macroCharts: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  macroChartContainer: {
    width: 100,
    alignItems: "center",
  },
  macroLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  macroPercentage: {
    fontSize: 14,
    fontWeight: "400",
  },
  buttonText: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "500",
  },
  basketContainer: {
    marginLeft: "auto",
    paddingHorizontal: 25,
    paddingTop: 17,
  },
});

export default Diet;
