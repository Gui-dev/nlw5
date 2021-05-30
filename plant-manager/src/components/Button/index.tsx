import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, ButtonText } from './style'

interface IButtonProps extends TouchableOpacityProps {
  title?: string
}

export const Button = ({ title }: IButtonProps) => {
  return (
    <Container>
      <ButtonText>
        { title }
      </ButtonText>
    </Container>
  )
}
