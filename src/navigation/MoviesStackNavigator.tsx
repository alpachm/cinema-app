import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MoviesScreen from "../screens/movies/MoviesScreen";
import MovieDetailScreen from "../screens/movies/MovieDetailScreen";

export type RootMoviesStackParams = {
  ListMovies: undefined;
  MovieDetail: { movieId: number };
};

const Stack = createStackNavigator<RootMoviesStackParams>();

const MoviesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ListMovies" component={MoviesScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStackNavigator;
