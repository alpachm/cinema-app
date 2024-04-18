import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { cardMoviesStyles } from "../../styles/cardMoviesStyles";
import { globalStyles } from "../../styles/globalStyles";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import Stars from "./Stars";
import { IBasicSerieInfoEntity } from "../../entities/IBasicSerieInfo-entity";

interface Props {
  movie: IBasicMovieInfoEntity | IBasicSerieInfoEntity;
  onPress: () => void;
  height?: number;
  width?: number;
  margin?: number;
  maxWidth?: number;
  cardHeight?: number;
}

const CarrouselCard = ({
  movie,
  onPress,
  height = 200,
  width = 140,
  margin = 5,
  maxWidth = 140,
  cardHeight = 270,
}: Props) => {

  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        ...cardMoviesStyles.container,
        marginHorizontal: margin,
        height: cardHeight,
      })}
      onPress={onPress}
    >
      <View>
        <Image
          source={{ uri: movie.poster }}
          style={{ ...cardMoviesStyles.poster, height, width }}
        />
        <Text style={{ ...globalStyles.subtitle, maxWidth }}>
          {movie.title}
        </Text>
      </View>
      <Stars popularity={movie.popularity} isPaddingLeft />
    </Pressable>
  );
};

export default CarrouselCard;
