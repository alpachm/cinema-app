import React from 'react'
import { Text, View } from 'react-native'
import { IHour } from '../../interfaces/checkoutScreen-interfaces'
import { HourStyles } from '../../styles/checkoutScreenStyles';
import { globalColors } from '../../styles/globalStyles';

interface Props{
    hour: IHour;
    isSelected: boolean;
}

const Hour = ({hour, isSelected}: Props) => {
  return (
    <View style={{...HourStyles.container, backgroundColor: isSelected ? globalColors.primaryColor : globalColors.secondaryLightColor}}>
        <Text style={{...HourStyles.text, color: isSelected ? globalColors.white : globalColors.borderSeatColor}}>{hour.hour}</Text>
    </View>
  )
}

export default Hour