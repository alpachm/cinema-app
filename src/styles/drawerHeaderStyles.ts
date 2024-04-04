import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const drawerHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.secondaryColor,
    paddingHorizontal: 25,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
