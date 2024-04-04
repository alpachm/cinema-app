import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { moviesScreenStyles } from "../../styles/moviesScreenStyles";
import CarrouselNowPlaying from "../../components/movies/CarrouselNowPlaying";
import useMovies from "../../hooks/useMovies";

const MoviesScreen = () => {
  const { nowPlayingMovies } = useMovies();

  return (
    <View
      style={{ ...globalStyles.container, ...moviesScreenStyles.container }}
    >
      <Text style={{ ...globalStyles.title }}>Now playing</Text>
      <CarrouselNowPlaying data={nowPlayingMovies} />

      <Text style={globalStyles.title}>Populars</Text>
    </View>
  );
};

export default MoviesScreen;
