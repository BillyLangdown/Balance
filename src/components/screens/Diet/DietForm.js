import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import DietContext from "../../../contexts/DietContext";
import DietGenerator from "./DietGenerator";
import FitnessGoalContext from "../../../contexts/FitnessGoalContext";
import { Button } from "../../ui";
import { colors, radius, spacing, typography } from "../../../theme";

const DietForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState({
    age: "",
    feet: "",
    inches: "",
    weight: "",
    fitnessGoal: "",
    activityLevel: "",
    gender: "",
  });
  const { setDiet } = useContext(DietContext);
  const { setFitnessGoal } = useContext(FitnessGoalContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setCurrentPage(1);
  };

  const handleSaveDiet = () => {
    setFitnessGoal(userData.fitnessGoal);
    DietGenerator(userData)
      .then((result) => {
        setDiet(result);
        setIsModalVisible(false);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Error generating diet:", error);
      });
  };

  return (
    <>
      <View style={styles.bottomSectionContainer}>
        <Button label="Set Diet" onPress={() => setIsModalVisible(true)} />
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeIcon} onPress={handleCloseModal}>
              <Ionicons name="close-outline" size={26} color={colors.textSecondary} />
            </Pressable>
            {currentPage === 1 && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your age"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="numeric"
                  maxLength={3}
                  value={userData.age.toString()}
                  onChangeText={(text) => {
                    const age = parseInt(text);
                    setUserData({ ...userData, age: age });
                  }}
                />

                <View style={styles.inputRow}>
                  <TextInput
                    style={[styles.input, styles.inputFeet]}
                    placeholder="Feet"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="numeric"
                    maxLength={1}
                    value={userData.feet}
                    onChangeText={(text) => {
                      const feet = parseInt(text);
                      if (!isNaN(feet) && feet >= 0) {
                        setUserData({ ...userData, feet: text });
                      }
                    }}
                  />
                  <Text style={styles.inputSeparator}>.</Text>
                  <TextInput
                    style={[styles.input, styles.inputInches]}
                    placeholder="Inches"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="numeric"
                    maxLength={2}
                    value={userData.inches}
                    onChangeText={(text) => {
                      const inches = parseInt(text);
                      if (!isNaN(inches) && inches >= 0 && inches < 12) {
                        setUserData({ ...userData, inches: text });
                      }
                    }}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your weight (kg)"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="numeric"
                  maxLength={5}
                  value={userData.weight}
                  onChangeText={(text) => {
                    const weight = parseFloat(text);
                    if (!isNaN(weight) && weight > 0) {
                      setUserData({ ...userData, weight: text });
                    }
                  }}
                />
                <View style={styles.genderContainer}>
                  <Text style={styles.genderLabel}>Select your gender:</Text>
                  <View style={styles.genderOptions}>
                    <Pressable
                      style={[
                        styles.genderOption,
                        userData.gender === "Male" && styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, gender: "Male" })
                      }
                    >
                      <Text style={styles.optionText}>Male</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.genderOption,
                        userData.gender === "Female" && styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, gender: "Female" })
                      }
                    >
                      <Text style={styles.optionText}>Female</Text>
                    </Pressable>
                  </View>
                </View>

                <Button label="Next" onPress={handleNextPage} style={styles.nextButton} />
              </>
            )}
            {currentPage === 2 && (
              <>
                <Text style={styles.genderLabel}>
                  Select your level of activity:
                </Text>
                <View style={styles.activityLevels}>
                  {[
                    { key: "sedentary", label: "Sedentary" },
                    { key: "lightly active", label: "Lightly" },
                    { key: "moderately active", label: "Moderately" },
                    { key: "very active", label: "Very" },
                    { key: "extremely active", label: "Extremely" },
                  ].map((level) => (
                    <Pressable
                      key={level.key}
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === level.key &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, activityLevel: level.key })
                      }
                    >
                      <Text style={styles.activityLevelText}>{level.label}</Text>
                    </Pressable>
                  ))}
                </View>
                <Button label="Next" onPress={handleNextPage} style={styles.nextButton} />
              </>
            )}

            {currentPage === 3 && (
              <>
                <Text style={styles.genderLabel}>Select your fitness goal:</Text>
                <View style={styles.fitnessGoals}>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.fitnessGoalButton,
                        userData.fitnessGoal === "Muscle Gain" &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, fitnessGoal: "Muscle Gain" })
                      }
                    >
                      <MaterialCommunityIcons
                        name="arm-flex"
                        size={34}
                        color={colors.text}
                      />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Gain weight</Text>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.fitnessGoalButton,
                        userData.fitnessGoal === "Weight Loss" &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, fitnessGoal: "Weight Loss" })
                      }
                    >
                      <FontAwesome6
                        name="weight-scale"
                        size={28}
                        color={colors.text}
                      />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Weight Loss</Text>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.fitnessGoalButton,
                        userData.fitnessGoal === "Maintenance" &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, fitnessGoal: "Maintenance" })
                      }
                    >
                      <MaterialIcons name="balance" size={30} color={colors.text} />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Maintenance</Text>
                  </View>
                </View>
                <Button label="Save" onPress={handleSaveDiet} style={styles.nextButton} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSectionContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  fitnessGoals: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
  },
  fitnessGoalButton: {
    width: 66,
    height: 66,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  fitnessGoalText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  individualGoal: {
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.xl,
    padding: spacing.xl,
    width: "88%",
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceHigh,
    color: colors.text,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  nextButton: {
    marginTop: spacing.sm,
  },
  activityLevels: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
    marginTop: spacing.md,
  },
  closeIcon: {
    marginLeft: "auto",
    marginBottom: spacing.sm,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputFeet: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputInches: {
    flex: 1,
  },
  inputSeparator: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textSecondary,
    marginHorizontal: spacing.xs,
  },
  activityLevelButton: {
    flexBasis: "47%",
    aspectRatio: 2.5,
    marginVertical: spacing.xs,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.border,
    backgroundColor: colors.surfaceHigh,
    borderWidth: 1,
    borderRadius: radius.md,
  },
  activityLevelText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },
  genderContainer: {
    marginBottom: spacing.lg,
  },
  genderLabel: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  genderOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  genderOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
  },
  selectedOption: {
    borderColor: colors.accent,
    borderWidth: 2,
    backgroundColor: colors.accentDim,
  },
  optionText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
  },
});

export default DietForm;
