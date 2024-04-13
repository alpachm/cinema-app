import React from "react";
import { Text, View } from "react-native";
import { DayStyles } from "../../styles/checkoutScreenStyles";
import { globalColors } from "../../styles/globalStyles";
import { IDay } from "../../interfaces/checkoutScreen-interfaces";

interface Props {
    day: IDay;
    isSelected: boolean;
}

const Day = ({ day, isSelected }: Props) => {

  return (
    <View
      style={{
        ...DayStyles.container,
        backgroundColor: isSelected
          ? globalColors.primaryColor
          : globalColors.secondaryLightColor,
      }}
    >
      <Text style={{...DayStyles.dayNumber, color: isSelected ? globalColors.white : globalColors.borderSeatColor}}>{day.dayNumber}</Text>
      <Text style={{...DayStyles.day, color: isSelected ? globalColors.white : globalColors.borderSeatColor}}>{day.day}</Text>
    </View>
  );
};

export default Day;
