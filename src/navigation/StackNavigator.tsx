import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/login/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export type RootStackParamns = {
  Login: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<RootStackParamns>();

const StackNavigator = () => {
  const config: TransitionSpec = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
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
        presentation: "modal",
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
