import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome } from './../screens/Welcome'
import { UserIdentification } from './../screens/UserIdentification'
import { Confirmation } from './../screens/Confirmation'

export const Routes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
      >
        <Screen name="Welcome" component={ Welcome }/>
        <Screen name="UserIdentification" component={ UserIdentification }/>
        <Screen name="Confirmation" component={ Confirmation }/>
      </Navigator>
    </NavigationContainer>
  )
}
