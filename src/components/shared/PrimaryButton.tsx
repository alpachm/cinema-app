import React from "react";
import { Pressable, Text } from "react-native";
import { primaryButtonStyles } from "../../styles/primaryButtonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalColors } from "../../styles/globalStyles";

interface Props {
  label: string;
  onPress: () => void;
  isOnLogin?: boolean;
}

const PrimaryButton = ({ label, onPress, isOnLogin }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        marginTop: isOnLogin ? 85 : 0,
        ...primaryButtonStyles.button,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={primaryButtonStyles.text}>{label}</Text>
      <Ionicons
        style={primaryButtonStyles.icon}
        name="chevron-forward-outline"
        size={22}
        color={globalColors.white}
      />
    </Pressable>
  );
};

export default PrimaryButton;
