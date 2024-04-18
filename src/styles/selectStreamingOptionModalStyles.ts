import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const selectStreamingOptionModalStyles = StyleSheet.create({
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
    streamingListContainer: {
        paddingLeft: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    streaming: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: 130
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