import React from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { drawerHeaderStyles } from "../../styles/drawerHeaderStyles";
import MenuIcon from "../icons/MenuIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalColors } from "../../styles/globalStyles";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootDrawerParams } from "../../navigation/DrawerNavigator";

const DrawerHeader = () => {
  const navigation = useNavigation<NavigationProp<RootDrawerParams>>();

  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top + 10, ...drawerHeaderStyles.container }}>
      <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
        <MenuIcon color={globalColors.white} />
      </Pressable>
      <Ionicons name="search-outline" size={32} color={globalColors.white} />
    </View>
  );
};

export default DrawerHeader;
