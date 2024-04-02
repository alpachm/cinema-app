import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const loginScreenStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 14,
  },
  textContainer: {
    alignItems: "flex-end",
  },
  cinema: {
    color: globalColors.primaryColor,
    fontSize: 60,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: -12,
  },
  app: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  footerTex: {
    marginTop: 265,
    color: globalColors.lightWhite,
    fontWeight: "200",
    opacity: 0.3,
  },
});
