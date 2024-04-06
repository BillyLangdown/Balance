import { useTheme } from "@aws-amplify/ui-react-native";

function getTheme() {
  const {
    tokens: { colors },
  } = useTheme();

  const offWhite = "#F5F5F5";

  const theme = {
    name: "Custom Theme",
    tokens: {
      colors: {
        font: {
          primary: colors.vibrantOrange,
        },
        button: {
          secondary: "#007bff",
        },
        background: {
          primary: {
            value: offWhite,
          },
        },
      },
    },
  };

  return theme;
}

export default getTheme;
