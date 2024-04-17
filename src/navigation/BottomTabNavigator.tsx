import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SettingScreen from "../screens/setting/SettingScreen";
import MoviesStackNavigator from "./MoviesStackNavigator";
import SeriesStackNavigator from "./SeriesStackNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalColors } from "../styles/globalStyles";
import { Pressable, Text, View } from "react-native";
import { tabBarStyles } from "../styles/bottomTabNavigationStyles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyles.tabBar,
        tabBarInactiveTintColor: globalColors.lightWhite,
        tabBarActiveTintColor: globalColors.white,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: tabBarStyles.tabLabelStyle
      }}
    >
      <Tab.Screen name="Movies" component={MoviesStackNavigator} options={{
        tabBarIcon: (({focused}) => <Ionicons name="home-sharp" size={27} color={focused ? globalColors.white : globalColors.lightWhite} />),
      }} />
      <Tab.Screen name="Series" component={SeriesStackNavigator} options={{
        tabBarIcon: (({focused}) => <Ionicons name="time-sharp" size={27} color={focused ? globalColors.white : globalColors.lightWhite} /> )
      }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{
        tabBarIcon: (({focused}) => <Ionicons name="person-sharp" size={27} color={focused ? globalColors.white : globalColors.lightWhite} /> )
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
