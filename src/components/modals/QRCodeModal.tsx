import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { QRCodeModalStyles } from "../../styles/QRCodeModalStyles";
import { globalStyles } from "../../styles/globalStyles";
import { EModalTime } from "../../enums/ELoadingTime";

interface Props {
  isVisible: boolean;
  onHide: () => void;
}

const QRCodeModal = ({ isVisible, onHide }: Props) => {
  return (
    <ReactNativeModal isVisible={isVisible} animationInTiming={EModalTime.fast}>
      <View style={QRCodeModalStyles.container}>
        <Text style={{...globalStyles.title, ...QRCodeModalStyles.title}}>
          Scan the QR code and see my portfolio
        </Text>

        <Image 
        style={QRCodeModalStyles.QRImage}
        source={require("./../../../assets/QRCode.png")} />

        <Pressable onPress={onHide} style={QRCodeModalStyles.closeButton}>
          <Text style={QRCodeModalStyles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
    </ReactNativeModal>
  );
};

export default QRCodeModal;
