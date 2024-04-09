export default function DietGenerator(userData) {
  return new Promise((resolve, reject) => {
    // Convert relevant properties to numbers
    const { age, feet, inches, weight, fitnessGoal, activityLevel, gender } =
      userData;
    const numericAge = parseInt(age);
    const numericFeet = parseFloat(feet);
    const numericInches = parseFloat(inches);
    const numericWeight = parseFloat(weight);

    const heightInches = numericFeet * 12 + numericInches;
    const heightCm = heightInches * 2.54;

    // Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation
    let bmr;
    if (gender === "Male") {
      bmr = 10 * numericWeight + 6.25 * heightCm - 5 * numericAge + 5; // For males, add 5
    } else if (gender === "Female") {
      bmr = 10 * numericWeight + 6.25 * heightCm - 5 * numericAge - 161; // For females, subtract 161
    } else {
      reject("Invalid gender");
      return;
    }

    // Adjust BMR based on activity level
    let activityFactor;
    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightly active":
        activityFactor = 1.375;
        break;
      case "moderately active":
        activityFactor = 1.55;
        break;
      case "very active":
        activityFactor = 1.725;
        break;
      case "extremely active":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    // Adjust BMR further based on fitness goal
    let fitnessFactor;
    let proteinPercentage, carbPercentage, fatPercentage;
    switch (fitnessGoal) {
      case "lose weight":
        fitnessFactor = 0.9; // Reduce calorie intake for weight loss
        proteinPercentage = 45;
        carbPercentage = 30;
        fatPercentage = 25;
        break;
      case "maintain weight":
        fitnessFactor = 1; // Maintain current calorie intake
        proteinPercentage = 40;
        carbPercentage = 30;
        fatPercentage = 30;
        break;
      case "gain muscle":
        fitnessFactor = 1.1; // Increase calorie intake for muscle gain
        proteinPercentage = 35;
        carbPercentage = 40;
        fatPercentage = 25;
        break;
      default:
        fitnessFactor = 1; // Default to maintain weight
        proteinPercentage = 40;
        carbPercentage = 30;
        fatPercentage = 30;
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityFactor * fitnessFactor;

    // Calculate total calories and macronutrient grams for one meal (lunch)
    const totalCalories = (tdee * 0.3).toFixed(0); // Assuming lunch contributes 30% of daily calories
    const proteinGrams = ((proteinPercentage / 100) * totalCalories) / 4;
    const carbGrams = ((carbPercentage / 100) * totalCalories) / 4;
    const fatGrams = ((fatPercentage / 100) * totalCalories) / 9;

    // Resolve with meal details
    resolve({
      totalCalories,
      proteinGrams,
      carbGrams,
      fatGrams,
      proteinPercentage,
      carbPercentage,
      fatPercentage,
    });
  });
}
