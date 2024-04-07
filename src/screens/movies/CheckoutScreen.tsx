import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";

const CheckoutScreen = () => {
  const { movieId, title } =
    useRoute<RouteProp<RootMoviesStackParams, "Checkout">>().params;
  return (
    <View>
      <Text>{`movieId: ${movieId} title: ${title}`}</Text>
    </View>
  );
};

export default CheckoutScreen;
