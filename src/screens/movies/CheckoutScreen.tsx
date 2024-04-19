import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import { checkoutScreenStyles } from "../../styles/checkoutScreenStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import SeatsColumns from "../../components/checkoutScreen/SeatsColumns";
import { ScrollView } from "react-native-gesture-handler";
import Seat from "../../components/checkoutScreen/Seat";
import CarrouselDays from "../../components/checkoutScreen/CarrouselDays";
import CarrouselHours from "../../components/checkoutScreen/CarrouselHours";
import PrimaryButton from "../../components/shared/PrimaryButton";
import ReactNativeModal from "react-native-modal";
import { ELoadingTime, EModalTime } from "../../enums/ELoadingTime";

const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp<RootMoviesStackParams>>();
  const { title } =
    useRoute<RouteProp<RootMoviesStackParams, "Checkout">>().params;
  const { top } = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false)
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  useEffect(() => {
    
    if(isLoading){
      setTimeout(() => {
        setIsLoading(false); 
        setIsVisibleModal(true)
      }, ELoadingTime.fast);
    }

    if(isVisibleModal){
      setTimeout(() => {
        setIsVisibleModal(false);
        navigation.navigate("ListMovies")
      }, ELoadingTime.long);
    }

  }, [isLoading, isVisibleModal])

  return (
    <View
      style={{
        ...checkoutScreenStyles.container,
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
      <ScrollView>
        <View style={checkoutScreenStyles.titlesContainer}>
          <Text style={checkoutScreenStyles.subitle}>Select seats for</Text>
          <Text
            style={{ ...globalStyles.title, ...checkoutScreenStyles.title }}
          >
            {title}
          </Text>
        </View>
        <Image
          style={checkoutScreenStyles.theaterScreenImage}
          source={require("./../../../assets/TheaterScreen.png")}
        />

        <SeatsColumns />

        <View style={checkoutScreenStyles.seatStatusInfoContainer}>
          <View style={checkoutScreenStyles.seatStatusInfo}>
            <Seat isOccupied is_Selected />
            <Text style={checkoutScreenStyles.seatStatusInfoText}>
              Selected
            </Text>
          </View>
          <View style={checkoutScreenStyles.seatStatusInfo}>
            <Seat isOccupied />
            <Text style={checkoutScreenStyles.seatStatusInfoText}>
              Occupied
            </Text>
          </View>
          <View style={checkoutScreenStyles.seatStatusInfo}>
            <Seat isOccupied isAvailable />
            <Text style={checkoutScreenStyles.seatStatusInfoText}>
              Available
            </Text>
          </View>
        </View>

        <View style={checkoutScreenStyles.daysContainer}>
          <CarrouselDays />
        </View>

        <View style={checkoutScreenStyles.hoursContainer}>
          <CarrouselHours />
        </View>

        <View style={checkoutScreenStyles.buttonContainer}>
          <PrimaryButton label="Checkout" onPress={() => setIsLoading(true)} />
        </View>

        <ReactNativeModal isVisible={isVisibleModal} style={checkoutScreenStyles.modal} animationInTiming={EModalTime.fast}>
          <View style={checkoutScreenStyles.modalContent}>
            <View style={checkoutScreenStyles.modalIconContainer}>
              <Ionicons name="checkmark-done-outline" size={50} color={globalColors.green} />
            </View>
            <Text style={checkoutScreenStyles.modalText}>Successful purchase</Text>
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={isLoading} animationIn={"fadeIn"} animationOut={"fadeOut"} animationInTiming={EModalTime.fast}>
          <ActivityIndicator size={"large"} color={globalColors.primaryColor} />
        </ReactNativeModal>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
