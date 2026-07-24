import { useTheme } from "@aws-amplify/ui-react-native";

export const colors = {
  bg: "#0B0B0D",
  surface: "#18181C",
  surfaceHigh: "#212126",
  surfaceElevated: "#28282E",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.16)",
  accent: "#FF7A3D",
  accentDim: "rgba(255,122,61,0.16)",
  accentText: "#1A0E06",
  text: "#F5F5F7",
  textSecondary: "#A6A6AE",
  textMuted: "#6E6E76",
  success: "#3ECF8E",
  danger: "#FF5C5C",
  white: "#FFFFFF",
  overlay: "rgba(0,0,0,0.55)",
};

export const macroColors = {
  calories: "#FF7A3D",
  fat: "#FF6B6B",
  carbs: "#3ECF8E",
  protein: "#4C9EFF",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
};

export const typography = {
  display: { fontSize: 36, fontWeight: "800", color: colors.text },
  h1: { fontSize: 26, fontWeight: "700", color: colors.text },
  h2: { fontSize: 20, fontWeight: "700", color: colors.text },
  h3: { fontSize: 17, fontWeight: "600", color: colors.text },
  body: { fontSize: 15, fontWeight: "400", color: colors.text },
  bodyMuted: { fontSize: 15, fontWeight: "400", color: colors.textSecondary },
  caption: { fontSize: 13, fontWeight: "500", color: colors.textSecondary },
  overline: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
};

export const shadow = {
  card: {
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  raised: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
};

function getTheme() {
  const {
    tokens: { colors: amplifyColors },
  } = useTheme();

  const theme = {
    name: "Balance Dark Theme",
    tokens: {
      colors: {
        background: {
          primary: {
            value: colors.bg,
          },
          secondary: {
            value: colors.surface,
          },
        },
        font: {
          primary: colors.text,
          secondary: colors.textSecondary,
          interactive: {
            value: colors.accent,
          },
          inverse: {
            value: colors.accentText,
          },
        },
        border: {
          primary: {
            value: colors.border,
          },
        },
        // Amplify UI's filled/"primary" button reads from this color scale
        // (not from a `brand` or `button` token, despite the docs examples).
        primary: {
          10: { value: colors.accentDim },
          20: { value: "rgba(255,122,61,0.32)" },
          40: { value: "rgba(255,122,61,0.55)" },
          60: { value: colors.accent },
          80: { value: colors.accent },
          90: { value: "#E86A2E" },
          100: { value: "#D65F27" },
        },
      },
    },
  };

  return theme;
}

export default getTheme;
