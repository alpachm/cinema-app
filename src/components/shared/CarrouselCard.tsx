import React, { ReactNode } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import { cardMoviesStyles } from "../../styles/cardMoviesStyles";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IPopularMoviesEntity } from "../../entities/IPopularMovies-entity";

interface Props {
  movie: INowPlayingMoviesEntity | IPopularMoviesEntity;
  height?: number;
  width?: number;
  margin?: number;
  maxWidth?: number;
  cardHeight?: number;
}

const CarrouselCard = ({
  movie,
  height = 200,
  width = 140,
  margin = 5,
  maxWidth = 140,
  cardHeight = 270,
}: Props) => {
  const popularityByStars = (movie.popularity / 10) * 5;
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
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        ...cardMoviesStyles.container,
        marginHorizontal: margin,
        height: cardHeight,
      })}
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
      <View style={cardMoviesStyles.containerStars}>{renderStars()}</View>
    </Pressable>
  );
};

export default CarrouselCard;
