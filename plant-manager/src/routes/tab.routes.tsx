import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../styles/colors'
import { PlantSelect } from '../screens/PlantSelect'
import { MyPlants } from '../screens/MyPlants'

export const TabRoutes: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60
        }
      }}
    >
      <Screen
        name="NovaPlanta"
        component={PlantSelect}
        options={{
          title: 'Nova Planta',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ size, color }: {size: number, color: string}) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color}/>
          )
        }}
      />

      <Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          title: 'Minhas Plantas',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ size, color }: {size: number, color: string}) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color}/>
          )
        }}
      />
    </Navigator>
  )
}
