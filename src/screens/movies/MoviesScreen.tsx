import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { moviesScreenStyles } from "../../styles/moviesScreenStyles";
import useMovies from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import PrincipalHorizontalCarrousel from "../../components/shared/PrincipalHorizontalCarrousel";
import HorizontalCarrousel from "../../components/shared/HorizontalCarrousel";

const MoviesScreen = () => {
  const { nowPlayingMovies, popularMovies, popularNextPage } = useMovies();

  return (
    <ScrollView
      style={{ ...globalStyles.container, ...moviesScreenStyles.container }}
    >
      <Text style={{ ...globalStyles.title }}>Now playing</Text>
      <PrincipalHorizontalCarrousel data={nowPlayingMovies} />

      <Text style={globalStyles.title}>Populars</Text>
      <HorizontalCarrousel movies={popularMovies} loadNextPage={popularNextPage} 
      />
    </ScrollView>
  );
};

export default MoviesScreen;
