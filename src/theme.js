import { useTheme } from "@aws-amplify/ui-react-native";

function getTheme() {
  const {
    tokens: { colors },
  } = useTheme();

  const theme = {
    name: "Custom Theme",
    tokens: {
      colors: {
        background: {
          primary: {
            value: "#3C4142",
          },
          secondary: {
            value: colors.red["100"],
          },
        },
        font: {
          primary: "#F5F5F5",
          secondary: "#F5F5F5",
          interactive: {
            value: "#ffa400",
          },
        },
        brand: {
          primary: {
            primary: "#ffa400",
          },
        },
        button: {
          secondary: {
            backgroundColor: "#ffa400",
          },
        },
      },
    },
  };

  return theme;
}

export default getTheme;
