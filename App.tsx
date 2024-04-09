import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { DrawerHeaderProvider } from "./src/context/drawerHeaderContext";
import { LoadingPageContextProvider } from "./src/context/loadingPageContext";

const App = () => {
  return (
    <LoadingPageContextProvider>
      <DrawerHeaderProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </DrawerHeaderProvider>
    </LoadingPageContextProvider>
  );
};

export default App;
