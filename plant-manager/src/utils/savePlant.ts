import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

export interface IPlantProps {
  id: number
  name: string
  photo: string
  environments: Array<string>
  about: string
  water_tips: string
  frequency: {
    times: number,
    repeat_every: string
  },
  dateTimeNotification: Date
  hour: string
}

export interface IStoragePlantsProps {
  [id: string]: {
    data: IPlantProps
  }
}

export const savePlant = async (plant: IPlantProps): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlants = data ? (JSON.parse(data) as IStoragePlantsProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({
      ...newPlant,
      ...oldPlants
    }))
  } catch (error) {
    throw new Error(error)
  }
}

export const loadPlants = async (): Promise<IPlantProps[]> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const allPlants = data ? (JSON.parse(data) as IStoragePlantsProps) : {}

    const plantsSorted = Object.keys(allPlants).map(plant => {
      return {
        ...allPlants[plant].data,
        hour: format(new Date(allPlants[plant].data.dateTimeNotification), 'HH:mm')
      }
    })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      )

    return plantsSorted
  } catch (error) {
    throw new Error(error)
  }
}

export const deletePlant = async (id: number): Promise<void> => {
  const data = await AsyncStorage.getItem('@plantmanager:plants')
  const plants = data ? (JSON.parse(data) as IStoragePlantsProps) : {}
  delete plants[id]

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants))
}
