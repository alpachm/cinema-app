import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const primaryButtonStyles = StyleSheet.create({
  button: {
    width: 265,
    height: 57,
    borderRadius: 39,
    backgroundColor: globalColors.primaryColor,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    color: globalColors.white,
    fontSize: 20,
    fontWeight: "200",
  },
  icon: {
    position: "absolute",
    right: 32,
  },
});
