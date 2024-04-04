import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../screens/login/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerHeader from "../components/shared/DrawerHeader";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export type RootDrawerParams = {
  Login: undefined;
  Home: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => {
          return <DrawerHeader />;
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
