/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Load } from '../../components/Load'
import { Header } from '../../components/Header'
import { loadPlants } from './../../utils/savePlant'
import waterDrop from './../../assets/waterdrop.png'
import { Container, Spotlight, Image, SpotlightText, Plants, PlantsTitle, PlantList } from './style'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'

interface IMyPlantsProps {
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

export const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<IMyPlantsProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  useEffect(() => {
    const loadStorageData = async () => {
      const plantsStoraged = await loadPlants()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR
        }
      )

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} em ${nextTime}`)
      setMyPlants(plantsStoraged)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  if (loading) {
    return (
      <Load />
    )
  }

  return (
    <Container>
      <Header />
      <Spotlight>
        <Image source={ waterDrop }/>
        <SpotlightText>{ nextWatered }</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Proximas regadas</PlantsTitle>

        <PlantList
          data={ myPlants }
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => {
            return (
              <PlantCardSecondary
                data={{ name: item.name, photo: item.photo, hour: item.hour }}
              />
            )
          }}
        />
      </Plants>
    </Container>
  )
}
