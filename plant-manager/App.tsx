import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import React from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppLoading />
      </View>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <Routes />
    </>
  )
}
