import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import LoginScreen from "../screens/login/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerHeader from "../components/shared/DrawerHeader";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { DrawerHeaderContext } from "../context/drawerHeaderContext";

export type RootDrawerParams = {
  Login: undefined;
  Home: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => {
  const { hideHeader } = useContext(DrawerHeaderContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => {
          return hideHeader.current ? null : <DrawerHeader />;
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={LoginScreen} options={{
        headerShown: false
      }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
