import React from 'react'
import { Animated } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import colors from '../../styles/colors'
import { SwipeableContainer, SwipeableButton, Container, Title, Image, Info, TimeLabel, Time } from './style'

interface IPlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

export const PlantCardSecondary = ({ data: { name, photo, hour }, handleRemove, ...rest }: IPlantCardPrimaryProps) => {
  return (
    <SwipeableContainer
      overshootRight={ false }
      renderRightActions={ () => {
        return (
          <Animated.View>
            <SwipeableButton
              {...rest}
              onPress={ handleRemove }
            >
              <Feather name="trash" size={ 32 } color={ colors.white }/>
            </SwipeableButton>
          </Animated.View>
        )
      }}
    >
      <Container {...rest}>
        <Image uri={ photo } width={ 50 } height={ 50 }/>
        <Title>{ name }</Title>
        <Info>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{hour}</Time>
        </Info>
      </Container>
    </SwipeableContainer>
  )
}
