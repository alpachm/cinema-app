import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { globalStyles, globalColors } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import useSeries from "../../hooks/series/useSeries";
import CarrouselCard from "../../components/shared/CarrouselCard";
import { seriesScreenStyles } from "../../styles/seriesScreenStyles";
import SelectStreamingOptionModal from "../../components/modals/SelectStreamingOptionModal";
import ReactNativeModal from "react-native-modal";
import QRCodeModal from "../../components/modals/QRCodeModal";

const SeriesScreen = () => {
  const { onTheAir } = useSeries();
  const [isvisibleStreamingOptionsModal, setIsvisibleStreamingOptionsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleQAModal, setIsVisibleQAModal] = useState(false);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
        setIsVisibleQAModal(true);
      }, 800);
    }

  }, [isLoading])

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
          setIsLoading(true);
        }}
      />

      <QRCodeModal isVisible={isVisibleQAModal} onHide={() => setIsVisibleQAModal(false)} />

      <ReactNativeModal isVisible={isLoading} animationIn={"zoomIn"} animationOut={"zoomOut"} animationInTiming={200}>
        <ActivityIndicator color={globalColors.primaryColor} size="large" />
      </ReactNativeModal>
    </>
  );
};

export default SeriesScreen;
