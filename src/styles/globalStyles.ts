import { StyleSheet } from "react-native";

export const globalColors = {
  primaryColor: "#FE0849",
  secondaryColor: "#13262F",
  white: "#FFFFFF",
  lightWhite: "#A0A0A0",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.secondaryColor,
    paddingHorizontal: 17,
  },
  paddingVertical: {
    paddingVertical: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: globalColors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: globalColors.white,
  },
  paragraph: {
    fontSize: 11,
    fontWeight: "400",
    color: globalColors.white,
  },
});
