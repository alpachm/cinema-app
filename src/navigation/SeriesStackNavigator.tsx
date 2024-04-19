import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SeriesScreen from "../screens/series/SeriesScreen";

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
    </Stack.Navigator>
  );
};

export default SeriesStackNavigator;
