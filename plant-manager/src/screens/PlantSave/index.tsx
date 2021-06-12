import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'

import { Button } from '../../components/Button'
import waterDrop from './../../assets/waterdrop.png'
import {
  ScrollContainer, Container, PlantInfo, PlantName, PlantAbout, Controller, TipContainer, TipImage, TipText,
  AlertLabel, TimePickerButton, TimePickerText
} from './style'
import { savePlant } from '../../utils/savePlant'

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

export const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
  const { navigate } = useNavigation()
  const route = useRoute()
  const plant = route.params as IPlantSaveProps

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Ooops, Esse horário já passou', 'Escolha um horário válido ⏰')
    }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }

  const handleDateTimePickerForAndroid = () => {
    setShowDatePicker(!showDatePicker)
  }

  const handleSave = async (plant: IPlantSaveProps) => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })
      navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor',
        buttonTitle: 'Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      })
    } catch {
      Alert.alert('Ooops, Erro ao Salvar', 'Não foi possível salvar sua planta 🌱')
    }
  }

  return (
    <ScrollContainer>
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} width={ 150 } height={ 150 }/>

          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>

        <Controller>
          <TipContainer>
            <TipImage source={waterDrop}/>
            <TipText>{plant.water_tips
            }</TipText>
          </TipContainer>

          <AlertLabel>Escolha o melhor horário para ser lemabrado</AlertLabel>

          { showDatePicker && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                display="spinner"
                onChange={ handleChangeTime }
              />
          )}

          { Platform.OS === 'android' && (
            <TimePickerButton onPress={ handleDateTimePickerForAndroid }>
              <TimePickerText>
                {`Mudar horário ${format(selectedDateTime, 'HH:mm')}`}
              </TimePickerText>
            </TimePickerButton>
          )}

          <Button
            title="Cadastrar Planta"
            onPress={ () => handleSave(plant) }
          />
        </Controller>
      </Container>
    </ScrollContainer>
  )
}
