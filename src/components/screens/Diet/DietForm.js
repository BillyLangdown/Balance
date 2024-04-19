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
  const { diet, setDiet } = useContext(DietContext);
  const { fitnessGoal, setFitnessGoal } = useContext(FitnessGoalContext);
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
    console.log(userData, "<-- user data");
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
        <Pressable
          style={styles.setDiet}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.buttonText}>Set Diet</Text>
        </Pressable>
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
              <Ionicons name="close-outline" size={24} color="black" />
            </Pressable>
            {currentPage === 1 && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your age"
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

                <Pressable
                  style={[styles.button, styles.nextButton]}
                  onPress={handleNextPage}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </Pressable>
              </>
            )}
            {currentPage === 2 && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Select your activity level"
                  editable={false}
                  value={userData.activityLevel}
                />
                <View style={styles.activityLevels}>
                  <Text style={styles.genderLabel}>
                    Select your level of activity:
                  </Text>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === "sedentary" &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, activityLevel: "sedentary" })
                      }
                    >
                      <Text style={styles.activityLevelText}>Sedentary</Text>
                    </Pressable>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === "lightly" &&
                          styles.selectedOption, // Check if this option is selected
                      ]}
                      onPress={() =>
                        setUserData({
                          ...userData,
                          activityLevel: "lightly ",
                        })
                      }
                    >
                      <Text style={styles.activityLevelText}>Lightly</Text>
                    </Pressable>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === "moderately " &&
                          styles.selectedOption, // Check if this option is selected
                      ]}
                      onPress={() =>
                        setUserData({
                          ...userData,
                          activityLevel: "moderately ",
                        })
                      }
                    >
                      <Text style={styles.activityLevelText}>Moderately</Text>
                    </Pressable>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === "very " &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({
                          ...userData,
                          activityLevel: "very ",
                        })
                      }
                    >
                      <Text style={styles.activityLevelText}>Very </Text>
                    </Pressable>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.activityLevelButton,
                        userData.activityLevel === "extremely " &&
                          styles.selectedOption, // Check if this option is selected
                      ]}
                      onPress={() =>
                        setUserData({
                          ...userData,
                          activityLevel: "extremely ",
                        })
                      }
                    >
                      <Text style={styles.activityLevelText}>Extremely</Text>
                    </Pressable>
                  </View>
                </View>
                <Pressable
                  style={[styles.button, styles.saveButton]}
                  onPress={handleNextPage}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </Pressable>
              </>
            )}

            {currentPage === 3 && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Select your fitness goal"
                  editable={false}
                  value={userData.fitnessGoal}
                />
                <View style={styles.fitnessGoals}>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.button,
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
                        size={38}
                        color="#3C4142"
                      />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Gain weight</Text>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.button,
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
                        size={30}
                        color="#3C4142"
                      />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Weight Loss</Text>
                  </View>
                  <View style={styles.individualGoal}>
                    <Pressable
                      style={[
                        styles.button,
                        styles.fitnessGoalButton,
                        userData.fitnessGoal === "Maintenance" &&
                          styles.selectedOption,
                      ]}
                      onPress={() =>
                        setUserData({ ...userData, fitnessGoal: "Maintenance" })
                      }
                    >
                      <MaterialIcons name="balance" size={34} color="#3C4142" />
                    </Pressable>
                    <Text style={styles.fitnessGoalText}>Maintenance</Text>
                  </View>
                </View>
                <Pressable
                  style={[styles.button, styles.saveButton]}
                  onPress={handleSaveDiet}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </Pressable>
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  setDiet: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C4142",
    width: "100%",
    height: 80,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FAF9F6",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  fitnessGoals: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 10,
    padding: 15,
  },
  fitnessGoalButton: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
  },
  fitnessGoalText: {
    fontSize: 17,
    fontWeight: "600",
  },
  individualGoal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 5,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButton: {
    marginLeft: "auto",
    backgroundColor: "#3C4142",
  },
  nextButton: {
    marginLeft: "auto",
    backgroundColor: "#3C4142",
  },
  activityLevels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  closeIcon: {
    marginLeft: "auto",
    paddingBottom: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputFeet: {
    flex: 1,
    marginRight: 5,
  },
  inputInches: {
    flex: 1,
    marginLeft: 5,
  },
  inputSeparator: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activityLevels: {
    paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  activityLevelButton: {
    flexBasis: "47%",
    aspectRatio: 2.5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    color: "#3C4142",
    borderRadius: 5,
    padding: 5,
    alignContent: "center",
  },
  activityLevelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C4142",
  },
  genderContainer: {
    marginBottom: 20,
  },
  genderLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  genderOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 5,
  },

  selectedOption: {
    borderColor: "#3C4142",
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DietForm;
