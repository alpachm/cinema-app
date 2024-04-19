import React from "react";
import { Pressable, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { selectStreamingOptionModalStyles } from "../../styles/selectStreamingOptionModalStyles";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import { plataformasStreaming } from "../../utils/seriesScreen/stramingData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EModalTime } from "../../enums/ELoadingTime";

interface Props {
  isVisible: boolean;
  onHide: () => void;
  onSelect: () => void;
}

const SelectStreamingOptionModal = ({ isVisible, onHide, onSelect }: Props) => {
  return (
    <ReactNativeModal isVisible={isVisible} animationInTiming={EModalTime.fast}>
      <View style={selectStreamingOptionModalStyles.container}>
        <Text
          style={{
            ...globalStyles.title,
            ...selectStreamingOptionModalStyles.title,
          }}
        >
          Select your favorite platform to watch
        </Text>

        <View style={selectStreamingOptionModalStyles.streamingListContainer}>
          {plataformasStreaming.map((stm, index) => (
            <Pressable
              onPress={onSelect}
              key={index}
              style={({ pressed }) => ({
                ...selectStreamingOptionModalStyles.streaming,
                backgroundColor: pressed
                  ? globalColors.lightWhite
                  : "transparent",
              })}
            >
              <Ionicons
                name="play-circle"
                size={32}
                color={globalColors.primaryColor}
              />
              <Text>{stm}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={onHide}
          style={selectStreamingOptionModalStyles.closeButton}
        >
          <Text style={selectStreamingOptionModalStyles.closeButtonText}>
            Close
          </Text>
        </Pressable>
      </View>
    </ReactNativeModal>
  );
};

export default SelectStreamingOptionModal;
