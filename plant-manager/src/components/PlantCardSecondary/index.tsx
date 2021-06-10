import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title, Image, Info, TimeLabel, Time } from './style'

interface IPlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
}

export const PlantCardSecondary = ({ data: { name, photo, hour }, ...rest }: IPlantCardPrimaryProps) => {
  return (
    <Container {...rest}>
      <Image uri={ photo } width={ 50 } height={ 50 }/>
      <Title>{ name }</Title>
      <Info>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{hour}</Time>
      </Info>
    </Container>
  )
}
