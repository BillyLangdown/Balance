import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

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
      data: [fat / totalCalories],
      labels: ["Fat"],
    },
    carbs: {
      data: [carbs / totalCalories],
      labels: ["Carbs"],
    },
    protein: {
      data: [protein / totalCalories],
      labels: ["Protein"],
    },
  };

  const chartConfig = {
    backgroundGradientFrom: "#f0f0f0",
    backgroundGradientTo: "#f0f0f0",
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    strokeWidth: 6,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Diet Planner</Text>

        <View style={styles.chartContainer}>
          <Text style={styles.subtitle}>Calories Eaten Today</Text>
          <ProgressChart
            data={data}
            width={300}
            height={200}
            strokeWidth={26}
            radius={62}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <Text style={styles.caloriesText}>
            {caloriesEatenToday} / {totalCalories} Calories
          </Text>
        </View>

        <View style={styles.macrosContainer}>
          <Text style={styles.subtitle}>Macros</Text>
          <View style={styles.macroCharts}>
            <MacroChart data={macroChartData.fat} />
            <MacroChart data={macroChartData.carbs} />
            <MacroChart data={macroChartData.protein} />
          </View>
        </View>

        <Text style={styles.buttonText}>
          Doesn't look right? Goals Changed?{" "}
        </Text>
        <Button title="Set Goals"></Button>
      </ScrollView>
    </View>
  );
};

const MacroChart = ({ data }) => {
  const chartConfig = {
    backgroundGradientFrom: "#f0f0f0",
    backgroundGradientTo: "#f0f0f0",
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    strokeWidth: 6,
  };

  return (
    <View style={styles.macroChartContainer}>
      <Text style={styles.macroLabel}>{data.labels[0]}</Text>
      <ProgressChart
        data={data}
        width={80}
        height={80}
        strokeWidth={10}
        radius={18}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <Text style={styles.macroPercentage}>
        {Math.round(data.data[0] * 100)}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    padding: 15,
    fontSize: 25,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
  chartContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  caloriesText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  macrosContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  macroCharts: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  macroChartContainer: {
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
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default Diet;
