import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import { portfolioScreenStyles } from "../../styles/portfolioScreenStyles";
import { useNavigation } from "@react-navigation/native";

const PortfolioScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{ ...globalStyles.container, ...portfolioScreenStyles.container }}
    >
      <Text style={globalStyles.title}>
        Thanks for seeing my work. Scan the QR code and see my portfolio
      </Text>

      <Image
        style={portfolioScreenStyles.QR}
        source={require("./../../../assets/QRCode.png")}
      />

      <View style={portfolioScreenStyles.textContainer}>
        <Text style={portfolioScreenStyles.text}>
          Or click here and go to the page{" "}
        </Text>
        <Text
          style={{
            ...portfolioScreenStyles.text,
            color: globalColors.primaryColor,
          }}
          onPress={() =>
            Linking.openURL("https://alex-pacheco-portafolio.netlify.app/")
          }
        >
          click
        </Text>
      </View>

      <Pressable
        onPress={() => navigation.goBack()}
        style={portfolioScreenStyles.goBackButton}
      >
        <Text style={portfolioScreenStyles.goBackButtonText}>Go back</Text>
      </Pressable>
    </View>
  );
};

export default PortfolioScreen;
