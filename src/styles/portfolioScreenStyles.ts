import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const portfolioScreenStyles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly"
    },
    QR: {
        width: 300,
        height: 300,
        alignSelf: "center"
    },
    textContainer: {
        flexDirection: "row"
    },
    text: {
        fontSize: 18,
        fontWeight: "300",
        color: globalColors.white
    },
    goBackButton: {
        backgroundColor: globalColors.primaryColor,
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    goBackButtonText: {
        color: globalColors.white,
        fontSize: 20,
        fontWeight: "400"
    }
})