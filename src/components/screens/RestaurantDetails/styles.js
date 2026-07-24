import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../theme";

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    ...typography.h1,
    paddingBottom: spacing.xs,
  },
  subtitle: {
    ...typography.bodyMuted,
  },
  bodyContainer: {
    padding: spacing.lg,
    backgroundColor: colors.bg,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: spacing.lg,
  },
  ActivityIndicator: {
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 400,
  },
});
