import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profiles from "../../../../assets/data/profiles.json";
import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Card, Button } from "../../ui";
import { colors, radius, spacing, typography } from "../../../theme";

const Profile = () => {
  const { signOut } = useAuthenticator();
  const profile = profiles[0];

  const ListRow = ({ item }) => {
    if (item.key === "Sign Out") return null;
    return (
      <TouchableOpacity>
        <Card style={styles.item}>
          <Text style={styles.itemText}>{item.key}</Text>
          <MaterialIcons name="chevron-right" size={20} color={colors.textMuted} />
        </Card>
      </TouchableOpacity>
    );
  };

  const data = [
    { key: "Settings" },
    { key: "Privacy" },
    { key: "Help" },
    { key: "Promotions" },
    { key: "Set up your business profile" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.headerSection}>
            <Text style={styles.hey}>Hey,</Text>
            <Text style={styles.title}>{profile.fullname}</Text>
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Ionicons name="wallet" size={26} color={colors.text} />
              </View>
              <View style={styles.iconContainer}>
                <Ionicons name="heart" size={26} color={colors.text} />
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name="history" size={24} color={colors.text} />
              </View>
            </View>
          </View>
        )}
        renderItem={ListRow}
        ListFooterComponent={() => (
          <Button
            label="Sign Out"
            variant="danger"
            onPress={() => signOut()}
            style={styles.signout}
          />
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  contentContainer: {
    paddingTop: 64,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  headerSection: {
    marginBottom: spacing.xl,
  },
  hey: {
    ...typography.display,
    fontSize: 34,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.lg,
  },
  iconRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  iconContainer: {
    backgroundColor: colors.surfaceHigh,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  signout: {
    marginTop: spacing.lg,
  },
});
