import React, { useContext } from "react";
import { Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { moviesScreenStyles } from "../../styles/moviesScreenStyles";
import useMovies from "../../hooks/movies/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import PrincipalHorizontalCarrousel from "../../components/shared/PrincipalHorizontalCarrousel";
import HorizontalCarrousel from "../../components/shared/HorizontalCarrousel";
import { LoadingPageContext } from "../../context/loadingPageContext";
import LoadingPage from "../../components/shared/LoadingPage";

const MoviesScreen = () => {
  const {isLoading} = useContext(LoadingPageContext)

  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    popularNextPage,
    topRatedNextPage,
    upcomingNextPage,
  } = useMovies();

  if(isLoading){
    return <LoadingPage />;
  }

  return (
    <ScrollView
      style={{ ...globalStyles.container, ...moviesScreenStyles.container }}
    >
      <Text style={{ ...globalStyles.title }}>Now playing</Text>
      <PrincipalHorizontalCarrousel data={nowPlayingMovies} />

      <Text style={globalStyles.title}>Populars</Text>
      <HorizontalCarrousel
        movies={popularMovies}
        loadNextPage={popularNextPage}
      />

      <Text style={globalStyles.title}>Top rated</Text>
      <HorizontalCarrousel
        movies={topRatedMovies}
        loadNextPage={topRatedNextPage}
      />

      <Text style={globalStyles.title}>Upcoming</Text>
      <HorizontalCarrousel
        movies={upcomingMovies}
        loadNextPage={upcomingNextPage}
        isPaddingBotton
      />
    </ScrollView>
  );
};

export default MoviesScreen;
