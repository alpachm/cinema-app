import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerHeader from "../components/shared/DrawerHeader";
import { DrawerHeaderContext } from "../context/drawerHeaderContext";
import { Pressable, Text, View } from "react-native";
import { drawerNavigatorStyles } from "../styles/drawerNavigatorStyles";
import PortfolioScreen from "../screens/portfolio/PortfolioScreen";
import { globalColors } from "../styles/globalStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamns } from "./StackNavigator";

export type RootDrawerParams = {
  Portfolio: undefined;
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
        drawerActiveBackgroundColor: globalColors.primaryColor,
        drawerActiveTintColor: globalColors.white,
        drawerInactiveTintColor: globalColors.white,
        drawerPosition: "right",
        drawerType: "back",
        drawerHideStatusBarOnOpen: true,
        
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamns>>();

  return (
    <DrawerContentScrollView
      contentContainerStyle={drawerNavigatorStyles.contentContainer}
      style={drawerNavigatorStyles.container}
      {...props}
    >
      <DrawerItemList {...props} />
      <Pressable onPress={() => navigation.navigate("Login")} style={drawerNavigatorStyles.exitButton}>
        <Text style={drawerNavigatorStyles.exitButtonText}>Exit</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};
