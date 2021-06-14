import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'

import { IPlantProps } from './src/utils/savePlant'
import { Routes } from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as IPlantProps
        console.log(data)
      }
    )
    return () => subscription.remove()
  }, [])

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
