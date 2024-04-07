import React, { ReactNode } from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalColors } from "../../styles/globalStyles";

interface Props {
  popularity: number;
  isPaddingLeft?: boolean;
}

const Stars = ({ popularity, isPaddingLeft }: Props) => {
  const popularityByStars = (popularity / 10) * 5;
  const arrayStarts = popularityByStars.toString().split(".");
  const stars = parseInt(arrayStarts[0]);

  const renderStars = (): ReactNode => {
    const NUMBER_STARS = 5;
    const arrayStars: ReactNode[] = [];

    for (let i = 0; i < NUMBER_STARS; i++) {
      const randomId = Math.floor(Math.random() * 2000);

      arrayStars.push(
        <Ionicons
          key={randomId}
          name="star"
          size={15}
          color={i < stars ? globalColors.primaryColor : globalColors.white}
        />
      );
    }

    return arrayStars.map((star) => star);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: isPaddingLeft ? 8 : 0,
      }}
    >
      {renderStars()}
    </View>
  );
};

export default Stars;
