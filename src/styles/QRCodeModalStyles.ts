import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const QRCodeModalStyles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        height: "80%",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 15
    },
    title: {
        color: "black"
    },
    QRImage: {
        alignSelf: "center",
        width: 300,
        height: 300
    },
    closeButton: {
        width: 35,
        alignSelf: "center"
    },
    closeButtonText: {
        fontSize: 15,
        fontWeight: "300",
        color: "red"
    }
})