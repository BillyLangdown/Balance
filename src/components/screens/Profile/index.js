import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import profiles from "../../../../assets/data/profiles.json";
const profile = profiles[0];
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>{profile.fullname}</Text>
            <Text style={styles.subtitle}> "{profile.username}"</Text>
          </View>
          <Image source={{ uri: profile.image }} style={styles.image} />
        </View>
        <View style={styles.iconRow}>
          <View style={styles.container}>
            <Ionicons name="wallet-outline" size={24} color="black" />
            <Text>Wallet</Text>
          </View>
          <View style={styles.container}>
            <MaterialCommunityIcons name="history" size={24} color="black" />
            <Text>History</Text>
          </View>
          <View style={styles.container}>
            <MaterialIcons name="favorite" size={24} color="black" />
            <Text>Favorites</Text>
          </View>
        </View>

        <FlatList
          data={[
            { key: "Settings" },
            { key: "About" },
            { key: "Privacy" },
            { key: "Help" },
            { key: "Promotions" },
            { key: "Set up your business profile" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 80,
    marginLeft: 15,
    fontSize: 35,
    fontWeight: "bold",
  },
  image: {
    marginTop: 80,
    marginRight: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 3,

    borderColor: "lightgrey",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "lightgrey",
    padding: 10,
    width: 85,
    height: 85,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginLeft: 15,
    fontWeight: "300",
  },
  item: {
    fontSize: 17,
    fontWeight: "500",
    backgroundColor: "#EDEDED",
    margin: 5,
    padding: 10,
    borderRadius: 25,
    paddingLeft: 30,
  },
});
