import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const checkoutScreenStyles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 40,
        left: 10,
      },
    subitle: {
        color: globalColors.primaryColor,
        fontWeight: "200",
        fontSize: 15
    },
    title: {
        marginBottom: 21
    },
    theaterScreen: {
        position: "relative"
    },
    theaterScreenImage: {
        position: "absolute"
    },
    chairsContainer: {},
    chairStatusInfoContainer: {},
    daysContainer: {},
    hoursContainer: {},
})