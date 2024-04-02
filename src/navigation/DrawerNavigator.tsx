import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../screens/login/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";

export type RootDrawerParams = {
  Login: undefined;
  Home: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      title: "",
      headerStyle: {
        elevation: 0,
        backgroundColor: "transparent",
      }
    }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
