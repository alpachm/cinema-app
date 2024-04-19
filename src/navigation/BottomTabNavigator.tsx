import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MoviesStackNavigator from "./MoviesStackNavigator";
import SeriesStackNavigator from "./SeriesStackNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalColors } from "../styles/globalStyles";
import { tabBarStyles } from "../styles/bottomTabNavigationStyles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyles.tabBar,
        tabBarInactiveTintColor: globalColors.white,
        tabBarActiveTintColor: globalColors.white,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: tabBarStyles.tabLabelStyle
      }}
    >
      <Tab.Screen name="Movies" component={MoviesStackNavigator} options={{
        tabBarIcon: (({focused}) => <Ionicons name="home-sharp" size={27} color={focused ? globalColors.secondaryColor : globalColors.white} />),
      }} />
      <Tab.Screen name="Series" component={SeriesStackNavigator} options={{
        tabBarIcon: (({focused}) => <Ionicons name="time-sharp" size={27} color={focused ? globalColors.secondaryColor : globalColors.white} /> )
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
