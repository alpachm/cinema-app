import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const drawerNavigatorStyles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.secondaryColor,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20
    },
    exitButton: {
        marginLeft: 20,
        marginTop: 350,
        backgroundColor: globalColors.primaryColor,
        width: 50,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    exitButtonText: {
        fontWeight: "400",
        color: globalColors.white,
    }
})