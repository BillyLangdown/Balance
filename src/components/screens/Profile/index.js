import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profiles from "../../../../assets/data/profiles.json";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Profile = () => {
  const profile = profiles[0];

  const SignoutButton = ({ item }) => {
    if (item.key === "Sign Out") {
      return (
        <TouchableOpacity onPress={() => handleSignOut()}>
          <View style={styles.signout}>
            <Text style={styles.signoutText}>{item.key}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return <Text style={styles.item}>{item.key}</Text>;
  };

  const handleSignOut = () => {
    console.log("Sign out button pressed");
  };

  const data = [
    { key: "Settings" },
    { key: "About" },
    { key: "Privacy" },
    { key: "Help" },
    { key: "Promotions" },
    { key: "Set up your business profile" },
    { key: "Sign Out" },
  ];

  return (
    <FlatList
      data={data}
      ListHeaderComponent={() => (
        <View style={styles.headerRow}>
          <View style={styles.profileInfo}>
            <Text style={styles.title}>{profile.fullname}</Text>
            <Text style={styles.subtitle}>@{profile.username}</Text>
          </View>
          <Image source={{ uri: profile.image }} style={styles.image} />
        </View>
      )}
      renderItem={SignoutButton}
      ListFooterComponent={() => <View style={styles.footer} />}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.contentContainer}
    />
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
    paddingTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileInfo: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
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
    marginTop: 50,
    backgroundColor: "red",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  signoutText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
