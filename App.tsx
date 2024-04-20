import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { DrawerHeaderProvider } from "./src/context/drawerHeaderContext";
import { LoadingPageContextProvider } from "./src/context/loadingPageContext";
import { StatusBar } from "expo-status-bar";
import { globalColors } from "./src/styles/globalStyles";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={globalColors.secondaryColor} />
      <LoadingPageContextProvider>
        <DrawerHeaderProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </DrawerHeaderProvider>
      </LoadingPageContextProvider>
    </>
  );
};

export default App;
