import React from 'react'
import { View } from 'react-native'
import Seat from './Seat'
import * as dataSeats from './../../utils/checkoutScreen';
import { SeatsColumnsStyles } from '../../styles/checkoutScreenStyles';

const SeatsColumns = () => {
  return (
    <View style={SeatsColumnsStyles.container}>
        <View style={SeatsColumnsStyles.columnsContainer}>
            <View style={SeatsColumnsStyles.column}>
                {
                    dataSeats.leftColumns.a.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.leftColumns.b.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.leftColumns.c.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.leftColumns.d.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
        </View>

        <View style={SeatsColumnsStyles.columnsContainer}>
            <View style={SeatsColumnsStyles.column}>
                {
                    dataSeats.rightColumns.e.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.rightColumns.f.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.rightColumns.g.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
            <View style={SeatsColumnsStyles.column}>
            {
                    dataSeats.rightColumns.h.map(seat => (
                        <Seat 
                        key={seat.id}
                        isOccupied={seat.isOccupied} 
                        />
                    ))
                }
            </View>
        </View>
    </View>
  )
}

export default SeatsColumns