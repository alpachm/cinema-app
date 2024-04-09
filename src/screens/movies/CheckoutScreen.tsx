import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import { checkoutScreenStyles } from "../../styles/checkoutScreenStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const { title } =
    useRoute<RouteProp<RootMoviesStackParams, "Checkout">>().params;
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...globalStyles.container,
        paddingTop: top + 85,
      }}
    >
      <Pressable
        style={checkoutScreenStyles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={42}
          color={globalColors.white}
        />
      </Pressable>
      <Text style={checkoutScreenStyles.subitle}>Select seats for</Text>
      <Text style={{ ...globalStyles.title, ...checkoutScreenStyles.title }}>
        {title}
      </Text>
      <View style={checkoutScreenStyles.theaterScreen}>
        <Image
          style={checkoutScreenStyles.theaterScreenImage}
          source={require("./../../../assets/TheaterScreen.png")}
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;
