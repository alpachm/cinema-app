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
    paddingHorizontal: 8,
  },
  paddingVertical: {
    paddingVertical: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: globalColors.white,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: globalColors.white,
    maxWidth: 165,
    paddingLeft: 8,
  },
  paragraph: {
    fontSize: 15,
    fontWeight: "200",
    lineHeight: 25,
    textAlign: "justify",
    color: globalColors.white,
  },
});
