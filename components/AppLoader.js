import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function AppLoader() {
  return (
    <View style ={[StyleSheet.absoluteFillObject,styles.container]}>
      <LottieView source={require('../assets/101191-submit-application-successfully.json')} autoPlay loop/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:'rgba(0,0,0,0.3)',
        zIndex:1
    }
})