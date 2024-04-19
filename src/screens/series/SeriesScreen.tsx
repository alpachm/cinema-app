import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { globalStyles, globalColors } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import useSeries from "../../hooks/series/useSeries";
import CarrouselCard from "../../components/shared/CarrouselCard";
import { seriesScreenStyles } from "../../styles/seriesScreenStyles";
import SelectStreamingOptionModal from "../../components/modals/SelectStreamingOptionModal";
import ReactNativeModal from "react-native-modal";
import QRCodeModal from "../../components/modals/QRCodeModal";
import { LoadingPageContext } from "../../context/loadingPageContext";
import LoadingPage from "../../components/shared/LoadingPage";
import { ELoadingTime, EModalTime } from "../../enums/ELoadingTime";

const SeriesScreen = () => {
  const {isLoading} = useContext(LoadingPageContext);
  const { onTheAir } = useSeries();
  const [isvisibleStreamingOptionsModal, setIsvisibleStreamingOptionsModal] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isVisibleQAModal, setIsVisibleQAModal] = useState(false);

  useEffect(() => {

    if(isLoadingModal){
      setTimeout(() => {
        setIsLoadingModal(false);
        setIsVisibleQAModal(true);
      }, ELoadingTime.fast);
    }

  }, [isLoadingModal])

  if(isLoading){
    return(
      <LoadingPage />
    )
  }

  return (
    <>
      <ScrollView
        style={{ ...globalStyles.container, ...seriesScreenStyles.container }}
      >
        <Text style={globalStyles.title}>Series</Text>
        <View style={seriesScreenStyles.seriesContainer}>
          {onTheAir.map((serie) => (
            <CarrouselCard
              key={`${serie.id}-${serie.title}`}
              movie={serie}
              onPress={() => setIsvisibleStreamingOptionsModal(true)}
            />
          ))}
        </View>
      </ScrollView>

      <SelectStreamingOptionModal
        isVisible={isvisibleStreamingOptionsModal}
        onHide={() => setIsvisibleStreamingOptionsModal(false)}
        onSelect={() => {
          setIsvisibleStreamingOptionsModal(false);
          setIsLoadingModal(true);
        }}
      />

      <QRCodeModal isVisible={isVisibleQAModal} onHide={() => setIsVisibleQAModal(false)} />

      <ReactNativeModal isVisible={isLoadingModal} animationIn={"zoomIn"} animationOut={"zoomOut"} animationInTiming={EModalTime.fast}>
        <ActivityIndicator color={globalColors.primaryColor} size="large" />
      </ReactNativeModal>
    </>
  );
};

export default SeriesScreen;
