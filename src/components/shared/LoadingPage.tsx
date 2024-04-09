import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { loadingPageStyles } from '../../styles/loadingPageStyles'
import { globalColors, globalStyles } from '../../styles/globalStyles'

const LoadingPage = () => {

  return (
    <View style={{...globalStyles.container, ...loadingPageStyles.container}}> 
        <ActivityIndicator size={"large"} color={globalColors.primaryColor}/>
    </View>
  )
}

export default LoadingPage