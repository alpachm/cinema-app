import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { daysData } from "../../utils/checkoutScreen/daysData";
import Day from "./Day";
import { CarrouselDaysStyles } from "../../styles/checkoutScreenStyles";

const CarrouselDays = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>()

  const handleSelect = (index: number) => {
    setSelectedDayIndex(index)
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {daysData.map((day, index) => (
        <Pressable 
        style={CarrouselDaysStyles.daysContainer}
        onPress={() => handleSelect(index)}>
          <Day key={day.id} day={day} isSelected={index === selectedDayIndex} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CarrouselDays;
