import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { RootStackParamns } from "../../navigation/StackNavigator";
import { globalStyles } from "../../styles/globalStyles";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { loginScreenStyles } from "../../styles/loginScreenStyles";

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamns>>();

  return (
    <View style={{ ...globalStyles.container, ...loginScreenStyles.container }}>
      <View style={loginScreenStyles.textContainer}>
        <Text style={loginScreenStyles.cinema}>Cinema</Text>
        <Text style={loginScreenStyles.app}>App</Text>
      </View>

      <PrimaryButton
        label="Enter now"
        onPress={() => navigation.navigate("Drawer")}
        isOnLogin
      />

      <Text style={loginScreenStyles.footerTex}>Develop by Alex</Text>
    </View>
  );
};

export default LoginScreen;
