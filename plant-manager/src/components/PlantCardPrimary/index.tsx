import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title, Image } from './style'

interface IPlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

export const PlantCardPrimary = ({ data: { name, photo }, ...rest }: IPlantCardPrimaryProps) => {
  return (
    <Container {...rest}>
      <Image uri={ photo } width={ 70 } height={ 70 }/>
      <Title>{ name }</Title>
    </Container>
  )
}
