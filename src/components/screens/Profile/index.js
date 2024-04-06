import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profiles from "../../../../assets/data/profiles.json";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  const { signOut } = useAuthenticator();
  const profile = profiles[0];

  const SignoutButton = ({ item }) => {
    if (item.key === "Sign Out") {
      return (
        <TouchableOpacity onPress={() => signOut()}>
          <View style={styles.signout}>
            <Text style={styles.signoutText}>{item.key}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return <Text style={styles.item}>{item.key}</Text>;
  };

  const data = [
    { key: "Settings" },
    { key: "Privacy" },
    { key: "Help" },
    { key: "Promotions" },
    { key: "Set up your business profile" },
    { key: "Sign Out" },
  ];

  return (
    <LinearGradient
      colors={["#3C4142", "#f2f2f2"]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 0.3]}
    >
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <View style={styles.ListHeaderComponent}>
            <View style={styles.headerRow}>
              <View style={styles.profileInfo}>
                <Text style={styles.hey}>Hey,</Text>
                <Text style={styles.title}>{profile.fullname}</Text>
              </View>
            </View>
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Ionicons name="wallet" size={32} color="#333" />
              </View>
              <View style={styles.iconContainer}>
                <Ionicons name="heart" size={32} color="#333" />
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name="history" size={32} color="#333" />
              </View>
            </View>
          </View>
        )}
        renderItem={SignoutButton}
        ListFooterComponent={() => <View style={styles.footer} />}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
      />
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerRow: {
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  profileInfo: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "",
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "lightgrey",
  },
  item: {
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: "#EDEDED",
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: "#333",
  },
  signout: {
    marginTop: 40,
    backgroundColor: "orange",
    marginVertical: 10,
    paddingVertical: 12,
    marginHorizontal: 60,
    borderRadius: 25,
    alignItems: "center",
  },
  signoutText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  iconContainer: {
    backgroundColor: "lightgrey",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ListHeaderComponent: {
    paddingHorizontal: 10,
    borderBottomColor: "lightgrey",
    paddingBottom: 20,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  hey: {
    fontSize: 60,
    fontWeight: "700",
    color: "white",
  },
});
