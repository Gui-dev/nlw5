import AsyncStorage from '@react-native-async-storage/async-storage'

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
}

interface ISavePlantsProps {
  [id: string]: {
    data: IPlantSaveProps
  }
}

export const savePlant = async (plant: IPlantSaveProps): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlants = data ? (JSON.parse(data) as ISavePlantsProps) : {}

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
