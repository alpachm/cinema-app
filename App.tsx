import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { DrawerHeaderProvider } from "./src/context/drawerHeaderContext";

const App = () => {
  return (
    <DrawerHeaderProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DrawerHeaderProvider>
  );
};

export default App;
