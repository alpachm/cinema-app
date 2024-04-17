import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const tabBarStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: globalColors.primaryColor,
    height: 60,
  },
  tabLabelStyle: { marginTop: -10, marginBottom: 8 },
});
