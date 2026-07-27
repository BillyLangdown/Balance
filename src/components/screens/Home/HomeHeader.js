import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BasketHeader from "../../BasketHeader";
import { colors, spacing, typography, radius } from "../../../theme";

const HomeHeader = () => {
  return (
    <LinearGradient
      colors={[colors.surface, colors.bg]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 1]}
    >
      <View style={styles.topRow}>
        <View style={styles.subtitleBox}>
          <Text style={styles.subtitle}>nutrition made easy</Text>
        </View>
        <BasketHeader />
      </View>
      <Text style={styles.title}>balance</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },
  title: {
    ...typography.display,
    fontSize: 44,
  },
  subtitle: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
  },
  subtitleBox: {
    backgroundColor: colors.accentDim,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
  },
});

export default HomeHeader;
