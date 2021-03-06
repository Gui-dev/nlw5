import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome } from './../screens/Welcome'
import { UserIdentification } from './../screens/UserIdentification'
import { Confirmation } from './../screens/Confirmation'
import { PlantSave } from './../screens/PlantSave'

import { TabRoutes } from './tab.routes'

export const StackRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF'
        }
      }}
    >
      <Screen name="Welcome" component={ Welcome }/>
      <Screen name="UserIdentification" component={ UserIdentification }/>
      <Screen name="Confirmation" component={ Confirmation }/>
      <Screen name="PlantSelect" component={ TabRoutes }/>
      <Screen name="PlantSave" component={ PlantSave }/>
      <Screen name="MyPlants" component={ TabRoutes }/>
    </Navigator>
  )
}
