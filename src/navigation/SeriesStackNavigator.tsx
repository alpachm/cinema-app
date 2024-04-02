import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SeriesScreen from "../screens/series/SeriesScreen";
import SerieDetailScreen from "../screens/series/SerieDetailScreen";

export type RootSeriesStackParams = {
  ListSeries: undefined;
  SerieDetail: { serieId: number };
};

const Stack = createStackNavigator<RootSeriesStackParams>();

const SeriesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ListSeries" component={SeriesScreen} />
      <Stack.Screen name="SerieDetail" component={SerieDetailScreen} />
    </Stack.Navigator>
  );
};

export default SeriesStackNavigator;
