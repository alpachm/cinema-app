import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MoviesScreen from "../screens/movies/MoviesScreen";
import MovieDetailScreen from "../screens/movies/MovieDetailScreen";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import CheckoutScreen from "../screens/movies/CheckoutScreen";

export type RootMoviesStackParams = {
  ListMovies: undefined;
  MovieDetail: { movieId: number };
  Checkout: { movieId: number; title: string };
};

const Stack = createStackNavigator<RootMoviesStackParams>();

const MoviesStackNavigator = () => {
  const config: TransitionSpec = {
    animation: "spring",
    config: {
      stiffness: 3000,
      damping: 100,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <Stack.Screen name="ListMovies" component={MoviesScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStackNavigator;
