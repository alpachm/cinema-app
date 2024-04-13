import React, { useState } from 'react'
import { Pressable, ScrollView } from 'react-native'
import { hoursData } from '../../utils/checkoutScreen/hoursData'
import Hour from './Hour'
import { CarrouselHoursStyles } from '../../styles/checkoutScreenStyles'

const CarrouselHours = () => {
    const [selectedHourIndex, setSelectedHourIndex] = useState<number>()

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            hoursData.map((hour, index) => (
                <Pressable
                onPress={() => setSelectedHourIndex(index)}
                style={CarrouselHoursStyles.hoursContainer}
                key={hour.id}
                >
                    <Hour hour={hour} isSelected={index === selectedHourIndex} />
                </Pressable>
            ))
        }
    </ScrollView>
  )
}

export default CarrouselHours