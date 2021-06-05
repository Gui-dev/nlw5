import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { Header } from '../../components/Header'
import { EnvironmentButton } from '../../components/EnvironmentButton'
import { PlantCardPrimary } from '../../components/PlantCardPrimary'
import { Load } from '../../components/Load'
import { api } from '../../services/api'
import colors from '../../styles/colors'
import {
  Container, Head, Title, SubTitle, ButtonContainer, ButtonList,
  PlantsContainer, PlantsList
} from './style'

interface IEnvironmentsProps {
  key: string
  title: string
}

interface IPlantsListProps {
  id: number
  name: string
  photo: string
  environments: Array<string>
}

export const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<IEnvironmentsProps[]>([])
  const [plantsList, setPlantsList] = useState<IPlantsListProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<IPlantsListProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  // const [loadedAll, setLoadedAll] = useState(false)

  useEffect(() => {
    api.get('plants_environments?_sort=title&_order=asc')
      .then(({ data }) => {
        setEnvironments([
          {
            key: 'all',
            title: 'Todos'
          },
          ...data
        ])
      })
  }, [])

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=4`)

    if (!data) return setLoading(true)

    if (page > 1) {
      setPlantsList(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlantsList(data)
      setFilteredPlants(data)
    }
    setLoading(false)
    setLoadingMore(false)
  }

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return
    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fetch()
  }

  const handleEnvironmentSelected = (key: string) => {
    setEnvironmentSelected(key)

    if (environmentSelected === 'all') {
      return setFilteredPlants(plantsList)
    }

    const filtered = plantsList.filter(plant =>
      plant.environments.includes(key)
    )
    setFilteredPlants(filtered)
  }

  if (loading) {
    return (
      <Load />
    )
  }

  return (
    <Container>
      <Head>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Head>

      <ButtonContainer>
        <ButtonList
          data={environments}
          keyExtractor={(item: any) => String(item.key)}
          renderItem={({ item: environment }: any) => {
            return (
              <EnvironmentButton
                key={String(environment.key)}
                title={ environment.title }
                active={ environment.key === environmentSelected }
                onPress={ () => handleEnvironmentSelected(environment.key) }
              />
            )
          }}
        />
      </ButtonContainer>

      <PlantsContainer>
        <PlantsList
          data={filteredPlants}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item: plant }: any) => {
            return (
              <PlantCardPrimary
                key={String(plant.id)}
                data={{ name: plant.name, photo: plant.photo }}
              />
            )
          }}
          onEndReachedThreshold={ 0.1 }
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? (<ActivityIndicator color={ colors.green_dark }/>)
              : <></>
          }
        />
      </PlantsContainer>

    </Container>
  )
}
