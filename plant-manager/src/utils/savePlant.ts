import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

interface IPlantSaveProps {
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

interface IStoragePlantsProps {
  [id: string]: {
    data: IPlantSaveProps
  }
}

export const savePlant = async (plant: IPlantSaveProps): Promise<void> => {
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

export const loadPlants = async (): Promise<IPlantSaveProps[]> => {
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
