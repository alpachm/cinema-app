import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { cardMoviesStyles } from "../../styles/cardMoviesStyles";
import { globalStyles } from "../../styles/globalStyles";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";
import Stars from "./Stars";

interface Props {
  movie: IBasicMovieInfoEntity;
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
  const navigate = useNavigation<NavigationProp<RootMoviesStackParams>>();

  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        ...cardMoviesStyles.container,
        marginHorizontal: margin,
        height: cardHeight,
      })}
      onPress={() => navigate.navigate("MovieDetail", { movieId: movie.id })}
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
      <Stars popularity={movie.popularity} />
    </Pressable>
  );
};

export default CarrouselCard;
