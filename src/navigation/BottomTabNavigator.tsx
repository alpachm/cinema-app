import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SettingScreen from "../screens/setting/SettingScreen";
import MoviesStackNavigator from "./MoviesStackNavigator";
import SeriesStackNavigator from "./SeriesStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Movies" component={MoviesStackNavigator} />
      <Tab.Screen name="Series" component={SeriesStackNavigator} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
