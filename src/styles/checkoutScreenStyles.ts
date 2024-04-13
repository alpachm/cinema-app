import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const checkoutScreenStyles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: globalColors.secondaryColor,
        flex: 1
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 10,
      },
    titlesContainer: {
        paddingHorizontal: 8,
        marginBottom: 33,
    },
    subitle: {
        color: globalColors.primaryColor,
        fontWeight: "200",
        fontSize: 15
    },
    title: {
        marginBottom: 21
    },
    theaterScreenImage: {
        width: "100%",
        position: "relative",
    },
    seatStatusInfoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 26,
        marginBottom: 31
    },
    seatStatusInfo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 7
    },
    seatStatusInfoText: {
        color: globalColors.white,
        fontWeight: "200",
        fontSize: 13
    },
    daysContainer: {
        paddingHorizontal: 17,
        marginBottom: 15
    },
    hoursContainer: {
        paddingHorizontal: 17,
        marginBottom: 36
    },
    buttonContainer: {
        alignItems: "center",
        marginBottom: 15
    },
    modal: {
        alignItems: "center",
        justifyContent: "center"
    },
    modalContent: {
        width: 300,
        height: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        backgroundColor: globalColors.white,
    },
    modalIconContainer: {
        width: 70,
        height: 70,
        borderWidth: 5,
        borderColor: globalColors.green,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    modalText: {
        fontWeight: "300",
        fontSize: 20
    }
})

export const seatStyles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 3,
    },
    available: {
        backgroundColor: "transparent",
        borderColor: globalColors.borderSeatColor
    },
    selected: {
        backgroundColor: globalColors.primaryColor,
        borderColor: globalColors.primaryColor
    },
    occupied: {
        backgroundColor: globalColors.lightWhite,
        borderColor: globalColors.lightWhite
    }
})

export const SeatsColumnsStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 50,
        marginTop: -130,
        marginBottom: 104,
    },
    columnsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    column: {
        gap: 12
    }
})

export const CarrouselDaysStyles = StyleSheet.create({
    daysContainer: {
        marginHorizontal: 5
    }
})

export const DayStyles = StyleSheet.create({
    container: {
        width: 45,
        height: 71,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    dayNumber: {
        fontWeight: "800",
        fontSize: 25,
    },
    day: {
        fontWeight: "600",
        fontSize: 15,
    }
})

export const CarrouselHoursStyles = StyleSheet.create({
    hoursContainer: {
        marginHorizontal: 10
    }
})

export const HourStyles = StyleSheet.create({
    container: {
        width:63,
        height: 22,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "800",
        fontSize: 15
    }
})