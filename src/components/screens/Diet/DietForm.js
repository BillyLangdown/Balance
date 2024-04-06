import React, { useState } from "react";
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

const DietForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessGoal: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setCurrentPage(1); // Reset current page when modal is closed
  };

  const handleSaveDiet = () => {
    // Logic to save user data goes here
    setIsModalVisible(false); // Close the modal after saving
    setCurrentPage(1); // Reset current page after saving
  };

  return (
    <>
      <View style={styles.bottomSectionContainer}>
        <Text>Goals changed?</Text>
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
                  maxLength={3} // Restrict input to 3 digits
                  value={userData.age.toString()}
                  onChangeText={(text) => {
                    // Validate input to be within the range 14 to 100
                    const age = parseInt(text);
                    if (age >= 14 && age <= 100) {
                      setUserData({ ...userData, age: age });
                    }
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Enter your height (ft.in)"
                  maxLength={4} // Restrict input to 4 characters
                  value={userData.height}
                  onChangeText={(text) => {
                    // Validate input to match the format of ft and inches (e.g., 5.8)
                    // Assuming the input format is 'feet.inches'
                    const [feet, inches] = text.split(".");
                    const height = parseFloat(feet) + parseFloat(inches) / 12; // Convert inches to feet
                    if (!isNaN(height)) {
                      setUserData({ ...userData, height: text });
                    }
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Enter your weight (kg)"
                  keyboardType="numeric"
                  maxLength={5} // Restrict input to 5 digits
                  value={userData.weight}
                  onChangeText={(text) => {
                    // Validate input to be a positive number
                    const weight = parseFloat(text);
                    if (!isNaN(weight) && weight > 0) {
                      setUserData({ ...userData, weight: text });
                    }
                  }}
                />
                <Pressable
                  style={[styles.button, styles.nextButton]}
                  onPress={handleNextPage}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </Pressable>
              </>
            )}

            {/* Page 2: Fitness Goals */}
            {currentPage === 2 && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Select your fitness goal"
                  editable={false} // Prevent editing
                  value={userData.fitnessGoal}
                />
                <View style={styles.fitnessGoals}>
                  <Pressable
                    style={[styles.button, styles.fitnessGoalButton]}
                    onPress={() =>
                      setUserData({ ...userData, fitnessGoal: "Muscle Gain" })
                    }
                  >
                    <MaterialCommunityIcons
                      name="arm-flex"
                      size={38}
                      color="#FAF9F6"
                    />
                    <Text style={styles.buttonTextSmall}>Gain weight</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.fitnessGoalButton]}
                    onPress={() =>
                      setUserData({ ...userData, fitnessGoal: "Weight Loss" })
                    }
                  >
                    <FontAwesome6
                      name="weight-scale"
                      size={30}
                      color="#FAF9F6"
                    />
                    <Text style={styles.buttonTextSmall}>Weight Loss</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.fitnessGoalButton]}
                    onPress={() =>
                      setUserData({ ...userData, fitnessGoal: "Maintenance" })
                    }
                  >
                    <MaterialIcons name="balance" size={34} color="#FAF9F6" />
                    <Text style={styles.buttonTextSmall}> Maintenance</Text>
                  </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
  },
  setDiet: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C4142",
    width: 150,
    padding: 10,
    borderRadius: 20,
    margin: 5,
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
  fitnessGoals: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  fitnessGoalButton: {
    width: 82,
    height: 82,
    backgroundColor: "#3C4142",
  },
  closeIcon: {
    marginLeft: "auto",
    paddingBottom: 5,
  },
  buttonTextSmall: {
    color: "#FAF9F6",
    fontSize: 10,
  },
});

export default DietForm;
