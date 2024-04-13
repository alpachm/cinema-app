import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { seatStyles } from '../../styles/checkoutScreenStyles'

interface Props {
    isOccupied: boolean,
    isAvailable?: boolean,
    is_Selected?: boolean
}

const Seat = ({isOccupied, isAvailable, is_Selected}: Props) => {
    const [isSelected, setIsSelected] = useState(false)

    const setColor = () => {
        if(isAvailable) return seatStyles.available;
        if(is_Selected) return seatStyles.selected;

        if(isOccupied){
            return seatStyles.occupied;
        }else if(isSelected){
            return seatStyles.selected;
        }else {
            return seatStyles.available;
        }
    }

const onPress = () => {
    if(!isOccupied) setIsSelected(!isSelected);
}

  return (
    <Pressable 
    onPress={onPress}
    style={{...seatStyles.container, ...setColor()}}></Pressable>
  )
}

export default Seat