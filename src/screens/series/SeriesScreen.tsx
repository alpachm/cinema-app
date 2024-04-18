import React, { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import useSeries from "../../hooks/series/useSeries";
import CarrouselCard from "../../components/shared/CarrouselCard";
import { seriesScreenStyles } from "../../styles/seriesScreenStyles";
import SelectStreamingOptionModal from "../../components/modals/SelectStreamingOptionModal";

const SeriesScreen = () => {
  const {onTheAir} = useSeries();
  const [isvisibleModal, setIsvisibleModal] = useState(false)

  return (
    <>
    <ScrollView style={{...globalStyles.container, ...seriesScreenStyles.container}}>
      <Text style={globalStyles.title}>Series</Text>
      <View style={seriesScreenStyles.seriesContainer}>
        {
          onTheAir.map(serie => (
            <CarrouselCard 
            key={`${serie.id}-${serie.title}`} 
            movie={serie}
            onPress={() => setIsvisibleModal(true)}
            />
          ))
        }
      </View>
    </ScrollView>

    <SelectStreamingOptionModal isVisible={isvisibleModal} onHide={() => setIsvisibleModal(false)} />
    </>
  );
};

export default SeriesScreen;
